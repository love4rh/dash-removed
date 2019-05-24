import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@blueprintjs/core';

import { isIn, istrue } from '../common/tool.js';

import './MultiSelector.css';



class TagSpan extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onRemove: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  onRemoveItem = (ev) => {
    this.props.onRemove();
    ev.preventDefault();
    ev.stopPropagation();
  }

  render () {
    const { disabled, title } = this.props;
    const adjStyle = istrue(disabled) ? { 'cursor': 'not-allowed' } : {};

    return (
      <div className="msTagDiv">
        <span className="msTag">
          <span className="msTagTitle">{title}</span>
          <button type="button"
            className="msTagButton bp3-tag-remove"
            onClick={this.onRemoveItem}
            style={ adjStyle }
          >
            <Icon icon="small-cross" />
          </button>
        </span>
        <span className="msGap">&nbsp;</span>
      </div>
    )
  }
}

class TagOption extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  onAddItem = (ev) => {
    this.props.onAdd();
    ev.preventDefault();
    ev.stopPropagation();
  }

  render () {
    const { title } = this.props;

    return (
      <div className="msOption" onMouseDown={this.onAddItem}>
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
  static propTypes = {
    optionList: PropTypes.array.isRequired,
    selectedList: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
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
      selectedList: [...props.selectedList],
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
    console.log('onKeyDown', ev.keyCode, ev.target);

    if( istrue(this.props.disabled) ) {
      return;
    }

    if( ev.keyCode === 13 || ev.keyCode === 40 ) {
      this.showOptions();
    }
  }

  onMouseDown = (ev) => {
    console.log('onMouseDown', ev);

    if( istrue(this.props.disabled) ) {
      return;
    }

    if( this.state.openOption ) {
      this.hideOptions();
    } else {
      this.showOptions();
    }
  }

  showOptions = () => {
    this.setState({ openOption: true });
  }

  hideOptions = () => {
    this.setState({ openOption: false });

    // 추가
  }

  onInputChange = (ev) => {
    // this.setState({ value: ev.target.value });
    this.setState({ inputText: ev.target.value });
  }

  handleRemove = (idx) => () => {
    if( istrue(this.props.disabled) ) {
      return;
    }

    const { selectedList } = this.state;
    selectedList.splice(idx, 1);
    this.setState({ selectedList: selectedList });
  }

  handleAdd = (idx) => () => {
    if( istrue(this.props.disabled) ) {
      return;
    }

    const { selectedList, unselected } = this.state;
    selectedList.push(unselected[idx]);
    unselected.splice(idx, 1);
    this.setState({ selectedList: selectedList, unselected: unselected });
  }

  render () {
    const { width, disabled } = this.props;
    const { selectedList, unselected, openOption } = this.state;

    return (
      <div tabIndex="1" className="multiSelector" onKeyDown={this.onKeyDown} onMouseDown={this.onMouseDown} onBlur={this.hideOptions}
        style={{ 'width':`${width}px` }}>
        <div className={'msTags ' + (disabled ? 'msDisabled' : 'msEnabled')}>
          { selectedList.map((d, i) => (<TagSpan key={`tag-${i}`} disabled={disabled} title={d} onRemove={this.handleRemove(i)} />)) }
        </div>
        <div className="msOptionWrap" style={{ 'width':'100%', 'display': (openOption ? 'block' : 'none') }}>
          <div className="msOptions" style={{ 'width':'100%' }}>
            { unselected.map((d, i) =>
              {
                // TODO filtering
                if( i === 0 ) return null;

                return (<TagOption key={`opt-${i}`} title={d} onAdd={this.handleAdd(i)} />);
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MultiSelector;
export { MultiSelector };
