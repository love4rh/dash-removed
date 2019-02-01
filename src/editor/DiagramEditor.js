import React from 'react';
import PropTypes from 'prop-types';

import './DiagramEditor.css';

import sample from '../assets/svg/sample.svg';


class DiagramEditor extends React.Component {
	static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
    	nodes: {
    		'n1': { id:'n1', name:'test1', image:sample, x:10, y:10 },
    		'n2': { id:'n2', name:'test2', image:sample, x:100, y:100 }
    	},

    	links: [
    		{ from:'n1', to:'n2' }
    	],

    	mouseState: {
    		status: 'normal'  // normal, connecting, drag node, drag link, selecting
    	}
    };
  }

  componentDidMount () {
    // this.drawAll();
  }

  componentDidUpdate () {
    // this.drawAll();
  }

  // eslint-disable-next-line
  onMouseDown = (type) => (ev) => {
  	let processed = true;
  	const wrapper = this.refs.wrapper;

  	// const { shiftKey } = ev; // altKey, ctrlKey,
    const
      x = ev.clientX - wrapper.offsetLeft + wrapper.scrollLeft,
      y = ev.clientY - wrapper.offsetTop + wrapper.scrollTop
    ; // */

    // Wrapping area
    if( type === 'canvas' ) {
    	//
    }

    console.log('Mouse Down', type, x, y, ev);

    if( processed ) {
  		ev.preventDefault();
    	ev.stopPropagation();
  	}
  }

  onMouseEvent = (ev) => {
  	const wrapper = this.refs.wrapper;

  	const
      x = ev.clientX - wrapper.offsetLeft + wrapper.scrollLeft,
      y = ev.clientY - wrapper.offsetTop + wrapper.scrollTop
    ;

    console.log(ev.type, x, y, ev);
  }

  render () {
  	const { width, height } = this.props;
  	const { nodes } = this.state;

  	const nodeTag = [];

  	for(let id in nodes) {
  		const o = nodes[id];
  		nodeTag.push(<image key={o.id} x={o.x} y={o.y} width={48} height={48} href={o.image} onMouseDown={this.onMouseDown(o.id)} />);
  	}

  	return(
  		<div ref="wrapper" style={{ height, width, overflow:'auto' }}>
	      <svg width={width} height={height * 2}
	      	onMouseDown={this.onMouseDown('canvas')}
	      	onMouseMove={this.onMouseEvent}
          onMouseUp={this.onMouseEvent}
        >
	      	{ nodeTag.map((t) => (t)) }
	      </svg>
	    </div>
    )
  }
}

export default DiagramEditor;
export { DiagramEditor };
