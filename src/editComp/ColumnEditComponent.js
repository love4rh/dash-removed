import React from 'react';
import PropTypes from 'prop-types';

import { nvl } from '../common/tool.js';

import SimpleTable from '../component/SimpleTable.js';

import './ColumnEditComponent.css';



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
    };
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
    const { width } = this.props;

    const columns = [
      { name: 'Column', width:10, align:'left' },
      { name: 'Rename', width:10, align:'left' }
    ];

    return (
      <div>
        <SimpleTable
          columns={columns}
          getCellRender={this.getCellRender}
          height={200}
          width={width}
          onClickRow={this.handleRowClick}
          recordCount={this.state.selectedList.length}
        />
      </div>
    );
  }
}

export default ColumnEditComponent;
