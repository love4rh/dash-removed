import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Menu, Tab } from 'semantic-ui-react'

import C from '../common/Constants.js';

import {isundef, isvalid} from '../common/tool.js';

import { LayoutDivider, DividerDirection} from './LayoutDivider.js';

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
  }

  constructor (props) {
    super(props);

    this.state = {
    	activeIndex: 0,
    	focusedNode: null,
    	projectList: this.props.projectList,
      leftWidth: 300,
      bottomHeight: 250
    };
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

  handleTabChange = (ev, data) => {
  	this.setState({
  		activeIndex: data.activeIndex,
  		focusedNode: null,
  		attributes: []
  	});
  }

  handleTabClose = (tabIndex) => (ev) => {
    console.log('Tab Closed', tabIndex);

    // ev.preventDefault();
    // ev.stopPropagation();
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
  	const { projectList, leftWidth, bottomHeight } = this.state;

    const dividerSize = 6;

  	const
  		wsHeight = height - bottomHeight - 22 - dividerSize,
  		wsWidth = width - leftWidth - 3
  	;

  	const workPanes = [];
  	for(let i = 0; i < projectList.length; ++i) {
  		const p = projectList[i];
  		workPanes.push({
  			menuItem: (
          <Menu.Item key={`openprj-${i}`}>
            {p.title}<span style={{width:'10px'}}>&nbsp;</span>
            <Button icon basic onClick={this.handleTabClose(i)}><Icon fitted name='close' /></Button>
          </Menu.Item>
        ),
  			render: () => {
          return (
   					<Workspace key={'ws-' + i} width={wsWidth} height={wsHeight} eventRelay={this.handleEvent} projectData={p} />
    			);
        }
  		});
  	}

  	return (
      <div className="editor" style={{ width, height }}>
        <div className="leftPane" style={{ flexBasis:leftWidth }}>
        	<GalleryView galleryList={appOpt.getGalleryList()} />
        </div>
        <LayoutDivider direction={DividerDirection.vertical} size={dividerSize} onLayoutChange={this.handleLayoutChange('gallery')} />
        <div className="rightPane" style={{ flexBasis:wsWidth }}>
        	<div className="mainPane" style={{ flexBasis:wsHeight }}>
        		<Tab onTabChange={this.handleTabChange} panes={workPanes} />
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
