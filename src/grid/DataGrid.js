import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isvalid} from '../common/tool.js';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import './DataGrid.css';

import DataSource from './DataSource.js';



class CornerHeader extends Component {
  static propTypes = {
    dataSource: PropTypes.object,
  }

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  render () {
    const { dataSource, ...rest } = this.props;
    console.log(dataSource);

    return (
      <div {...rest}>
        {'dataSource.getTitle()'}
      </div>
    );
  }
}



class ColumnCell extends Component {
  static propTypes = {
    index: PropTypes.number,
    left: PropTypes.number,
    title: PropTypes.string,
    width: PropTypes.number,
  }

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    //
  }

  // eslint-disable-next-line
  componentDidUpdate (prevProps, prevState) {
    //
  }

  componentWillUnmount () {
    //
  }

  handleClick = (col) => (ev) => {
    console.log('Column ' + col + ' clicked');
  }

  render () {
    const {index, title, width, left} = this.props;

    return (
      <div className="column" style={{ left, width }}
        onClick={this.handleClick(index)}
      >
        {title}
      </div>
    );
  }
}



class RowCell extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  handleClick = (row) => (ev) => {
    console.log('Row ' + row + ' clicked.');
  }

  render () {
    const {index, height} = this.props;

    return (
      <div className="rowCell" style={{ height }}
        onClick={this.handleClick(index)}>
        {index + 1}
      </div>
    );
  }
}



class DataCell extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  handleClick = (col, row) => (ev) => {
    console.log('Cell ' + row + ', ' + col + ' clicked.');
  }

  render () {
    const {dataSource, row} = this.props;

    let left = 0;
    let tagList = [];

    for(let c = 0; c < dataSource.getColumnCount(); ++c) {
      const width = dataSource.getColumnWidth(c);

      tagList.push(
        <div key={'r' + row + 'c' + c}
          className="dataCell"
          style={{ left, width }}
          onClick={this.handleClick(c, row)}
        >
          {dataSource.getCellValue(c, row)}
        </div>
      );

      left += width;
    }

    return (
      <div className="dataCells" style={{ height: dataSource.getRowHeight() }}>
        {tagList.map((tag) => tag)}
      </div>
    );
  }
}



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
    	dataSource: new DataSource({ title: 'TEST', columnCount: 30, rowCount: 100 }),
    	visibleRow: { begin: 0, end: 40 },
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

  setElemReference = (type) => (ref) => {
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
      $this.scrollWidth
    ); // */

    this._elementRef['columnArea'].scrollLeft = $this.scrollLeft;
  }

  onDataAreaWheel = (ev) => {
  	console.log('onDataAreaWheel', ev.deltaX, ev.deltaY, ev.deltaMode);

  	ev.preventDefault();
		ev.stopPropagation();

  	const {dataSource, visibleRow} = this.state;

  	// down: +, up: -
  	const gap = (ev.deltaY < 0 ? -1 : 1) * Math.floor(Math.abs(ev.deltaY) / 50);
  	const newVisible = {
  		begin: Math.max(0, visibleRow.begin + gap),
  		end: Math.min(visibleRow.end + gap, dataSource.getRowCount())
  	};

  	if( visibleRow.begin === newVisible.begin || visibleRow.end === newVisible.end )
  		return;

  	this.setState({ visibleRow: newVisible });
  }

  render () {
  	const {width, height} = this.props;
  	const {dataSource, visibleRow} = this.state;

  	const
    	cnHeight = dataSource.getRowHeight(),
    	rhWidth = dataSource.getHeadColumnWidth(),
    	rhHeight = height - cnHeight,
    	chWidth = width - rhWidth,
    	dataWidth = chWidth,
    	dataHeight = rhHeight
    ;

    const begin = visibleRow.begin;
    const end = Math.min(visibleRow.end + 1, dataSource.getRowCount());

    let dataTagList = [], rhTagList = [];

    for(let r = begin; r < end; ++r) {
    	rhTagList.push(
        <RowCell key={'rk-' + r} index={r} height={dataSource.getRowHeight()} />
      );

      dataTagList.push(
        <DataCell key={'dc-' + r} row={r} dataSource={dataSource} />
      );
    }

    let colWidthTotal = 0;
    let chTagList = [];

    for(let c = 0; c < dataSource.getColumnCount(); ++c) {
      const colWidth = dataSource.getColumnWidth(c);

      chTagList.push(
        <ColumnCell key={'ck-' + c} index={c} title={dataSource.getColumnName(c)} width={colWidth} left={colWidthTotal} />
      );
      colWidthTotal += colWidth
    }

    return (
      <div className="wrapGrid" style={{ width, height }}>
      	<div className="wrapRow" style={{ flexBasis: rhWidth }}>
	        <div className="headCorner" style={{ width: rhWidth, height: cnHeight }}
	        	onClick={this.handleHeadClick}
	        >
	          <CornerHeader dataSource={dataSource}/>
	        </div>
	        <div className="rowHeader" style={{ height: rhHeight, flexGlow: 1 }}>
			      <div ref={this.setElemReference('rowHeader')} className="rowCells">
			        {rhTagList.map((tag) => tag)}
			      </div>
	        </div>
	      </div>

	      <div className="wrapColumn" style={{ width: chWidth, height, flexBasis: chWidth}}>
	        <div className="dataArea" style={{ width: chWidth, height, flexGlow: 1 }}>
	        	<div ref={this.setElemReference('columnArea')}
	        		className="columnsDiv" style={{ height: cnHeight }}
	        	>
			        {chTagList.map((tag) => tag)}
			      </div>
	        	<div ref={this.setElemReference('dataArea')}
	        		className="dataContainer" style={{ height: rhHeight }}
	        		onScroll={this.onDataAreaScroll}
	        		onWheel={this.onDataAreaWheel}
	        	>
			        {dataTagList.map((tag) => tag)}
			      </div>
	        </div>
	      </div>
      </div>
    );
  }
}

export default DataGrid;
export { DataGrid };
