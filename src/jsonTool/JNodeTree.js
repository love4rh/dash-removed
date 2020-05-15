import React from 'react';
import PropTypes from 'prop-types';

import './css/JSONReport.css';



class JNodeTree extends React.Component {
	static propTypes = {
		rootNode: PropTypes.object.isRequired, // It shoule be a kind of JNode.
		onClickNode: PropTypes.func
	}

  constructor (props) {
    super(props);

    this.state = {
			rootNode: props.rootNode,
			selected: props.rootNode,
    };
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
	}
	
	handleClickNode = (node) => () => {
		this.setState({ selected: node });

		if( this.props.onClickNode ) {
			this.props.onClickNode(node);
		}
	}

  renderNode = (nodeList, root, level) => {
		const { selected } = this.state;

		// TODO level 고려
		const cname = ['treeNodeItem', (selected === root ? 'treeNodeSelected' : '')].join(' ');
		nodeList.push(
			<div key={`tree-${root.getPath()}`}
				className={cname}
				onClick={this.handleClickNode(root)}
			>
				{root.getName()}
			</div>
		);

		// Expand 체크
    for(let i = 0; i < root._children.length; ++i) {
			this.renderNode(nodeList, root._children[i], level + 1);
		}
  }

  render () {
		const { rootNode } = this.state;
		const nodeList = [];

		this.renderNode(nodeList, rootNode, 0);

		return (
				<div className="treeNodeBody">
					{ nodeList.map((tag) => tag) }
				</div>
		);
  }
}


export default JNodeTree;
export { JNodeTree };
