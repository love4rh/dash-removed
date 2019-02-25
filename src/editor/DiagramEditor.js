import React from 'react';
import PropTypes from 'prop-types';

import {isvalid, istrue, makeid} from '../common/tool.js';

import './DiagramEditor.css';

import sample from '../assets/svg/sample.svg';


const iconSize = 48;
const arrowSize = 10;


const calcCenter = (x, y, size) => {
  return { x: (x + size / 2), y: (y + size / 2) };
}

const calcTheta = (x1, y1, x2, y2) => {
  let theta = 0;

  if( x2 == x1 ) {
    theta = (y2 >= y1 ? 90 : 270) * Math.PI / 180;
  } else {
    theta = x2 > x1
      ? Math.atan((y2 - y1) / (x2 - x1))
      : Math.atan((y1 - y2) / (x1 - x2)) + Math.PI;
  }

  return theta;
}



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
        'n2': { id:'n2', name:'test2', image:sample, x:100, y:100 },
        'n3': { id:'n3', name:'test3', image:sample, x:100, y:200 }
      },

      links: [
        { id:'l1', begin:'n1', end:'n2' }
      ],

      status: 'normal',  // normal, connecting, drag node, drag link, selecting
      statusParam: {},

      selected: {},
    };
  }

  componentDidMount () {
    // this.drawAll();
  }

  componentDidUpdate () {
    // this.drawAll();
  }

  drawLink = (linkId, n1, n2) => {
    if( !isvalid(n1) || !isvalid(n2) )
      return null;

    const p1 = calcCenter(n1.x, n1.y, iconSize);
    const p2 = calcCenter(n2.x, n2.y, iconSize);

    const dx = p2.x - p1.x, dy = p2.y - p1.y;
    const d = Math.sqrt(dx * dx + dy * dy);

    if( d < iconSize )
      return null;

    const radius = 30;
    const
      sX = p1.x + radius * dx / d,
      sY = p1.y + radius * dy / d,
      eX = p2.x - (radius + arrowSize) * dx / d,
      eY = p2.y - (radius + arrowSize) * dy / d;

    const th = calcTheta(p1.x, p1.y, p2.x, p2.y);

    const arrowX = [ -arrowSize + 3, -arrowSize, +arrowSize, -arrowSize ];
    const arrowY = [  0,  -arrowSize + 2,   0,   +arrowSize - 2];
    
    let path = '';
    for(let i = 0; i < arrowX.length; ++i) {
      if( i > 0 )
        path += ',';

      path += ((Math.cos(th) * arrowX[i] - Math.sin(th) * arrowY[i] + eX)
        + ',' + (Math.sin(th) * arrowX[i] + Math.cos(th) * arrowY[i] + eY));
    }

    return (
      <g key={makeid(6)} onMouseDown={this.onMouseDown(linkId)}>
        <line
          x1={sX}
          y1={sY}
          x2={eX}
          y2={eY}
          style={{ strokeWidth:4, stroke:'#111' }}
        />
        <polygon points={path} style={{ fill:'#111' }} />
      </g>
    );
  }

  isSelected = (n, withSelectinf) => {
  	const { selected, status, statusParam } = this.state;

  	if( withSelectinf && status === 'selecting' ) {
  		const { x1, y1, x2, y2 } = statusParam;
  		const
  			sx = Math.min(x1, x2),
  			sy = Math.min(y1, y2),
  			ex = Math.max(x1, x2),
  			ey = Math.max(y1, y2)
  		;

  		return sx <= n.x && sy <= n.y && (n.x + iconSize) <= ex && (n.y + iconSize) <= ey;
  	}

  	return istrue(selected[n.id]);
  }

  drawNode = (n) => {
  	const m = 4;
  	const { selected, status, statusParam } = this.state;

    return (
    	<g key={makeid(6)}>
    		{ !this.isSelected(n, false)
    			? null
    			: <rect rx={m} ry={m} x={n.x - m} y={n.y - m} width={iconSize + m * 2} height={iconSize + m * 2}
  						style={{ fill:'none', stroke:'blue', strokeWidth:2 }} />
    		}
	      <image key={n.id}
	        x={n.x} y={n.y}
	        width={iconSize} height={iconSize}
	        href={n.image}
	        onMouseDown={this.onMouseDown(n.id)}
	      />
	    </g>
    );
  }

  // eslint-disable-next-line
  onMouseDown = (type) => (ev) => {
    const wrapper = this.refs.wrapper;

    // const { shiftKey } = ev; // altKey, ctrlKey,
    const
      x = ev.clientX - wrapper.offsetLeft + wrapper.scrollLeft,
      y = ev.clientY - wrapper.offsetTop + wrapper.scrollTop
    ; // */

    let status = 'dragNode';
    let statusParam = { id:type, x1:x, y1:y, x2:x, y2:y };
    let selected = {};

    console.log(type, ev.type, x, y, ev.button, ev.buttons);

    // Wrapping area
    if( type === 'canvas' ) {
      // hitTest() for link
      status = 'selecting'; // or dragLink
    } else {
      const n = this.state.nodes[type];

      if( isvalid(n) ) {
	      statusParam.ox = n.x;
	      statusParam.oy = n.y;

	      selected[type] = true;
	    } else { // maybe link
	    	status = 'normal';
	    }
    }

    this.setState({ status:status, statusParam:statusParam, selected:selected });

    ev.preventDefault();
    ev.stopPropagation();

    document.addEventListener('mouseup', this.onMouseEvent, {capture: true});
    document.addEventListener('mousemove', this.onMouseEvent, {capture: true});
  }

  onMouseEvent = (ev) => {
    const { nodes, status, statusParam } = this.state;
    const wrapper = this.refs.wrapper;

    const
      x = ev.clientX - wrapper.offsetLeft + wrapper.scrollLeft,
      y = ev.clientY - wrapper.offsetTop + wrapper.scrollTop
    ;

    // console.log(ev.type, x, y, ev);

    if( 'mousemove' === ev.type ) {
      if( status === 'selecting' ) {
        statusParam.x2 = x;
        statusParam.y2 = y;
        this.setState({ statusParam:statusParam });
      } else if( status === 'dragNode' ) {
        const { ox, oy, x1, y1 } = statusParam;
        const n = nodes[statusParam.id];
        nodes[statusParam.id] = { ...n, x: ox + (x - x1), y: oy + (y - y1) };
        this.setState({ nodes:nodes });
      }
    } else if( 'mouseup' === ev.type ) {
    	if( status === 'selecting' ) {
    		const selected = {};

    		for(let id in nodes) {
    			if( this.isSelected(nodes[id], true) ) {
    				selected[id] = true;
    			}
    		}

    		this.setState({ selected:selected });
    	}

      this.setState({ status:'normal' });

      document.removeEventListener('mouseup', this.onMouseEvent, {capture: true});
      document.removeEventListener('mousemove', this.onMouseEvent, {capture: true});
    }
  }

  render () {
    const { width, height } = this.props;
    const { links, nodes, status, statusParam } = this.state;

    const svgTags = [];

    for(let i = 0; i < links.length; ++i) {
      svgTags.push(this.drawLink(links[i].id, nodes[links[i].begin], nodes[links[i].end]));
    }

    for(let id in nodes) {
      svgTags.push(this.drawNode(nodes[id]));
    }

    if( 'selecting' === status ) {
      const { x1, y1, x2, y2 } = statusParam;
      svgTags.push(
        <rect key="selection"
          x={Math.min(x1, x2)}
          y={Math.min(y1, y2)}
          width={Math.abs(x1 - x2)}
          height={Math.abs(y1 - y2)}
          style={{ fill:'none', strokeWidth:1, stroke:'#000', strokeDasharray:'10,10' }}
        />
      );
    }

    return(
      <div ref="wrapper" style={{ height, width, overflow:'auto' }}>
        <svg width={width} height={height * 2} onMouseDown={this.onMouseDown('canvas')}>
          { svgTags.map((elem) => (elem)) }
        </svg>
      </div>
    )
  }
}

export default DiagramEditor;
export { DiagramEditor };
