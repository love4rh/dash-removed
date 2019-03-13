import React from 'react';
import PropTypes from 'prop-types';

import C from '../common/Constants.js';
import {isvalid, istrue, makeid, tickCount} from '../common/tool.js';

import './DiagramEditor.css';



// Pre-defined values
// -------------------------------
const _iconSize_ = 48;
const _arrowSize_ = 10;

const _objCanvas_ = 'canvas';
const _objNode_ = 'node';
const _objLink_ = 'link';

const _stNormal_ = 'normal';
const _stSelect_ = 'selecting';
const _stDragNode_ = 'dragNode';

const _clrSelect_ = 'blue';
const _clrLink_ = '#333';
const _clrRectSelect_ = '#000';

const _cssNodeText = { fill:'#000', font:'16px Verdana, Helvetica, Arial, sans-serif' };
const _cssTextWrap = { stroke:'white', strokeWidth:'0.6em' };
// -------------------------------


const calcCenter = (x, y, size) => {
  return { x: (x + size / 2), y: (y + size / 2) };
}

const calcTheta = (x1, y1, x2, y2) => {
  let theta = 0;

  if( x2 === x1 ) {
    theta = (y2 >= y1 ? 90 : 270) * Math.PI / 180;
  } else {
    theta = x2 > x1
      ? Math.atan((y2 - y1) / (x2 - x1))
      : Math.atan((y1 - y2) / (x1 - x2)) + Math.PI;
  }

  return theta;
}

const isPtInRect = (x1, y1, x2, y2, px, py) => {
	const
		sx = Math.min(x1, x2),
		sy = Math.min(y1, y2),
		ex = Math.max(x1, x2),
		ey = Math.max(y1, y2)
	;

	return sx <= px && sy <= py && px <= ex && py <= ey;
}

const makeLinkId = (index) => {
	return index;
}



class DiagramEditor extends React.Component {
  static propTypes = {
  	eventReciever: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    links: PropTypes.array.isRequired,
    nodes: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
      nodes: this.props.nodes,
      links: this.props.links,

      status: _stNormal_,  // normal, connecting, drag node, drag link, selecting
      statusParam: {},

      selected: {},
    };

    this.lastEvent = {};
  }

  componentDidMount () {
    // document.addEventListener('keydown', this.onKeyDown);

    // disable context menu when right-button clicked.
    document.addEventListener('contextmenu', (ev) => {
        ev.preventDefault();
    }, false);
  }

  componentDidUpdate () {
    // this.drawAll();
  }

  componentWillUnmount () {
    // document.removeEventListener('keydown', this.onKeyDown);
  }

  drawLink = (index, n1, n2) => {
    if( !isvalid(n1) || !isvalid(n2) )
      return null;

    const p1 = calcCenter(n1.x, n1.y, _iconSize_);
    const p2 = calcCenter(n2.x, n2.y, _iconSize_);

    const dx = p2.x - p1.x, dy = p2.y - p1.y;
    const d = Math.sqrt(dx * dx + dy * dy);

    if( d < _iconSize_ )
      return null;

    const radius = 30;
    const
      sX = p1.x + radius * dx / d,
      sY = p1.y + radius * dy / d,
      eX = p2.x - (radius + _arrowSize_) * dx / d,
      eY = p2.y - (radius + _arrowSize_) * dy / d;

    const th = calcTheta(p1.x, p1.y, p2.x, p2.y);

    const arrowX = [ -_arrowSize_ + 3, -_arrowSize_, +_arrowSize_, -_arrowSize_ ];
    const arrowY = [  0,  -_arrowSize_ + 2,   0,   +_arrowSize_ - 2];
    
    let path = '';
    for(let i = 0; i < arrowX.length; ++i) {
      if( i > 0 )
        path += ',';

      path += ((Math.cos(th) * arrowX[i] - Math.sin(th) * arrowY[i] + eX)
        + ',' + (Math.sin(th) * arrowX[i] + Math.cos(th) * arrowY[i] + eY));
    }

    const linkId = makeLinkId(index);
    const linkColor = this.isSelectedLink(linkId) ? _clrSelect_ : _clrLink_;

    return (
      <g key={makeid(6)} onMouseDown={this.onMouseDown(_objLink_, linkId)}>
        <line
          x1={sX} y1={sY} x2={eX} y2={eY}
          style={{ strokeWidth:4, stroke:linkColor }}
        />
        <polygon points={path} style={{ fill:linkColor }} />
      </g>
    );
  }

  isSelectedLink = (id) => {
  	return istrue(this.state.selected[id]);
  }

  isSelected = (n, withSelecting) => {
  	const { selected, status, statusParam } = this.state;

  	if( withSelecting && status === _stSelect_ ) {
  		const { x1, y1, x2, y2 } = statusParam;
  		const
  			sx = Math.min(x1, x2),
  			sy = Math.min(y1, y2),
  			ex = Math.max(x1, x2),
  			ey = Math.max(y1, y2)
  		;

  		return sx <= n.x && sy <= n.y && (n.x + _iconSize_) <= ex && (n.y + _iconSize_) <= ey;
  	}

  	return istrue(selected[n.id]);
  }

  drawNode = (n) => {
  	const m = 4;
  	// const { selected, status, statusParam } = this.state;
  	const tx = n.x + _iconSize_ / 2,
  		ty = n.y + _iconSize_ + 16;

    return (
    	<g key={makeid(6)}
    		onMouseDown={this.onMouseDown(_objNode_, n.id)}
    		onMouseMove={this.onMouseMove(_objNode_, n.id)}
    	>
	      <image key={n.id}
	        x={n.x} y={n.y}
	        width={_iconSize_} height={_iconSize_}
	        href={n.image}
	      />

	      <text textAnchor="middle" x={tx} y={ty} style={_cssTextWrap}>{n.name}</text>
	      <text textAnchor="middle" x={tx} y={ty} style={_cssNodeText}>{n.name}</text>

	      { !this.isSelected(n, false)
    			? null
    			: <rect rx={m} ry={m} x={n.x - m} y={n.y - m} width={_iconSize_ + m * 2} height={_iconSize_ + m * 2}
  						style={{ fill:'none', stroke:_clrSelect_, strokeWidth:2 }} />
    		}
	    </g>
    );
  }

  select = (id, add) => {
  	let selected = istrue(add) ? this.state.selected : {};

  	selected[id] = true;
    this.setState({ selected:selected });
  }

  selectAll = () => {
  	const { nodes, links } = this.state;

  	const selected = {};

		// check whether node is selected or not
		for(let id in nodes) {
			selected[id] = true;
		}

		// link
		for(let i = 0; i < links.length; ++i) {
			selected[makeLinkId(i)] = true;
		}

		this.setState({ selected:selected });
  }

  deleteSelected = () => {
  	// const { nodes, links, selected } = this.state;
  }

  onKeyDown = (ev) => {
    // console.log('keydown', ev.keyCode, ev.key, ev.ctrlKey, ev.altKey, ev.shiftKey);
    let processed = false;
    let { keyCode, ctrlKey } = ev;

    if( ctrlKey ) {
    	switch( keyCode ) {
    		case 65: // a -> select all
    			this.selectAll();
    			processed = true;
    			break;

      	case 46: // Delete -> delete
	      	this.deleteSelected();
	      	processed = true;
	      	break;

      	default:
      		break;
      }
    }

    if( processed ) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  // eslint-disable-next-line
  onMouseMove = (type, id) => (ev) => {
  	if( isvalid(this.props.getTooltip) ){
  		// TODO Tooltip Event?
  		this.props.getTooltip(type, id);
  	}

  	ev.preventDefault();
    ev.stopPropagation();
  }

  // eslint-disable-next-line
  onMouseDown = (type, id) => (ev) => {
    const wrapper = this.refs.wrapper;

    // const { shiftKey } = ev; // altKey, ctrlKey,
    const
      x = ev.clientX - wrapper.offsetLeft + wrapper.scrollLeft,
      y = ev.clientY - wrapper.offsetTop + wrapper.scrollTop
    ; // */

    let status = _stDragNode_;
    let statusParam = { type:type, id:id, ox:x, oy:y, x1:x, y1:y, x2:x, y2:y };

    // console.log(type, id, ev.type, x, y, ev.button, ev.buttons);

    // Wrapping area
    if( type === _objCanvas_ ) {
      status = _stSelect_;
    } else if( type === _objNode_ ) {
      if( !istrue(this.state.selected[id]) ) {
      	this.props.eventReciever(C.evtSelectNode, { id:id, x:x, y:y });
      	this.select(id);
      }
    } else if( type === _objLink_ ) {
	    status = _stNormal_;
	    this.select(id);
    }

    this.setState({ status:status, statusParam:statusParam });

    if( isvalid(this.refs.wrapper) ) {
      this.refs.wrapper.focus();
    }

    ev.preventDefault();
    ev.stopPropagation();

    document.addEventListener('mouseup', this.onMouseEvent, {capture: true});
    document.addEventListener('mousemove', this.onMouseEvent, {capture: true});
  }

  onMouseEvent = (ev) => {
    const { nodes, links, status, statusParam } = this.state;
    const wrapper = this.refs.wrapper;

    const
      x = ev.clientX - wrapper.offsetLeft + wrapper.scrollLeft,
      y = ev.clientY - wrapper.offsetTop + wrapper.scrollTop
    ;

    // console.log(ev.type, x, y, ev);

    if( 'mousemove' === ev.type ) {
    	statusParam.x2 = x;
      statusParam.y2 = y;
      if( status === _stSelect_ ) {
      	//        
      } else if( status === _stDragNode_ ) {
        const { ox, oy } = statusParam;

        statusParam.ox = x;
        statusParam.oy = y;

        for(let id in this.state.selected) {
        	const n = nodes[id];
        	if( isvalid(n) ) {
        		nodes[id] = { ...n, x: n.x + (x - ox), y: n.y + (y - oy) };
        	}
        }

        this.setState({ nodes:nodes });
      }

      this.setState({ statusParam:statusParam });
    } else if( 'mouseup' === ev.type ) {
    	if( status === _stSelect_ ) {
    		const selected = {};

    		// check whether node is selected or not
    		for(let id in nodes) {
    			if( this.isSelected(nodes[id], true) ) {
    				selected[id] = true;
    			}
    		}

    		// link
    		const { x1, y1, x2, y2 } = statusParam;

    		for(let i = 0; i < links.length; ++i) {
    			const L = links[i];
    			const n1 = nodes[L.begin];
    			const n2 = nodes[L.end];

    			if( isvalid(n1) && isvalid(n2) ) {
    				const p1 = calcCenter(n1.x, n1.y, _iconSize_);
    				const p2 = calcCenter(n2.x, n2.y, _iconSize_);

    				if( isPtInRect(x1, y1, x2, y2, p1.x, p1.y) && isPtInRect(x1, y1, x2, y2, p2.x, p2.y) ) {
    					selected[makeLinkId(i)] = true;
    				}
    			}
    		}
    		this.setState({ selected:selected });
    	} else if( status === _stDragNode_ ) {
    		if( statusParam.type === _objNode_ && Math.abs(x - statusParam.x1) <= 1 && Math.abs(y - statusParam.y1) <= 1 ) {
    			// TODO Node select event
    			const tick = tickCount();
    			const eventParam = { id:statusParam.id, x:x, y:y };

    			if( isvalid(this.lastEvent)
    				&& this.lastEvent.event === C.evtNodeClick
    				&& isvalid(this.lastEvent.param)
    				&& this.lastEvent.param.id === eventParam.id
    				&& (tick - this.lastEvent.occurTime) < 200 ) {
    				// double click
    				this.lastEvent = { event:C.evtNodeDblClick, param:eventParam, occurTime:tick };
    			} else {
    				this.lastEvent = { event:C.evtNodeClick, param:eventParam, occurTime:tick };
    			}

    			this.props.eventReciever(this.lastEvent.event, eventParam);
    			this.select(statusParam.id);
    		}
    	}

      this.setState({ status:_stNormal_ });

      ev.preventDefault();
    	ev.stopPropagation();

      document.removeEventListener('mouseup', this.onMouseEvent, {capture: true});
      document.removeEventListener('mousemove', this.onMouseEvent, {capture: true});
    }
  }

  render () {
    const { width, height } = this.props;
    const { links, nodes, status, statusParam } = this.state;

    const svgTags = [];

    for(let i = 0; i < links.length; ++i) {
      svgTags.push(this.drawLink(i, nodes[links[i].begin], nodes[links[i].end]));
    }

    for(let id in nodes) {
      svgTags.push(this.drawNode(nodes[id]));
    }

    if( _stSelect_ === status ) {
      const { x1, y1, x2, y2 } = statusParam;
      svgTags.push(
        <rect key={_stSelect_}
          x={Math.min(x1, x2)}
          y={Math.min(y1, y2)}
          width={Math.abs(x1 - x2)}
          height={Math.abs(y1 - y2)}
          style={{ fill:'none', strokeWidth:1, stroke:_clrRectSelect_, strokeDasharray:'10,10' }}
        />
      );
    }

    return(
      <div ref="wrapper" tabIndex="1" style={{ height, width, overflow:'auto' }} onKeyDown={this.onKeyDown}>
        <svg width={width} height={height * 2} onMouseDown={this.onMouseDown(_objCanvas_, _objCanvas_)}>
          { svgTags.map((elem) => (elem)) }
        </svg>
      </div>
    )
  }
}

export default DiagramEditor;
export { DiagramEditor };
