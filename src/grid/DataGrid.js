import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './DataGrid.css';

import {
	AutoSizer,
	Grid,
  ScrollSync
} from 'react-virtualized';

import scrollbarSize from 'dom-helpers/util/scrollbarSize';



/**
 * DataGrid.
 * Properties:
 * Column
 * @required  react-virtualized
 */
class DataGrid extends Component {
	/*
	static propTypes = {
		channelInfo: PropTypes.string.isRequired,
		channelMode: PropTypes.string,
		handleEditIconState: PropTypes.func,
		idx: PropTypes.number,
		isEditMode: PropTypes.bool,
		item: PropTypes.object,
		liveTvInfo: PropTypes.string,
		setModified: PropTypes.func,
		showPopup: PropTypes.func
	} // */

  constructor (props) {
    super(props);

    this.state = {
      columnWidth: 100,
      columnCount: 50,
      height: 300,
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

  // eslint-disable-next-line
  renderHeader = ({columnIndex, key, rowIndex, style}) => {
    return (
      <div key={key} style={style}>
        {`C${columnIndex}`}
      </div>
    );
  }

  // eslint-disable-next-line
  renderColumnHeader = ({columnIndex, key, style}) => {
    return (
      <div key={key} style={style}>
        {`C${columnIndex}`}
      </div>
    );
  }

  // eslint-disable-next-line
  renderRowHeader = ({columnIndex, key, rowIndex, style}) => {
    return (
      <div key={key} style={style}>
        {`R${rowIndex}, C${columnIndex}`}
      </div>
    );
  }

  // eslint-disable-next-line
  renderCell = ({columnIndex, key, rowIndex, style}) => {
    if (columnIndex < 1) {
      return;
    }

    return this.renderRowHeader({columnIndex, key, rowIndex, style});
  }

  render () {
     const {
      columnCount,
      columnWidth,
      height,
      overscanColumnCount,
      overscanRowCount,
      rowHeight,
      rowCount,
    } = this.state;

    return (
      <ScrollSync>
        {({
          clientHeight,
          clientWidth,
          onScroll,
          scrollHeight,
          scrollLeft,
          scrollTop,
          scrollWidth,
        }) => {
          const x = scrollLeft / (scrollWidth - clientWidth);
          const y = scrollTop / (scrollHeight - clientHeight);

          return (
          	<AutoSizer disableHeight>
              {({width}) => (<div>
		            <div className={css.dataGrid}>
		              <div style={{ height: rowHeight, flexBasis: columnWidth, alignSelf: 'flex-start', overflow: 'hidden' }}>
		                <Grid
		                  cellRenderer={this.renderHeader}
		                  className={css.HeaderGrid}
		                  width={columnWidth}
		                  height={rowHeight}
		                  rowHeight={rowHeight}
		                  columnWidth={columnWidth}
		                  rowCount={1}
		                  columnCount={1}
		                />
		              </div>
		              <div style={{ flexGlow: 10, alignSelf: 'flex-start', overflow: 'hidden' }}>
		              	<Grid
                      className={css.HeaderGrid}
                      columnWidth={columnWidth}
                      columnCount={columnCount}
                      height={rowHeight}
                      overscanColumnCount={overscanColumnCount}
                      cellRenderer={this.renderColumnHeader}
                      rowHeight={rowHeight}
                      rowCount={1}
                      scrollLeft={scrollLeft}
                      width={width - columnWidth - scrollbarSize()}
                    />
                  </div>
		            </div>
		            <div className={css.dataGrid} style={{ height: (height - rowHeight) }}>
		            	<div style={{ height: (height - rowHeight), flexBasis: columnWidth, alignSelf: 'flex-start', overflow: 'hidden' }}>
		            		<Grid
		                  overscanColumnCount={overscanColumnCount}
		                  overscanRowCount={overscanRowCount}
		                  cellRenderer={this.renderRowHeader}
		                  columnWidth={columnWidth}
		                  columnCount={1}
		                  className={css.LeftSideGrid}
		                  height={height - rowHeight - scrollbarSize()}
		                  rowHeight={rowHeight}
		                  rowCount={rowCount}
		                  scrollTop={scrollTop}
		                  width={columnWidth}
		                />
		              </div>
		              <div style={{ height: (height - rowHeight), flexBasis: (width - columnWidth), alignSelf: 'flex-start' }}>
                    <Grid
                      columnWidth={columnWidth}
                      columnCount={columnCount}
                      height={height}
                      onScroll={onScroll}
                      overscanColumnCount={overscanColumnCount}
                      overscanRowCount={overscanRowCount}
                      cellRenderer={this.renderCell}
                      rowHeight={rowHeight}
                      rowCount={rowCount}
                      width={width}
                    />
                  </div>
                </div>
              </div>)}
            </AutoSizer>
          );
        }}
      </ScrollSync>
    );
  }
}

export default DataGrid;
export { DataGrid };
