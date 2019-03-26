import React from 'react';
import PropTypes from 'prop-types';

import C from '../common/Constants.js';
import { isvalid, istrue, tickCount } from '../common/tool.js';

import { calcCenter, isPtInRect, drawArrowLine } from './DrawingTool.js';

import './DiagramEditor.css';



// Pre-defined values
// -------------------------------
const _iconSize_ = 32;
const _arrowSize_ = 8;
const _sizeRadius_ = 30;
const _sizeLink_ = 3; // link stroke width

const _objCanvas_ = 'canvas';
const _objNode_ = 'node';
const _objLink_ = 'link';

const _stNormal_ = 'normal';
const _stSelect_ = 'selecting';
const _stDragNode_ = 'dragNode';
const _stConnecting_ = 'connecting';

const _clrSelect_ = 'blue';
const _clrLink_ = '#333';
const _clrConnecting_ = '#aaa';
const _clrRectSelect_ = '#000';
const _clrPossible_ ='#00AA00';
const _clrNoConnect_ = '#D32222';

const _cssNodeText = { fill:'#000', font:'12px Verdana, Helvetica, Arial, sans-serif' };
const _cssTextWrap = { stroke:'white', strokeWidth:'0.3em', font:'12px Verdana, Helvetica, Arial, sans-serif' };
// -------------------------------


const makeLinkId = (index) => {
	return index;
}



class DiagramEditor extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    model: PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props);

    const { model } = this.props;

    this.state = {
      nodes: model.getNodes(),
      links: model.getLinks(),

      // normal, connecting, drag node, drag link, selecting
      status: _stNormal_,
      statusParam: {},

      selected: {},
      selectedLink: {},
    };

    this.lastEvent = {};
    this.lastMouseDown = {};

    this.onMouseEvent = this.onMouseEvent.bind(this);
  }

  componentDidMount () {
    // disable context menu when right-button clicked.
    document.addEventListener('contextmenu', (ev) => {
      ev.preventDefault();
    }, false);
  }

  componentDidUpdate () {
    //
  }

  componentWillUnmount () {
    //
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

    const linkId = makeLinkId(index);
    const linkColor = this.isSelectedLink(linkId) ? _clrSelect_ : _clrLink_;

    return drawArrowLine(p1, p2, _sizeRadius_, _sizeRadius_, _arrowSize_,
      _sizeLink_, linkColor, this.onMouseDown(_objLink_, linkId));
  }

  isSelectedLink = (id) => {
  	return istrue(this.state.selectedLink[id]);
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
    const { status, statusParam } = this.state;

  	const m = 4;
  	const tx = n.x + _iconSize_ / 2,
  		ty = n.y + _iconSize_ + 20;

    let statusRect = this.isSelected(n, false) ? _clrSelect_ : null;

    if( status === _stConnecting_ && n.id !== statusParam.id ) {
      statusRect = this.props.model.isPossibleToConnect(statusParam.id, n.id) ? _clrPossible_ : _clrNoConnect_;
    }

    return (
    	<g key={'nid-' + n.id}
    		onMouseDown={this.onMouseDown(_objNode_, n.id)}
    		onMouseMove={this.onNodeMouseMove(_objNode_, n.id)}
    	>
	      <image key={n.id}
	        x={n.x} y={n.y}
	        width={_iconSize_} height={_iconSize_}
	        href={this.props.model.getNodeImage(n.type)}
	      />

	      <text textAnchor="middle" x={tx} y={ty} style={_cssTextWrap}>{n.name}</text>
	      <text textAnchor="middle" x={tx} y={ty} style={_cssNodeText}>{n.name}</text>

	      { isvalid(statusRect) && (
    			<rect rx={m} ry={m} x={n.x - m} y={n.y - m} width={_iconSize_ + m * 2} height={_iconSize_ + m * 2}
  						style={{ fill:'none', stroke:statusRect, strokeWidth:2 }} />
          )
    		}
	    </g>
    );
  }

  selectNode = (id, add) => {
  	let selected = istrue(add) ? this.state.selected : {};

  	selected[id] = true;
    this.setState({ selected:selected, selectedLink:{} });
  }

  selectLink = (id, add) => {
    let selectedLink = istrue(add) ? this.state.selectedLink : {};

    selectedLink[id] = true;
    this.setState({ selectedLink:selectedLink, selected:{} });
  }

  selectAll = () => {
  	const { nodes, links } = this.state;

  	const selected = {}, selectedLink = {};

		// check whether node is selected or not
		for(let id in nodes) {
			selected[id] = true;
		}

		// link
		for(let i = 0; i < links.length; ++i) {
			selectedLink[makeLinkId(i)] = true;
		}

		this.setState({ selected:selected, selectedLink:selectedLink });
  }

  deleteSelected = () => {
    const { model } = this.props;
  	const { selected, selectedLink } = this.state;

    model.deleteLinks(selectedLink);
    model.deleteNodes(selected);

    this.setState({
      nodes: model.getNodes(),
      links: model.getLinks(),
      selected:{}, selectedLink:{}
    });
  }

  onKeyDown = (ev) => {
    //console.log('keydown', ev.keyCode, ev.key, ev.ctrlKey, ev.altKey, ev.shiftKey);

    let processed = false;
    let { keyCode, ctrlKey } = ev;

    if( ctrlKey ) {
    	switch( keyCode ) {
    		case 65: // a -> select all
    			this.selectAll();
    			processed = true;
    			break;

      	default:
      		break;
      }
    } else {
      switch( keyCode ) {
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
  onNodeMouseMove = (type, id) => (ev) => {
  	if( isvalid(this.props.getTooltip) ){
  		// TODO Tooltip Event?
  		this.props.getTooltip(type, id);
  	}

  	ev.preventDefault();
    ev.stopPropagation();
  }

  enterConnecting = (beginNid) => {
    // _objNode_;
    // _stConnecting_;
  }

  // eslint-disable-next-line
  onMouseDown = (type, id) => (ev) => {
    const wrapper = this.refs.wrapper;

    if( !isvalid(wrapper) ) {
      return;
    }

    const pNode = wrapper.parentNode;

    // const { shiftKey } = ev; // altKey, ctrlKey,
    const
      x = ev.clientX - pNode.offsetLeft + pNode.scrollLeft,
      y = ev.clientY - pNode.offsetTop + pNode.scrollTop
    ; // */

    let status = _stDragNode_;
    let statusParam = { type:type, id:id, ox:x, oy:y, x1:x, y1:y, x2:x, y2:y };

    // console.log(type, id, ev.type, x, y, ev.button, ev.buttons);

    // Wrapping area
    if( type === _objCanvas_ ) {
      status = _stSelect_;
    } else if( type === _objNode_ ) {
      if( ev.button === 1 || ev.button === 4 ) {
        // middle button --> connecting
        status = _stConnecting_;
        this.selectNode(id, false);
      } else if( ev.button === 2 ) {
        // right button --> context menu
      }

      if( !istrue(this.state.selected[id]) ) {
      	this.props.model.eventReciever(C.evtSelectNode, { id:id, x:x, y:y });
      	this.selectNode(id);
      }
    } else if( type === _objLink_ ) {
	    status = _stNormal_;
	    this.selectLink(id);
    }

    this.lastMouseDown = { tick: tickCount(), button: ev.button };

    this.setState({ status:status, statusParam:statusParam });
    wrapper.focus();

    ev.preventDefault();
    ev.stopPropagation();

    document.addEventListener('mouseup', this.onMouseEvent, {capture: true});
    document.addEventListener('mousemove', this.onMouseEvent, {capture: true});
  }

  onMouseEvent = (ev) => {
    const wrapper = this.refs.wrapper;

    if( !isvalid(wrapper) ) {
      document.removeEventListener('mouseup', this.onMouseEvent, {capture: true});
      document.removeEventListener('mousemove', this.onMouseEvent, {capture: true});
      return;
    }

    const { nodes, links, status, statusParam } = this.state;

    const pNode = wrapper.parentNode;

    const
      x = ev.clientX - pNode.offsetLeft + pNode.scrollLeft,
      y = ev.clientY - pNode.offsetTop + pNode.scrollTop
    ;

    // console.log(ev.type, x, y, ev);

    if( 'mousemove' === ev.type ) {
    	statusParam.x2 = x;
      statusParam.y2 = y;

      if( status === _stDragNode_ ) {
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
      } else if( status === _stSelect_ ) {
        //        
      }

      this.setState({ statusParam:statusParam });
    } else if( 'mouseup' === ev.type ) {
    	if( status === _stSelect_ ) {
    		const selected = {}, selectedLink = {};

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
    					selectedLink[makeLinkId(i)] = true;
    				}
    			}
    		}
    		this.setState({ selected:selected, selectedLink:selectedLink });
    	} else if( status === _stDragNode_ ) {
    		if( statusParam.type === _objNode_ && Math.abs(x - statusParam.x1) <= 1 && Math.abs(y - statusParam.y1) <= 1 ) {
    			// TODO Node select event
    			const tick = tickCount();
    			const eventParam = { id:statusParam.id, x:x, y:y };
          let newEvent = C.evtNodeClick;

    			if( isvalid(this.lastEvent)
    				&& this.lastEvent.event === C.evtNodeClick
    				&& isvalid(this.lastEvent.param)
    				&& this.lastEvent.param.id === eventParam.id
    				&& (tick - this.lastEvent.occurTime) < 300 )
          {
    				// double click
            newEvent = C.evtNodeDblClick;
    			} else if( tick >= this.lastMouseDown.tick + 500 ) {
            newEvent = C.evtNodeLongClick;
          }

          this.lastEvent = { event:newEvent, param:eventParam, occurTime:tick };
    			this.props.model.eventReciever(newEvent, eventParam);
    			this.selectNode(statusParam.id);
    		}
    	} else if( status === _stConnecting_ ) {
        for(let id in nodes) {
          const n = nodes[id];

          if( isPtInRect(n.x, n.y, n.x + _iconSize_, n.y + _iconSize_, x, y) ) {
            this.props.model.eventReciever(C.evtConnectNodes, { begin: statusParam.id, end: id });
            break;
          }
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

    let mX = width, mY = height;
    for(let id in nodes) {
      const n = nodes[id];
      mX = Math.max(mX, n.x);
      mY = Math.max(mY, n.y);
      svgTags.push(this.drawNode(n));
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
    } else if( _stConnecting_ === status ) {
      const n1 = nodes[statusParam.id];
      const p1 = calcCenter(n1.x, n1.y, _iconSize_);

      svgTags.push(
        drawArrowLine(p1, { x: statusParam.x2, y: statusParam.y2},
          _sizeRadius_, 0, _arrowSize_, _sizeLink_, _clrConnecting_)
      );
    }

    return(
      <div ref="wrapper" tabIndex="1"
        style={{ height:(mY + 200), width:(mX + 200), overflow:'hidden' }}
        onKeyDown={this.onKeyDown}
      >
        <svg width={mX + 200} height={mY + 200}
          onMouseDown={this.onMouseDown(_objCanvas_, _objCanvas_)}
        >
          { svgTags.map((elem) => (elem)) }
        </svg>
      </div>
    )
  }
}

export default DiagramEditor;
export { DiagramEditor };
