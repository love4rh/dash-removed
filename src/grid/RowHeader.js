import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {isvalid} from '../common/tool.js';



class Row extends Component {
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
      <div className="row" style={{ height }}
        onClick={this.handleClick(index)}>
        {index + 1}
      </div>
    );
  }
}



class RowHeader extends Component {
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
    const { dataSource, visibleRow } = this.props;

    const begin = visibleRow.begin;
    const end = Math.min(visibleRow.end + 1, dataSource.getRowCount());

    let tagList = [];

    for(let r = begin; r < end; ++r) {
      tagList.push(
        <Row key={'rk-' + r} index={r} height={dataSource.getRowHeight()} />
      );
    }

    return (
      <div className="rows">
        {tagList.map((tag) => tag)}
      </div>
    );
  }
}

export default RowHeader;
export { RowHeader };

