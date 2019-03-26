import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { isvalid } from '../common/tool.js';

import { LayoutDivider, DividerDirection} from './LayoutDivider.js';

import { Tab } from '../component/Tab.js';

import GalleryView from './GalleryView.js';
import Workspace from './Workspace.js';

// import AttributeEditor from './AttributeEditor.js';
import ScriptEditor from './ScriptEditor.js';

import './Editor.css';



@inject('appData')
@observer
class ProjectEditor extends React.Component {
	static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
    	focusedNode: null,
      leftWidth: 300,
      bottomHeight: 250
    };

    this.handleTabClose = this.handleTabClose.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    /*
    const { appData } = nextProps;
    console.log('ProjectEditor NextProps', appData.sizeOfProject(), JSON.stringify(appData.getProject(0)));
    
    let { activeIndex } = this.state;

    const newState = {
      projectList: nextProps.projectList
    };

    if( istrue(nextProps.addingNew) ) {
      newState.activeIndex = nextProps.projectList.length - 1;
    } else if( nextProps.projectList.length === 1 || (activeIndex === -1 && nextProps.projectList.length > 0) ) {
      newState.activeIndex = 0;
    }

    this.setState(newState); // */
  }

  handleEvent = (type, param) => {
    /*
    const { appData } = this.props;
  	const { activeIndex } = this.state;

  	if( activeIndex < 0 ) {
  		console.log('ERROR: PROJECT NOT DEFINED.');
  		return;
  	}

  	if( type === C.evtSelectNode ) {
  		const prjData = appData.getProject(activeIndex);
  		this.setState({ focusedNode:prjData.nodes[param] });
  	} // */
  }

  handleTabChange = (tabIndex) => {
    // console.log('PE tabChange', tabIndex);

    this.props.appData.setActiveProject(tabIndex);

  	this.setState({
  		focusedNode: null,
  		attributes: []
  	});
  }

  handleTabClose = (tabIndex) => {
    this.props.appData.removeProject(tabIndex);
  }

  handleValueChange = (propIdx, value) => {
    /*
  	const { activeIndex, projectList, focusedNode } = this.state;

  	if( activeIndex < 0 || isundef(focusedNode) ) {
  		console.log('ERROR: PROJECT NOT DEFINED.');
  		return;
  	}

  	console.log('valueChanged', propIdx, value);

  	focusedNode.name = value;

  	this.setState({ projectList: projectList });
    // */
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
  	const { width, height, appData } = this.props;
  	const { leftWidth, bottomHeight } = this.state;

    const dividerSize = 4;
    const activeIndex = appData.getActiveProjectIndex();

  	const
  		wsHeight = height - bottomHeight - 7 - dividerSize, // 22, IE에서 120정도 부족함. 원인 파악요.
  		wsWidth = width - leftWidth - 3
  	;

    // console.log('ProjectEditor render', activeIndex, appData.sizeOfProject());

  	const workPanes = [];

    for(let i = 0; i < appData.sizeOfProject(); ++i) {
      const p = appData.getProject(i);
      workPanes.push({
        title: p.title,
        closeButton: true
      });
    }

    const activeProject = activeIndex >= 0 ? appData.getProject(activeIndex) : null;

  	return (
      <div className="editor" style={{ width, height }}>
        <div className="leftPane" style={{ flexBasis:`${leftWidth}px` }}>
        	<GalleryView height={height} />
        </div>
        <div style={{ flexBasis:`${dividerSize}px` }}>
          <LayoutDivider direction={DividerDirection.vertical}
            size={dividerSize}
            onLayoutChange={this.handleLayoutChange('gallery')}
          />
        </div>
        <div className="rightPane" style={{ flexBasis:`${wsWidth}px` }}>
        	<div className="mainPane" style={{ flexBasis:`${wsHeight}px` }}>
        		<Tab activeTab={activeIndex}
              onTabChange={this.handleTabChange}
              onTabClose={this.handleTabClose}
              panes={workPanes}
            />
            <div className="workspace" style={{ width:wsWidth, height:wsHeight }}>
              { isvalid(activeProject) && (
                <Workspace
                  key={'ws-' + activeIndex + '/' + activeProject.pid}
                  pid={activeProject.pid}
                  width={wsWidth} height={wsHeight}
                />
              )}
            </div>
        	</div>
          <div style={{ flexBasis:`${dividerSize}px` }}>
            <LayoutDivider direction={DividerDirection.horizontal}
              size={dividerSize}
              onLayoutChange={this.handleLayoutChange('info')}
            />
          </div>
        	<div className="bottomPane" style={{ flexBasis:`${bottomHeight}px` }}>
        		<ScriptEditor
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
