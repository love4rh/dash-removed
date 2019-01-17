import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {isvalid} from '../common/tool.js';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import cn from 'classnames';

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
    const rowHeight = dataSource.getRowHeight();
    const lineHeight = (rowHeight - 10) + 'px';

    return (
      <div style={{}} {...rest}>
        { isvalid(dataSource) ? dataSource.getTitle() : '' }
      </div>
    );
  }
}



class ColumnCell extends Component {
  static propTypes = {
  	changeState: PropTypes.func,
    index: PropTypes.number,
    left: PropTypes.number,
    selected: PropTypes.bool,
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
	  if( this.props.changeState ) {
	  	this.props.changeState({ type:'click', target:'column', value:{row:-1, col:col} });
	  }
  }

  render () {
    const {index, title, width, left, selected, rowHeight} = this.props;
    const lineHeight = (rowHeight - 10) + 'px';

    return (
      <div className={cn({ 'column': true, 'selectedHeader': selected })}
      	style={{ left, width, lineHeight: lineHeight }}
        onClick={this.handleClick(index)}
      >
        {title}
      </div>
    );
  }
}



class RowCell extends Component {
	static propTypes = {
  	changeState: PropTypes.func,
  	height: PropTypes.number,
  	index: PropTypes.number,
  	selected: PropTypes.bool,
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

  handleClick = (row) => (ev) => {
    if( this.props.changeState ) {
	  	this.props.changeState({ type:'click', target:'row', value:{row:row, col:-1} });
	  }
  }

  render () {
    const {index, height, selected} = this.props;
    const lineHeight = (height - 10) + 'px';

    return (
      <div className={cn({ 'rowCell': true, 'selectedHeader': selected })}
      	style={{ height, lineHeight: lineHeight }}
        onClick={this.handleClick(index)}>
        {index + 1}
      </div>
    );
  }
}



class DataRecord extends Component {
	static propTypes = {
  	changeState: PropTypes.func,
  	currentCell: PropTypes.object,
  	dataSource: PropTypes.object,
    row: PropTypes.number,
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

  handleClick = (col, row) => (ev) => {
    if( this.props.changeState ){
    	this.props.changeState({ type:'click', target:'cell', value:{row:row, col:col} });
    }
  }

  render () {
    const {dataSource, row, currentCell} = this.props;

    let left = 0;
    let tagList = [];
    const lineHeight = (dataSource.getRowHeight() - 10) + 'px';

    for(let c = 0; c < dataSource.getColumnCount(); ++c) {
      const width = dataSource.getColumnWidth(c);
      const selected = currentCell.row === row && currentCell.col === c;

      tagList.push(
        <div key={'r' + row + 'c' + c}
          className={cn({ 'dataCell': true, 'selectedCell': selected })}
          style={{ left, width, lineHeight:lineHeight }}
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
// @keydown
class DataGrid extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this._elementRef = {};

    const ds = new DataSource({ title: 'TEST', columnCount: 30, rowCount: 50, rowHeight: 40 });
    const rowPerHeight = Math.ceil(props.height / ds.getRowHeight() - 1);

    this.state = {
    	dataSource: ds,
    	visibleRow: { begin: 0, end: rowPerHeight },
    	currentCell: { row: 0, col: 0 },
    	focused: false,
    };
  }

  componentDidMount () {
  	document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillReceiveProps (nextProps){
    const { keydown: { event } } = nextProps;
    if ( event ) {
      console.log('keydown', event);
    }
  }

  // eslint-disable-next-line
  shouldComponentUpdate (nextProps, nextState){
    // console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    return true;
	}

  componentWillUnmount () {
  	document.removeEventListener('keydown', this.onKeyDown);
  }

  setElemReference = (type) => (ref) => {
    this._elementRef[type] = ref;
  }

  changeState = (state) => {
  	console.log(state);

  	if( state.type === 'click' ) {
  		if( state.target === 'cell' ) {
  			this.setState({ currentCell: state.value });
  		}
  	}
  }

  moveCurrentCellByOffset = (gapX, gapY, scrollOnly) => {
  	const { dataSource, visibleRow, currentCell } = this.state;
  	const rowPerHeight = Math.ceil(this.props.height / dataSource.getRowHeight() - 1);
  	const rowCount = dataSource.getRowCount();

  	// newVisible.begin: [0, rowCount - rowPerHeight + 1]
  	const newVisible = {};
  	newVisible.begin = Math.min(Math.max(0, visibleRow.begin + gapY), rowCount - rowPerHeight + 1);
  	newVisible.end = newVisible.begin + rowPerHeight;

  	if( visibleRow.begin === newVisible.begin || visibleRow.end === newVisible.end )
  		return;

  	const newPos = {};

  	if( scrollOnly ) {
  		this.setState({ visibleRow: newVisible });
  	} else {
  		this.setState({ visibleRow: newVisible, currentCell: newPos });
  	}
  }

  handleHeadClick = (ev) => {
  	console.log('Head Corner clicked.');
  }

  onDataAreaScroll = (ev) => {
    // const $this = ev.target;
    // clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth
    this._elementRef['columnArea'].scrollLeft = ev.target.scrollLeft;
  }

  onDataAreaWheel = (ev) => {
  	// console.log('onDataAreaWheel', ev.deltaX, ev.deltaY, ev.deltaMode);
  	ev.preventDefault();
		ev.stopPropagation();

  	// down: +, up: -
  	const gap = (ev.deltaY < 0 ? -1 : 1) * Math.floor(Math.abs(ev.deltaY) / 50);

  	this.moveCurrentCellByOffset(0, gap, true);
  }

  onKeyDown = (ev) => {
		console.log('keydown', ev, ev.keyCode, ev.key, this.state.focused);
  }

  render () {
  	const {width, height} = this.props;
  	const {dataSource, visibleRow, currentCell} = this.state;

  	const
  		rowHeight = dataSource.getRowHeight(),
    	cnHeight = rowHeight,
    	rhWidth = dataSource.getHeadColumnWidth(),
    	rhHeight = height - cnHeight,
    	chWidth = width - rhWidth,
    	dataWidth = chWidth,
    	dataHeight = rhHeight
    ;

    const begin = visibleRow.begin;
    const end = Math.min(visibleRow.end, dataSource.getRowCount());

    let dataTagList = [], rhTagList = [];

    for(let r = begin; r < end; ++r) {
    	rhTagList.push(
        <RowCell key={'rk-' + r} index={r}
        	height={dataSource.getRowHeight()}
        	selected={r === currentCell.row}
        	changeState={this.changeState}
        />
      );

      dataTagList.push(
        <DataRecord key={'dc-' + r} row={r}
        	dataSource={dataSource}
        	currentCell={currentCell}
        	changeState={this.changeState}
        />
      );
    }

    let colWidthTotal = 0;
    let chTagList = [];
    const columnCount = dataSource.getColumnCount();

    for(let c = 0; c < columnCount; ++c) {
      const colWidth = dataSource.getColumnWidth(c) + (c === columnCount - 1 ? scrollbarSize() : 0);

      chTagList.push(
        <ColumnCell key={'ck-' + c}
        	index={c} title={dataSource.getColumnName(c)}
        	width={colWidth} left={colWidthTotal}
        	selected={c === currentCell.col}
        	changeState={this.changeState}
        	rowHeight={rowHeight}
        />
      );
      colWidthTotal += colWidth
    }

    const lineHeight = (rowHeight - 10) + 'px';

    return (
      <div className="wrapGrid" style={{ width, height }}>
      	<div className="wrapRow" style={{ flexBasis: rhWidth }}>
	        <div className="headCorner"
	        	style={{ width: rhWidth, height: cnHeight, lineHeight: lineHeight }}
	        	onClick={this.handleHeadClick}
	        >
	          <div>{dataSource.getTitle()}</div>
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
	        		className="dataContainer"
	        		style={{ height: rhHeight }}
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
