import React from 'react';
import PropTypes from 'prop-types';

import { isvalid, istrue, nvl, makeid } from '../common/tool.js';

import { InputGroup, NumericInput, Switch, TextArea, Tooltip, Position } from '@blueprintjs/core';

import './ColumnEditComponent.css';



/**
 * 컬럼 속성 편집 콤포넌트.
 * 컬럼 선택, 순서정하기, 명칭변경 편집을 위한 콤포넌트임.
 */
export class ColumnEditComponent extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  onValueChange = (ev) => {
    this.setState({ value: ev.target.value });
    this.props.onChange(ev.target.value);
  }

  render () {
    const { password, disabled } = this.props;
    const { value } = this.state;

    return (
      <div className="attrValue" style={{ width:'100%' }}>
        <InputGroup
          fill={true}
          value={value}
          onChange={this.onValueChange}
          disabled={istrue(disabled)}
          type={istrue(password) ? 'password' : 'input'}
        />
      </div>
    );
  }
}

export default ColumnEditComponent;
