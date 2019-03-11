import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Menu, Tab } from 'semantic-ui-react'

import C from '../common/Constants.js';

import {isundef} from '../common/tool.js';

import GalleryView from './GalleryView.js';
import ScriptView from './ScriptView.js';
import Workspace from './Workspace.js';

import AttributeEditor from './AttributeEditor.js';

import './Editor.css';

import { appOpt } from '../common/appSetting.js';

import sample from '../assets/svg/sample.svg';



class Editor extends React.Component {
	static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    const testProject = {
    	title: 'Project1',
    	description: 'project is blah~ blah~',
    	author: 'mh9.kim@lge.com',

      nodes: {
        'n1': { id:'n1', name:'test1', image:sample, x:100, y:100 },
        'n2': { id:'n2', name:'test2', image:sample, x:200, y:200 },
        'n3': { id:'n3', name:'test3', image:sample, x:200, y:300 },
        'n4': { id:'n4', name:'test4', image:sample, x:300, y:300 }
      },

      links: [
        { begin:'n1', end:'n2' },
        { begin:'n2', end:'n3' }
      ]
    };

    const testProject2 = {
    	title: 'Project2',
    	description: 'project is blah~ blah~',
    	author: 'mh9.kim@lge.com',

      nodes: {
        'n1': { id:'n1', name:'test1', image:sample, x:100, y:100 },
        'n2': { id:'n2', name:'test2', image:sample, x:200, y:200 },
        'n3': { id:'n3', name:'test3', image:sample, x:200, y:300 },
        'n4': { id:'n4', name:'test4', image:sample, x:300, y:300 }
      },

      links: [
        { begin:'n1', end:'n2' },
        { begin:'n2', end:'n3' }
      ]
    };

    this.state = {
    	activeIndex: 0,
    	focusedNode: null,
    	projectList: [testProject, testProject2],
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

  render () {
  	const { width, height } = this.props;
  	const { projectList } = this.state;
  	const leftWidth = 300, bottomHeight = 250;

  	const
  		wsHeight = height - bottomHeight + 1,
  		wsWidth = width - leftWidth - 3
  	;

  	const workPanes = [];
  	for(let i = 0; i < projectList.length; ++i) {
  		const p = projectList[i];
  		workPanes.push({
  			menuItem: p.title,
  			render: () => (
 					<Workspace key={'ws-' + i} width={wsWidth} height={wsHeight} eventRelay={this.handleEvent} projectData={p} />
  			)
  		});
  	}

  	return (
      <div className="editor" style={{ width, height }}>
        <div className="leftPane" style={{ flexBasis:leftWidth }}>
        	<GalleryView galleryList={appOpt.getGalleryList()} />
        </div>
        <div className="rightPane" style={{ flexBasis:wsWidth }}>
        	<div className="mainPane" style={{ flexBasis:wsHeight }}>
        		<Tab onTabChange={this.handleTabChange} panes={workPanes} />
        	</div>
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

export default Editor;
export { Editor };
