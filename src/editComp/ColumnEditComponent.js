import React from 'react';
import PropTypes from 'prop-types';

import { nvl } from '../common/tool.js';

import { Icon } from '@blueprintjs/core';

import './ColumnEditComponent.css';



class ColumnLine extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    rename: PropTypes.string,
    title: PropTypes.string.isRequired,
  }

  render () {
    const { rename, title } = this.props;
    return (
      <div>
        <span><Icon icon="drag-handle-vertical" /></span>
        <span>{title}</span>
        <span>{nvl(rename, '')}</span>
      </div>
    );
  }
}


/**
 * 컬럼 속성 편집 콤포넌트.
 * 컬럼 선택, 순서정하기, 명칭변경 편집을 위한 콤포넌트임.
 * 
 * 선택 가능한 전체 아이템 목록,
 * 현재 지정된 상황 (선택된 아이템 목록, 변경 명칭),
 * 
 * 옵션: disabled,
 */
export class ColumnEditComponent extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.array.isRequired,
    width: PropTypes.number,
    node: PropTypes.object,
  }

  constructor (props) {
    super(props);

    const
      selectedList = [],
      renameList = []
    ;

    const l = props.value;
    // const node = this.props.node;

    for(let i = 0; i < l.length; ++i) {
      selectedList.push(l[i].name);
      renameList.push(nvl(l[i].toName, ''));
    }

    this.state = {
      selectedList: selectedList,
      renameList: renameList,
      width: 0,
    };
  }

  componentDidMount () {
    const wrapper = this.refs.wrapper;
    
    this.setState({ width: wrapper.parentNode.clientWidth });
  }

  onValueChange = (ev) => {
    this.setState({ value: ev.target.value });
    this.props.onChange(ev.target.value);
  }

  handleRowClick = (row) => {
    console.log(row, 'selected');
  }

  getCellRender = (col, row) => {
    const { selectedList, renameList } = this.state;

    return (<span className="cellStyle">{col === 0 ? selectedList[row] : renameList[row]}</span>);
  }

  render () {
    const { selectedList, renameList, width } = this.state;

    return (
      <div ref="wrapper" style={{ 'width':`${width}px` }}>
        { selectedList.map((dat, idx) => (<ColumnLine key={`column-${idx}`} index={idx} rename={renameList[idx]} title={dat} />)) }
      </div>
    );
  }
}

export default ColumnEditComponent;
