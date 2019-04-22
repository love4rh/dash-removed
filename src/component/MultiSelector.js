import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@blueprintjs/core';

import { isIn, isvalid, hasString } from '../common/tool.js';

import './MultiSelector.css';



class TagSpan extends Component {
  static propTypes ={
    title: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props);

    //
  }

  componentDidMount () {
    //
  }

  onRemove = () => {
    //
  }

  render () {
    const { title } = this.props;

    return (
      <span className="msTag">
        <span className="msTag">{title}</span>
        <button onClick={this.onRemove}><Icon icon="small-cross" /></button>
      </span>
    )
  }
}


/**
 * MultiSelector Component.
 * Properties -----
 * selectedList: 선택된 옵션 목록. 순서대로 표시함
 * totalList: 선택 가능한 옵션 목록
 */
class MultiSelector extends Component {
  static propTypes ={
    selectedList: PropTypes.array.isRequired,
    totalList: PropTypes.array.isRequired,
  }

  constructor (props) {
    super(props);

    // totalList - selectedList
    const unselected = [];
    for(let i = 0; i < props.totalList.length; ++i) {
        const opt = props.totalList[i];

        if( !isIn(opt, props.selectedList) ) {
            unselected.push(opt);
        }
    }

    this.state = {
      unselected: unselected,
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
    const { panes } = this.props;
    const { activeTab, toolTip } = this.state;
    const { tabIndex, text } = toolTip;

    return (
      <div>
        MultiSelector
      </div>
    );
  }
}

export default MultiSelector;
export { MultiSelector };
