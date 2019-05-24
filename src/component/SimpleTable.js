import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nvl } from '../common/tool.js';

import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import './SimpleTable.css';



class SimpleTable extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    getCellRender: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    onClickRow: PropTypes.func.isRequired,
    recordCount: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  componentDidMount () {
    //
  }

  componentDidUpdate () {
    //
  }

  onScroll = (ev) => {
    /*
    const $this = ev.currentTarget;
    console.log(
      $this.clientHeight,
      $this.clientWidth,
      $this.scrollHeight,
      $this.scrollLeft,
      $this.scrollTop,
      $this.scrollWidth
    ); // */

    // $this.scrollTop += 500;
  }

  getCell = (col, row) => {
    return this.props.getCellRender(col, row);
  }

  // eslint-disable-next-line
  onClickRow = (row) => (ev) => {
    this.props.onClickRow(row);
  }

  render() {
    const { columns, recordCount, height, width } = this.props;

    const records = [];
    for(let r = 0; r < recordCount; ++r) {
      records.push(
        <tr key={`fvrow-${r}`} className="" onClick={this.onClickRow(r)}>
          {
            columns.map((d, col) => {
              return (<td key={`rc-${col}`} className="recordCell" style={{ width:nvl(d.width, 100), textAlign:nvl(d.align, 'left') }}>{this.getCell(col, r)}</td>);
            })
          }
        </tr>
      );
    }

    return (
      <div className="simpleTable">
        <table className="headerTable" style={{width:(width - scrollbarSize() - 2 * 10), marginBottom:0}}>
          <tbody>
            <tr>{
              columns.map((d, i) => {
                return (<th key={`hc-${i}`} className="headerCell" style={{ width:nvl(d.width, 100), textAlign:nvl(d.align, 'left') }}>{d.name}</th>);
              })
            }</tr>
          </tbody>
        </table>
        <div className="recordTableWrap" style={{ height:(height - 110) }} onScroll={this.onScroll}>
          { records.length > 0 &&
            (<table className="recordTable">
              <tbody>
                { records.map((tag) => tag) }
              </tbody>
            </table>)
          }
        </div>
      </div>
    );
  }
}

export default SimpleTable;
export { SimpleTable };
