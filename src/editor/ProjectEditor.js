import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Menu } from 'semantic-ui-react'

import C from '../common/Constants.js';

import { istrue, isundef, isvalid, makeid } from '../common/tool.js';

import { LayoutDivider, DividerDirection} from './LayoutDivider.js';

import { Tab } from '../component/Tab.js';

import GalleryView from './GalleryView.js';
import ScriptView from './ScriptView.js';
import Workspace from './Workspace.js';

import AttributeEditor from './AttributeEditor.js';

import './Editor.css';

import { appOpt } from '../common/appSetting.js';



class ProjectEditor extends React.Component {
	static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    projectList: PropTypes.array.isRequired,
    onCloseProject: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
    	activeIndex: -1,
    	focusedNode: null,
    	projectList: [],
      leftWidth: 300,
      bottomHeight: 250
    };

    this.handleTabClose = this.handleTabClose.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    let { activeIndex, projectList } = this.state;

    const newState = {
      projectList: nextProps.projectList
    };

    if( istrue(nextProps.addingNew) ) {
      newState.activeIndex = nextProps.projectList.length - 1;
    } else if( nextProps.projectList.length === 1 || (activeIndex === -1 && nextProps.projectList.length > 0) ) {
      newState.activeIndex = 0;
    }

    this.setState(newState);
  }

  handleEvent = (type, param) => {
  	const { activeIndex, projectList } = this.state;

  	if( activeIndex < 0 ) {
  		console.log('ERROR: PROJECT NOT DEFINED.');
  		return;
  	}

  	if( type === C.evtSelectNode ) {
  		const prjData = projectList[activeIndex];
  		this.setState({ focusedNode:prjData.nodes[param] });
  	}
  }

  handleTabChange = (tabIndex) => {
  	this.setState({
  		activeIndex: tabIndex,
  		focusedNode: null,
  		attributes: []
  	});
  }

  handleTabClose = (tabIndex) => {
    const closed = this.props.onCloseProject(tabIndex);

    if( closed && tabIndex <= this.state.activeIndex ) {
      this.handleTabChange(this.state.activeIndex - 1);
    }
  }

  handleValueChange = (propIdx, value) => {
  	const { activeIndex, projectList, focusedNode } = this.state;

  	if( activeIndex < 0 || isundef(focusedNode) ) {
  		console.log('ERROR: PROJECT NOT DEFINED.');
  		return;
  	}

  	console.log('valueChanged', propIdx, value);

  	focusedNode.name = value;

  	this.setState({ projectList: projectList });
  }

  // type: gallery, info
  handleLayoutChange = (type) => (f, t) => {
    console.log('Layout Change Event', f, t);

    let { leftWidth, bottomHeight } = this.state;

    if( 'gallery' === type ) {
      leftWidth += t - f;
    } else if( 'info' === type ) {
      bottomHeight += t - f;
    }

    this.setState({ leftWidth:leftWidth, bottomHeight:bottomHeight });
  }

  render () {
  	const { width, height } = this.props;
  	const { activeIndex, projectList, leftWidth, bottomHeight } = this.state;

    const dividerSize = 6;

  	const
  		wsHeight = height - bottomHeight - 5 - dividerSize, // 22
  		wsWidth = width - leftWidth - 3
  	;

  	const workPanes = [];
    projectList.map((p, i) => {
      workPanes.push({
        title: p.title,
        closeButton: true
      });
    });

    const activeProject = activeIndex >= 0 ? projectList[activeIndex] : null;

  	return (
      <div className="editor" style={{ width, height }}>
        <div className="leftPane" style={{ flexBasis:leftWidth }}>
        	<GalleryView galleryList={appOpt.getGalleryList()} />
        </div>
        <LayoutDivider direction={DividerDirection.vertical} size={dividerSize} onLayoutChange={this.handleLayoutChange('gallery')} />
        <div className="rightPane" style={{ flexBasis:wsWidth }}>
        	<div className="mainPane" style={{ flexBasis:wsHeight }}>
        		<Tab activeTab={activeIndex}
              onTabChange={this.handleTabChange}
              onTabClose={this.handleTabClose}
              panes={workPanes}
            />
            { isvalid(activeProject) && (
              <Workspace key={'ws-' + activeIndex}
                width={wsWidth} height={wsHeight}
                eventRelay={this.handleEvent}
                projectData={activeProject}
              />
            )}
        	</div>
          <LayoutDivider direction={DividerDirection.horizontal} size={dividerSize} onLayoutChange={this.handleLayoutChange('info')} />
        	<div className="bottomPane" style={{ flexBasis:bottomHeight }}>
        		<AttributeEditor
        			height={bottomHeight}
        			width={wsWidth}
        			node={this.state.focusedNode}
        			handleValueChange={this.handleValueChange}
        		/>
        	</div>
        </div>
      </div>
    );
  }
}

export default ProjectEditor;
export { ProjectEditor };
