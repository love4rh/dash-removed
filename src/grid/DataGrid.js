import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {isvalid, isBetween, nvl, numberWithCommas} from '../common/tool.js';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import cn from 'classnames';

import './DataGrid.css';



const scrollbarSizeEx = () => {
  const sbs = scrollbarSize();

  return sbs === 0 ? 20 : sbs;
}

class ColumnCell extends Component {
  static propTypes = {
    changeState: PropTypes.func,
    top: PropTypes.number,
    index: PropTypes.number,
    left: PropTypes.number,
    selected: PropTypes.bool,
    title: PropTypes.string,
    width: PropTypes.number,
  }

  render () {
    const { title, width, left, selected, rowHeight, top } = this.props;
    const lineHeight = (rowHeight - 10) + 'px';

    return (
      <div className={cn({ 'column': true, 'selectedHeader': selected })}
        style={{ top, left, width, lineHeight: lineHeight }}
      >
        {title}
      </div>
    );
  }
}



class RowHeader extends Component {
  static propTypes = {
    changeState: PropTypes.func,
    height: PropTypes.number,
    index: PropTypes.number,
    selected: PropTypes.bool,
  }

  render () {
    const {index, height, selected} = this.props;
    const lineHeight = (height - 10) + 'px';

    return (
      <div className={cn({ 'rowCell': true, 'selectedHeader': selected })}
        style={{ height, lineHeight: lineHeight }}
      >
        {numberWithCommas(index + 1)}
      </div>
    );
  }
}



class DataRecord extends Component {
  static propTypes = {
    changeState: PropTypes.func,
    dataSource: PropTypes.object,
    getColumnWidth: PropTypes.func,
    isSelected: PropTypes.func,
    row: PropTypes.number,
  }

  render () {
    const {dataSource, row, isSelected, getColumnWidth} = this.props;

    let left = 0;
    let tagList = [];
    const colCount = dataSource.getColumnCount();
    const lineHeight = (dataSource.getRowHeight() - 10) + 'px';

    for(let c = 0; c < colCount; ++c) {
      const width = getColumnWidth(c);

      tagList.push(
        <div key={'r' + row + 'c' + c}
          className={cn({ 'dataCell': true, 'selectedCell': isSelected(c, row) })}
          style={{ left, width, lineHeight:lineHeight }}
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
    dataSource: PropTypes.object,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    showRowNumber: PropTypes.bool,
    showColumnNumber: PropTypes.bool,
  }

  static CalcRowNumPerpage = (height, rowHeight, headerCount) => {
    return Math.ceil((height - rowHeight * headerCount) / rowHeight);
  }

  constructor (props) {
    super(props);

    const ds = this.props.dataSource;

    this._elementRef = {};

    const columnWidth = [0];
    const rowPerHeight = DataGrid.CalcRowNumPerpage(props.height, ds.getRowHeight(), (props.showColumnNumber ? 2 : 1));

    let widthSum = 0;
    const columnCount = ds.getColumnCount();
    for(let c = 0; c < columnCount; ++c) {
      const tmpWidth = Math.min(200, Math.max(50, c * 20));
      widthSum += tmpWidth + (c === columnCount - 1 ? scrollbarSizeEx() : 0);
      columnWidth.push(widthSum);
    }

    // scroll basis to change to new mode
    this._scrollNewMode_ = 50000;

    const letterWidth = 9;
    const rowCountDigit = Math.log(ds.getRowCount()) * Math.LOG10E + 1 | 0;

    this.state = {
      beginRow: 0,
      scrollLeft: 0,
      selectedRange: { row:0, col:0, row2:0, col2:0 },
      columnWidth: columnWidth,
      overCell: { row:-1, col:-1, colEdge:false, rowEdge:false },
      rowPerHeight: rowPerHeight,
      preventVScroll: false,
      scrollByRatio: ds.getRowCount() >= this._scrollNewMode_,
      headerWidth: props.showRowNumber ? (rowCountDigit + Math.floor((rowCountDigit - 1) / 3)) * letterWidth + 24 : 0,
      preStatus: 'selectCell',
      status: 'normal',
      statusParam: {}
    };

    console.log('state', JSON.stringify(this.state));
  }

  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillReceiveProps (nextProps) {
    const { dataSource, height, showColumnNumber } = nextProps;

    this.setState({ rowPerHeight: DataGrid.CalcRowNumPerpage(height, dataSource.getRowHeight(), (showColumnNumber ? 2 : 1)) });
  }

  // eslint-disable-next-line
  shouldComponentUpdate (nextProps, nextState) {
    // console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    return true;
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  setElemReference = (type) => (ref) => {
    this._elementRef[type] = ref;
  }

  getColumnWidth = (col) => {
    const { columnWidth } = this.state;
    return columnWidth[col + 1] - columnWidth[col];
  }

  setColumnWidth = (col, size) => {
    const { dataSource } = this.props;
    const { columnWidth } = this.state;
    const old = columnWidth[col + 1] - columnWidth[col];

    if( old === size )
      return;

    for(let c = col; c < dataSource.getColumnCount(); ++c) {
      columnWidth[c + 1] += size - old;
    }
    
    this.setState({ columnWidth: columnWidth });
  }

  changeState = (state) => {
    console.log(state);

    if( state.type === 'click' ) {
      if( state.target === 'cell' ) {
        this.setState({ selectedRange: state.value });
      }
    }
  }

  isSelectedColumn = (col) => {
    const { selectedRange } = this.state;
    const col2 = nvl(selectedRange.col2, selectedRange.col);

    return isBetween(col, Math.min(selectedRange.col, col2), Math.max(selectedRange.col, col2) + 1);
  }

  isSelectedRow = (row) => {
    const { selectedRange } = this.state;
    const row2 = nvl(selectedRange.row2, selectedRange.row);

    return isBetween(row, Math.min(selectedRange.row, row2), Math.max(selectedRange.row, row2) + 1);
  }

  isSelected = (col, row) => {
    return this.isSelectedRow(row) && this.isSelectedColumn(col);
  }

  copySelected = () => {
    const ds = this.props.dataSource;
    const sel = this.state.selectedRange;

    const
      r1 = Math.max(0, Math.min(sel.row, nvl(sel.row2, sel.row))),
      r2 = Math.min(ds.getRowCount() - 1, Math.max(sel.row, nvl(sel.row2, sel.row))),
      c1 = Math.max(0, Math.min(sel.col, nvl(sel.col2, sel.col))),
      c2 = Math.min(ds.getColumnCount() - 1, Math.max(sel.col, nvl(sel.col2, sel.col)))
    ;

    const copiedCell = (c2 - c1 + 1) * (r2 - r1 + 1);

    if( copiedCell > 10000 ) {
      console.log('TOO BIG TO BE COPIED', copiedCell);
      return;
    }

    let copyText = '';
    for(let r = r1; r <= r2; ++r) {
      copyText += ds.getCellValue(c1, r);
      for(let c = c1 + 1; c <= c2; ++c) {
        copyText += '\t';
        copyText += ds.getCellValue(c, r);
      }

      copyText += '\n';
    }

    const t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = copyText;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }

  calcNewBeginRow = (offsetY) => {
    const { dataSource } = this.props;
    const { beginRow, rowPerHeight } = this.state;
    const rowCount = dataSource.getRowCount();

    // beginRow: [0, rowCount - rowPerHeight + 1]
    const newBegin = Math.min(Math.max(0, beginRow + offsetY), Math.max(0, rowCount - rowPerHeight + 1));

    if( beginRow === newBegin )
      return -1;

    return newBegin;
  }

  moveCellPosition = (offsetX, offsetY, selecting) => {
    if( offsetX === 0 && offsetY === 0 )
      return false;

    const { width, height, dataSource } = this.props;
    const { beginRow, columnWidth, selectedRange, scrollLeft, rowPerHeight, scrollByRatio, headerWidth } = this.state;

    const rowFitted = 0 === (height % dataSource.getRowHeight());
    const rowCount = dataSource.getRowCount();

    const newPos = { ...selectedRange,
      col: Math.min(Math.max(0, selectedRange.col + offsetX), dataSource.getColumnCount() - 1),
      row: Math.min(Math.max(0, selectedRange.row + offsetY), dataSource.getRowCount() - 1)
    };

    if( selectedRange.col === newPos.col && selectedRange.row === newPos.row )
      return false;

    if( !selecting ) {
      newPos.row2 = newPos.row;
      newPos.col2 = newPos.col;
    }

    const dataWidth = width - headerWidth,
      vX1 = scrollLeft,
      vX2 = vX1 + dataWidth;

    if( columnWidth[newPos.col] < vX1 || columnWidth[newPos.col + 1] > vX2 ) {
      this.setScrollLeft( offsetX < 0 ? columnWidth[newPos.col] : Math.max(0, columnWidth[newPos.col + 1] - dataWidth) );
    }

    let newBegin = beginRow;
    if( newPos.row < beginRow || newPos.row >= beginRow + rowPerHeight - 1 ) {
      if( offsetY < 0 ) {
        newBegin = Math.max(0, Math.min(newPos.row, Math.max(0, rowCount - rowPerHeight + 1)));
      } else {
        newBegin = Math.max(rowPerHeight, Math.min(newPos.row, rowCount) + (rowFitted ? 1 : 2)) - rowPerHeight;
      }
    }
    // console.log(JSON.stringify(newPos), beginRow, newBegin);

    if( newBegin !== beginRow ) {
      this.setState({ beginRow: newBegin, selectedRange: newPos, preventVScroll: true });

      if( isvalid(this._elementRef['scrollContainer']) ) {
        this._elementRef['scrollContainer'].scrollTop = scrollByRatio
          ? newBegin / (rowCount - rowPerHeight + 1) * this._scrollNewMode_
          : newBegin * dataSource.getRowHeight();
      }
    } else {
      this.setState({ selectedRange: newPos });
    }

    return true;
  }

  setScrollLeft = (left) => {
    if( this.state.scrollLeft === left )
      return;

    this._elementRef['columnArea'].scrollLeft = left;
    this._elementRef['dataContainer'].scrollLeft = left;
    this.setState({ scrollLeft: left });
  }

  onDataAreaScroll = (ev) => {
    // const $this = ev.target;
    // clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth
    this.setScrollLeft( ev.target.scrollLeft );
  }

  onDataAreaVScroll = (ev) => {
    const { beginRow, rowPerHeight, preventVScroll, scrollByRatio } = this.state;

    if( preventVScroll ) {
      this.setState({ preventVScroll: false });
      return;
    }

    const { dataSource } = this.props;
    const rowCount = dataSource.getRowCount();

    const $this = ev.target;
    // const { clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth } = $this;
    const { clientHeight, scrollHeight, scrollTop } = $this;

    let newBegin = beginRow;
    const tmpVal = Math.max(0, rowCount - rowPerHeight);

    if( scrollByRatio ) {
      newBegin = Math.min(Math.floor(scrollTop / this._scrollNewMode_ * tmpVal), tmpVal + 1);
    } else {
      newBegin = Math.floor(scrollTop / (scrollHeight - clientHeight) * tmpVal);
    }

    console.log(clientHeight, scrollHeight, scrollTop, rowPerHeight, newBegin);

    if( newBegin !== beginRow )
      this.setState({ beginRow: newBegin, preventVScroll: false });
  }

  onDataAreaWheel = (ev) => {
    // console.log('onDataAreaWheel', ev.deltaX, ev.deltaY, ev.deltaMode);
    ev.preventDefault();
    ev.stopPropagation();

    // down: +, up: -
    const offsetY = (ev.deltaY < 0 ? -1 : 1) * Math.ceil(Math.abs(ev.deltaY) / 80);
    const newBegin = this.calcNewBeginRow(offsetY);

    if( Math.abs(ev.deltaX) >= 1 ) {
      this.setScrollLeft(this.state.scrollLeft + ev.deltaX);  
    }

    // console.log('onDataAreaWheel', newBegin, ev.deltaY, offsetY);

    if( newBegin === -1 )
      return;

    this.setState({ beginRow: newBegin, preventVScroll: true });

    if( isvalid(this._elementRef['scrollContainer']) ) {
      const { dataSource } = this.props;
      const { scrollByRatio } = this.state;
      this._elementRef['scrollContainer'].scrollTop = scrollByRatio ? newBegin : newBegin * dataSource.getRowHeight();
    }
  }

  onKeyDown = (ev) => {
    // console.log('keydown', ev.keyCode, ev.key, ev.ctrlKey, ev.altKey, ev.shiftKey);
    let processed = true;
    let { keyCode, ctrlKey, shiftKey } = ev;
    const { dataSource } = this.props;
    const { selectedRange, rowPerHeight } = this.state;
    const colCount = dataSource.getColumnCount(), rowCount = dataSource.getRowCount();

    switch( keyCode ) {
      case 37: // ArrowLeft
        if( shiftKey )
          this.setColumnWidth(selectedRange.col, this.getColumnWidth(selectedRange.col) - 2); // shrink column size
        else 
          this.moveCellPosition(-1, 0, ctrlKey); // go to previous column
        break;
      case 39: // ArrowRight
        if( shiftKey )
          this.setColumnWidth(selectedRange.col, this.getColumnWidth(selectedRange.col) + 2); // grow column size
        else
          this.moveCellPosition(1, 0, ctrlKey); // go to next column
        break;
      case 38: // ArrowUp
        this.moveCellPosition(0, -1, ctrlKey); // go to previous row
        break;
      case 40: // ArrowDown
        this.moveCellPosition(0, 1, ctrlKey); // go to next row
        break;
      case 33: // PageUp
        if( ctrlKey )
          this.moveCellPosition(-colCount, -rowCount, false); // go to (0, 0), but not worked
        else
          this.moveCellPosition(0, - rowPerHeight + 2, false); // go to previous page
        break;
      case 34: // PageDown
        if( ctrlKey )
          this.moveCellPosition(colCount, rowCount, false); // go to last cell, but not worked
        else
          this.moveCellPosition(0, rowPerHeight - 2, false); // go to next page
        break;
      case 36: // Home
        if( ctrlKey || selectedRange.col === 0 )
          this.moveCellPosition(0, -rowCount, false); // go to last row
        else
          this.moveCellPosition(-colCount, 0, false);
        break;
      case 35: // End
        if( ctrlKey || selectedRange.col === colCount - 1)
          this.moveCellPosition(0, rowCount, false);
        else
          this.moveCellPosition(colCount, 0, false);
        break;
      default:
        processed = false;
        break;
    }

    if( !processed && ctrlKey ) {
      processed = true;

      if( keyCode === 67 ) { // c
        this.copySelected();
      } else if( keyCode === 65 ) { // a
        // select all
        this.setState({ selectedRange:{col:0, row:0, col2:colCount - 1, row2:rowCount - 1} });
      } else
        processed = false;
    }

    if( processed ) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  hitTest = (x, y) => {
    let col = null, row = null, colEdge = false, rowEdge = false;

    const edgeMargin = 2;
    const { dataSource, showColumnNumber } = this.props;
    const { columnWidth, beginRow, scrollLeft, headerWidth } = this.state;

    const rowHeight = dataSource.getRowHeight(),
      cnHeight = rowHeight * (showColumnNumber ? 2 : 1),
      rhWidth = headerWidth;

    // find column index matching to x
    if( x <= rhWidth + edgeMargin ) {
      col = -1;
      colEdge = (x >= rhWidth - edgeMargin);
    } else {
      x -= rhWidth - scrollLeft;

      // TODO change find-logic to using binary search.
      for(let c = 1; c <= dataSource.getColumnCount(); ++c) {
        if( x <= columnWidth[c] + edgeMargin ) {
          col = c - 1;
          colEdge = (x >= columnWidth[c] - edgeMargin);
          break;
        }
      }
    }

    // find row index matching to y
    if( y <= cnHeight + edgeMargin ) {
      row = -1;
      rowEdge = (y >= cnHeight - edgeMargin);
    } else {
      y -= cnHeight;
      row = Math.floor(y / rowHeight)
      rowEdge = Math.abs(y - row * rowHeight) <= edgeMargin;
      row += beginRow;
    }

    return { col: col, row: row, colEdge: colEdge, rowEdge: rowEdge };
  }

  onMouseEvent = (ev) => {
    const { altKey, ctrlKey, shiftKey } = ev;
    const target = ev.currentTarget,
      x = ev.clientX - target.offsetLeft,
      y = ev.clientY - target.offsetTop
    ;

    const cell = this.hitTest(x, y)
    const { dataSource } = this.props;
    const
      colCount = dataSource.getColumnCount(),
      rowCount = dataSource.getRowCount()
    ;
    const { preStatus, status, statusParam } = this.state;

    if( 'mousedown' === ev.type ) {
      if( cell.col < 0 && cell.row < 0 ) { // Header click
        this.setState({ selectedRange:{col:0, row:0, col2:colCount - 1, row2:rowCount - 1} });
      } else if( shiftKey ) {
        if( preStatus === 'selectCol' ) {
          this.setState({ selectedRange:{col:statusParam.colSel, row:0, col2:cell.col, row2:rowCount - 1}, status:preStatus });
        } else if( preStatus === 'selectRow' ) {
          this.setState({ selectedRange:{col:0, row:statusParam.rowSel, col2:colCount - 1, row2:cell.row}, status:preStatus });
        } else if( preStatus === 'selectCell' ) {
          const { colSel, rowSel } = statusParam;
          this.setState({ selectedRange:{col:colSel, row:rowSel, col2:cell.col, row2:cell.row}, status:preStatus });
        }
      } else {
        let newStatus = status;
        if( cell.row < 0 ) { // Column Header click
          if( cell.colEdge ) {  // Column Sizing
            newStatus = 'sizing';
          } else { // Column Selecting
            cell.row = 0;
            cell.row2 = rowCount - 1;
            newStatus = 'selectCol';
          }
        } else if( cell.col < 0 ) { // Row Header click --> Row Selecting
          cell.col = 0;
          cell.col2 = colCount - 1;
          newStatus = 'selectRow';
        } else {
          newStatus = 'selectCell';
        }

        if( newStatus === 'sizing' ) {
          this.setState({ status: newStatus, statusParam:{colSel:cell.col, x1:x, y1:y, size:this.getColumnWidth(cell.col)} });
        } else {
          this.setState({ selectedRange: cell, status: newStatus, statusParam:{colSel:cell.col, rowSel:cell.row} });
        }
      }
    } else if( 'mouseup' === ev.type ) {
      this.setState({ status: 'normal', preStatus: status });
    } else if( 'mousemove' === ev.type ) {
      if( status === 'sizing' ) {
        const { colSel, x1, size } = statusParam;
        this.setColumnWidth(colSel, Math.max(20, size + x - x1));
      } else if( status === 'selectCol' ) {
        this.setState({ selectedRange:{col:statusParam.colSel, row:0, col2:cell.col, row2:rowCount - 1} });
      } else if( status === 'selectRow' ) {
        this.setState({ selectedRange:{col:0, row:statusParam.rowSel, col2:colCount - 1, row2:cell.row} });
      } else if( status === 'selectCell' ) {
        const { colSel, rowSel } = statusParam;
        this.setState({ selectedRange:{col:colSel, row:rowSel, col2:cell.col, row2:cell.row} });
      } else {
        this.setState({ overCell: cell });
      }
    }

    ev.preventDefault();
    ev.stopPropagation();
  }

  render () {
    const { width, height, dataSource, showColumnNumber } = this.props;
    const { beginRow, columnWidth, rowPerHeight, scrollByRatio, headerWidth } = this.state;

    const
      rowHeight = dataSource.getRowHeight(),
      cnHeight = rowHeight * (showColumnNumber ? 2 : 1),
      rhWidth = headerWidth,
      rhHeight = height - cnHeight,
      chWidth = width - rhWidth
    ;

    const sbs = scrollbarSizeEx();
    const rowCount = dataSource.getRowCount();
    const totalHeight = scrollByRatio ? this._scrollNewMode_ + height : rowCount * rowHeight;
    const hScroll = chWidth < columnWidth[columnWidth.length - 1];
    const vScroll = scrollByRatio || rhHeight < (totalHeight + (hScroll ? sbs : 0));

    const begin = beginRow;
    const end = Math.min(beginRow + rowPerHeight, rowCount);

    let dataTagList = [], rhTagList = [];

    for(let r = begin; r < end; ++r) {
      rhTagList.push(
        <RowHeader key={'rk-' + r} index={r}
          height={dataSource.getRowHeight()}
          selected={this.isSelectedRow(r)}
          changeState={this.changeState}
        />
      );

      dataTagList.push(
        <DataRecord key={'dc-' + r} row={r}
          dataSource={dataSource}
          isSelected={this.isSelected}
          changeState={this.changeState}
          getColumnWidth={this.getColumnWidth}
        />
      );
    }

    let chTagList = [], chNoList = [];
    const columnCount = dataSource.getColumnCount();

    for(let c = 0; c < columnCount; ++c) {
      const colWidth = this.getColumnWidth(c);

      if( showColumnNumber ) {
        chNoList.push(
          <ColumnCell key={'cn-' + c} index={c}
            title={'' + (c + 1)}
            width={colWidth}
            left={columnWidth[c]}
            selected={this.isSelectedColumn(c)}
            changeState={this.changeState}
            rowHeight={rowHeight}
            top={0}
          />
        );
      }

      chTagList.push(
        <ColumnCell key={'ck-' + c} index={c}
          title={dataSource.getColumnName(c)}
          width={colWidth}
          left={columnWidth[c]}
          selected={this.isSelectedColumn(c)}
          changeState={this.changeState}
          rowHeight={rowHeight}
          top={showColumnNumber ? (rowHeight - 1) : 0}
        />
      );
    }

    const lineHeight = (rowHeight - 10) + 'px';
    const adjDataWidth = chWidth - (vScroll ? sbs : 0);

    return (
      <div className="wrapGrid" style={{ width, height }}>
        <div className="wrapContainer"
          style={{ height, flexBasis: (width - (vScroll ? sbs : 0)) }}
          onMouseMove={this.onMouseEvent}
          onMouseDown={this.onMouseEvent}
          onMouseUp={this.onMouseEvent}
        >
          <div className="wrapRow" style={{ flexBasis: rhWidth }}>
            <div className="headCorner"
              style={{ width: rhWidth, height: cnHeight, lineHeight: lineHeight }}
            >
              <div>&nbsp;</div>
            </div>
            <div className="rowHeader" style={{ height: rhHeight, flexGlow: 1 }}>
              <div ref={this.setElemReference('rowHeader')} className="rowCells">
                {rhTagList.map((tag) => tag)}
              </div>
            </div>
          </div>

          <div className="wrapColumn" style={{ width: adjDataWidth, height, flexBasis: adjDataWidth}}>
            <div ref={this.setElemReference('columnArea')}
              className={cn({ 'columnsDiv': true, 'resizeCursor': (this.state.overCell.colEdge || this.state.status === 'sizing') })}
              style={{ height: cnHeight }}
            >
              { showColumnNumber ? (<div>{chNoList.map((tag) => tag)}</div>) : null };
              <div>{ chTagList.map((tag) => tag) }</div>
            </div>
            <div ref={this.setElemReference('dataContainer')}
              className="dataContainer"
              style={{ height: rhHeight }}
              onScroll={this.onDataAreaScroll}
              onWheel={this.onDataAreaWheel}
            >
              {dataTagList.map((tag) => tag)}
            </div>
          </div>
        </div>
        { vScroll ? (
          <div className="wrapScroll" style={{ width: sbs, height, flexBasis: sbs}}>
            <div ref={this.setElemReference('scrollContainer')}
              className="scrollContainer"
              style={{ width: sbs, height }}
              onScroll={this.onDataAreaVScroll}
            >
              <div style={{ width: sbs, height: totalHeight }}>&nbsp;</div>
            </div>
          </div>) : null
        }
      </div>
    );
  }
}

export default DataGrid;
export { DataGrid };
