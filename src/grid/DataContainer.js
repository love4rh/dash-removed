import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {isvalid} from '../common/tool.js';



class DataColumn extends Component {
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
          className="dataColumn"
          style={{ left, width }}
          onClick={this.handleClick(c, row)}
        >
          {dataSource.getCellValue(c, row)}
        </div>
      );

      left += width;
    }

    return (
      <div className="dataColumns" style={{ height: dataSource.getRowHeight() }}>
        {tagList.map((tag) => tag)}
      </div>
    );
  }
}



class DataContainer extends Component {
  static propTypes = {
    dataSource: PropTypes.object,
    visibleRow: PropTypes.object,
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
    const { dataSource, visibleRow, ...rest } = this.props;

    const begin = visibleRow.begin;
    const end = Math.min(visibleRow.end + 1, dataSource.getRowCount());

    let tagList = [];

    for(let r = begin; r < end; ++r) {
      tagList.push(
        <DataColumn key={'dc-' + r} row={r} dataSource={dataSource} />
      );
    }

    return (
      <div className="dataContainer" {...rest}>
        {tagList.map((tag) => tag)}
      </div>
    );
  }
}

export default DataContainer;
export { DataContainer };
