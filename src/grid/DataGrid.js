import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isvalid} from '../common/tool.js';

import './DataGrid.css';

import scrollbarSize from 'dom-helpers/util/scrollbarSize';



/**
 * DataGrid.
 * Properties:
 * Column
 * @required  react-virtualized
 */
class DataGrid extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
      columnWidth: 100,
      columnCount: 50,
      overscanColumnCount: 0,
      overscanRowCount: 5,
      rowHeight: 40,
      rowCount: 1000000,
    };
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  render () {
  	const {width, height} = this.props;

    const {
      columnCount,
      columnWidth,
      overscanColumnCount,
      overscanRowCount,
      rowHeight,
      rowCount,
    } = this.state;

    return (
      <div className="wrapGrid"
      	style={{
        width:this.props.width,
        height: this.props.height,
        overflow: 'hidden',
      }}>
      	<div className="wrapRow"
      		style={{
      			flexBasis: columnWidth
      		}}>
	        <div className="headCorner"
	          style={{
	            width: columnWidth,
	            height: rowHeight,
	          }}
	        >
	          {'Corner'}
	        </div>
	        <div className="rowHeader"
	        	style={{
		      		height: (height - rowHeight),
		      		flexGlow: 1
	      	}}>
	      		{'Row'}
	        </div>
	      </div>

	      <div className="wrapColumn"
	      	style={{
	      		width: (width - columnWidth),
	      		flexBasis: (width - columnWidth)
	      	}}>
	        <div className="columns"
	        	style={{
	            width: (width - columnWidth),
	            height: rowHeight,
	        	}}
	        >
	        	{'Columns'}
	        </div>
	        <div className="dataArea"
	        	style={{
		      		height: (height - rowHeight),
		      		flexGlow: 1
	      	}}>
	      		{'Data'}
	        </div>
	      </div>
      </div>
    );
  }
}

export default DataGrid;
export { DataGrid };
