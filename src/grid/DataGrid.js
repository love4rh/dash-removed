import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isvalid} from '../common/tool.js';

import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import DataSource from './DataSource.js';

import './DataGrid.css';

import CornerHeader from './CornerHeader.js';
import RowHeader from './RowHeader.js';
import ColumnHeader from './ColumnHeader.js';
import DataContainer from './DataContainer.js';



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

    this._elementRef = {};

    this.state = {
    	dataSource: new DataSource({ title: 'TEST', columnCount: 30, rowCount: 1000 })
    };
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  handleHeadClick = (ev) => {
  	const dataArea = this._elementRef['dataArea'];
  	console.log('Head Corner clicked.', dataArea);

  	if( isvalid(dataArea) ) {
			dataArea.scrollLeft += 100;
  	}
  }

  setElemReference = (type) => (ref: Element) => {
    this._elementRef[type] = ref;
  }

  onDataAreaScroll = (ev) => {
    const $this = ev.target;

    console.log(
      'DataArea Scroll',
      $this.clientHeight,
      $this.clientWidth,
      $this.scrollHeight,
      $this.scrollLeft,
      $this.scrollTop,
      $this.scrollWidth,
      $this, this._elementRef['dataArea']
    ); // */

  }

  render () {
  	const {width, height} = this.props;
  	const {dataSource} = this.state;

  	const
    	cnHeight = dataSource.getRowHeight(),
    	rhWidth = dataSource.getHeadColumnWidth(),
    	rhHeight = height - cnHeight,
    	chWidth = width - rhWidth,
    	dataWidth = chWidth,
    	dataHeight = rhHeight
    ;

    const scrollLeft = 300;
    const visibleRow = { begin: 0, end: 40 };

    return (
      <div className="wrapGrid" style={{ width, height }}>
      	<div className="wrapRow" style={{ flexBasis: rhWidth }}>
	        <div className="headCorner" style={{ width: rhWidth, height: cnHeight }}
	        	onClick={this.handleHeadClick}
	        >
	          <CornerHeader dataSource={dataSource}/>
	        </div>
	        <div className="rowHeader" style={{ height: rhHeight, flexGlow: 1 }}>
	      		<RowHeader ref={this.setElemReference('rowHeader')}
	      			dataSource={dataSource} visibleRow={visibleRow}
	      		/>
	        </div>
	      </div>

	      <div className="wrapColumn" style={{ height, width: chWidth, flexBasis: chWidth}}>
	        <div className="columns" style={{ width: chWidth, height: cnHeight }} >
	        	<ColumnHeader ref={this.setElemReference('columnHeader')}
	        		dataSource={dataSource} scrollLeft={scrollLeft}
	        	/>
	        </div>
	        <div className="dataArea" style={{ height: rhHeight, width: chWidth, flexGlow: 1 }}>
	        	<DataContainer ref={this.setElemReference('dataArea')}
	        		dataSource={dataSource} visibleRow={visibleRow}
	        		onScroll={this.onDataAreaScroll}
	        	/>
	        </div>
	      </div>
      </div>
    );
  }
}

export default DataGrid;
export { DataGrid };
