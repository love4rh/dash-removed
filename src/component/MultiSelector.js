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
        <span className="msTagTitle">{title}</span>
        <button type="button" className="msTagButton bp3-tag-remove" onClick={this.onRemove}><Icon icon="small-cross" /></button>
      </span>
    )
  }
}

class TagOption extends Component {
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
      <div className="msOption">
        {title}
      </div>
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
    optionList: PropTypes.array.isRequired,
    selectedList: PropTypes.array.isRequired,
  }

  constructor (props) {
    super(props);

    // optionList - selectedList
    const unselected = [];
    for(let i = 0; i < props.optionList.length; ++i) {
        const opt = props.optionList[i];

        if( !isIn(opt, props.selectedList) ) {
            unselected.push(opt);
        }
    }

    this.state = {
      selectedList: props.selectedList,
      unselected: unselected,
      openOption: false,
      inputText: '',
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

  onKeyDown = (ev) => {
    //
    console.log('onKeyDown', ev.target.selectionStart);
  }

  onStartAdding = () => {
    this.setState({ openOption: true });
  }

  onEndAdding = () => {
    this.setState({ openOption: false });

    // 추가
  }

  onInputChange = (ev) => {
    // this.setState({ value: ev.target.value });
    console.log(ev.target.value);
  }

  render () {
    const { selectedList, unselected, openOption } = this.state;

    return (
      <div className="multiSelector">
        <div className="msTags" onKeyDown={this.onKeyDown}>
          { selectedList.map((d, i) => (<TagSpan key={`tag-${i}`} title={d} />)) }
          <input
            className="msInput bp3-input-ghost"
            onFocus={this.onStartAdding}
            onBlur={this.onEndAdding}
            onKeyDown={this.onKeyDown}
            onChange={this.onInputChange}
          />
        </div>
        <div className="msOptions" style={{ 'display': (openOption ? 'block' : 'none') }}>
          { unselected.map((d, i) => (<TagOption key={`opt-${i}`} title={d} />)) }
        </div>
      </div>
    );
  }
}

export default MultiSelector;
export { MultiSelector };
