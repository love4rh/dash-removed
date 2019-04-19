import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@blueprintjs/core';

import { isvalid, hasString } from '../common/tool.js';

import ToolTip from './ToolTip.js';

import './Tab.css';



/**
 * TagInputEx
 * 지정된 값 목록 중 일부 값을 선택할 수 있는 태그 에디터.
 * values: 현재 지정된 값
 * options: 지정 가능한 전체 값.
 * 이미 추가된 값은 Intelisense 값으로 나타나지 않음.
 */
class TagInputer extends Component {
  static propTypes ={
    values: PropTypes.array,
    options: PropTypes.array,
    onChange: PropTypes.func,
  }

  constructor (props) {
    super(props);

    this.state = {
      //
    };
  }

  componentDidMount () {
    //
  }

  componentWillReceiveProps (nextProps) {
    //
  }

  componentWillUnmount () {
    //
  }

  render () {
    const { options } = this.props;

    return (
      <div>
        AAA
      </div>
    );
  }
}

export default TagInputer;
export { TagInputer };
