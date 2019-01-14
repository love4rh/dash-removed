import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isvalid} from '../common/tool.js';

import './DataGrid.css';



class Column extends Component {
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



class ColumnHeader extends Component {
  static propTypes = {
    dataSource: PropTypes.object,
    scrollLeft: PropTypes.number,
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

  render () {
    const { dataSource } = this.props;

    let tagList = [];
    let left = 0;

    for(let c = 0; c < dataSource.getColumnCount(); ++c) {
      const colWidth = dataSource.getColumnWidth(c);

      tagList.push(
        <Column key={'ck-' + c} index={c} title={dataSource.getColumnName(c)} width={colWidth} left={left} />
      );
      left += colWidth
    }

    return (
      <div className="columnsDiv">
        {tagList.map((tag) => tag)}
      </div>
    );
  }
}

export default ColumnHeader;
export { ColumnHeader };
