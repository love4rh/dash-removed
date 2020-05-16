import React from 'react';
import PropTypes from 'prop-types';

import './css/JSONReport.css';
import { Icon } from '@blueprintjs/core';



class JNodeItem extends React.Component {
	static propTypes = {
		node: PropTypes.object.isRequired, // It shoule be a kind of JNode.
		level: PropTypes.number,
		selected: PropTypes.bool,
		onClickHeader: PropTypes.func,
		onClickNode: PropTypes.func,
	}

  constructor (props) {
		super(props);

		const { level, selected, node } = this.props;

		this.state = {
			level, selected, node,
			expanded: node._expanded,
		};
	}

	handleClickHeader = () => {
		const { expanded } = this.state;

		if( this.props.onClickHeader ) {
			this.props.onClickHeader(this.state.node, !expanded);
		}
		
		this.setState({ expanded: !expanded });
	}

	handleClickNode = () => {
		if( this.props.onClickNode ) {
			this.props.onClickNode(this.state.node);
		}
	}

	render () {
		const { node, expanded, selected, level } = this.state;

		let cn2 = 'bp3-icon-standard';
		if( node.hasChild() ) {
			cn2 = expanded
				? 'bp3-tree-node-caret bp3-tree-node-caret-open bp3-icon-standard'
				: 'bp3-tree-node-caret bp3-icon-standard'
			;
		}

		// 데이터를 가지고 있는 애 표시하기

		return (
			<div key={`tree-${node.getPath()}`} className={['treeNodeItem', (selected ? 'treeNodeSelected' : '')].join(' ')}>
				<div className="inlineDiv" style={{ width:`${level * 16}px` }}>&nbsp;</div>
				<div className="treeNodeHeader" onClick={node.hasChild() ? this.handleClickHeader : null}>
					<span className={cn2} />
				</div>
				<div className="treeNodeContent" onClick={this.handleClickNode}>
					{ node.hasData() &&
						<div className="treeDataIcon"><Icon icon="panel-table" /></div>
					}
					{ node.isInParentData() &&
						<div className="treeDataIcon treeIconRotate"><Icon icon="one-column" /></div>
					}
					{node.getName()}
				</div>
			</div>
		);
	}
}



class JNodeTree extends React.Component {
	static propTypes = {
		rootNode: PropTypes.object.isRequired, // It shoule be a kind of JNode.
		onClickNode: PropTypes.func
	}

  constructor (props) {
    super(props);

    this.state = {
			rootNode: props.rootNode,
			selectedPath: props.rootNode.getPath(),
    };
  }

	handleClickHeader = (node, expanded) => {
		node._expanded = expanded;
		this.handleClickNode(node);
	}
	
	handleClickNode = (node) => {
		this.setState({ selectedPath: node.getPath() });

		if( this.props.onClickNode ) {
			this.props.onClickNode(node);
		}
	}

  renderNode = (nodeList, node, level) => {
		const { selectedPath } = this.state;
		const path = node.getPath();
		const selected = path === selectedPath;

		nodeList.push(
			<JNodeItem key={`tree-${selected}-${path}`}
				node={node}
				level={level}
				selected={selected}
				onClickHeader={this.handleClickHeader}
				onClickNode={this.handleClickNode}
			/>
		);

		for(let i = 0; node._expanded && i < node._children.length; ++i) {
			this.renderNode(nodeList, node._children[i], level + 1);
		}
	}
	
	handleKeyUp = (ev) => {
		console.log('KeyUp', ev.ctrlKey, ev.keyCode);
	}

  render () {
		const { rootNode } = this.state;
		const nodeList = [];

		this.renderNode(nodeList, rootNode, 0);

		return (
				<div className="treeMain" tabIndex="0" onKeyUp={this.handleKeyUp}>
					{ nodeList.map((tag) => tag) }
				</div>
		);
  }
}


export default JNodeTree;
export { JNodeTree };
