import React from 'react';
import PropTypes from 'prop-types';

import { istrue, nvl, makeid } from '../common/tool.js';
import { nm } from '../appMain/NodeMeta.js';

import { InputGroup, NumericInput, Switch, TextArea, Tooltip, Position } from '@blueprintjs/core';

import { SQLEditor } from './SQLEditor.js';

import './PropertyEditComp.css';



// string, text, encryped, enum(select), true/false, yes/no


/**
 * 한줄 텍스트 편집용 콤포넌트
 */
export class InputComponent extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    password: PropTypes.bool,
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



/**
 * 여러 줄 텍스트 편집용 콤포넌트
 */
export class TextAreaComponent extends React.Component {
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
    const { disabled } = this.props;
    const { value } = this.state;

    return (
      <div className="attrValue" style={{ width:'100%' }}>
        <TextArea fill={true}
          value={value}
          onChange={this.onValueChange}
          disabled={istrue(disabled)}
        />
      </div>
    );
  }
}



/**
 * Option Selector
 */
export class SelectComponent extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    optionList: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    vid: PropTypes.string.isRequired,
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
    const { disabled, optionList, vid } = this.props;
    const { value } = this.state;

    return (
      <div className="attrValue" style={{ width:'100%' }}>
        <select className="dashSelect"
          style={{ width: '100%' }}
          value={value}
          onChange={this.onValueChange}
          disabled={istrue(disabled)}
        >
          {optionList.map((v, i) => <option key={`${vid}/${i}`} value={v} className="dashOption">{v}</option>)}
        </select>
      </div>
    );
  }
}


/**
 * Number Input Component
 */
export class NumericComponent extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    // maximum: PropTypes.number,
    // minimum: PropTypes.number,
    value: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  onValueChange = (number) => {
    this.setState({ value: number });
    this.props.onChange(number);
  }

  render () {
    const { disabled } = this.props;
    const { value } = this.state;

    return (
      <div className="attrValue" style={{ width:'100%' }}>
        <NumericInput fill={true}
          disabled={istrue(disabled)}
          value={value}
          onValueChange={this.onValueChange}
        />
      </div>
    );
  }
}



/**
 * Input Component with edit button.
 * 파일 경로 등을 받기 위하여 사용함
 */
export class InputButtonComponent extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
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
    const { disabled, optionList, vid } = this.props;
    const { value } = this.state;

    return (
      <div className="attrValue" style={{ width:'100%' }}>
        <div className="bp3-input-group">
          <input disabled={istrue(disabled)} type="text" className="bp3-input" value={value} onChange={this.onValueChange} />
          <button className="bp3-button bp3-minimal bp3-intent-warning bp3-icon-layout-linear" disabled={istrue(disabled)} />
        </div>
      </div>
    );
  }
}



/**
 * Toggle 편집용 UI Element.
 */
export class ToogleComponent extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  onSwitchChange = (ev) => {
    this.setState({ value: ev.target.checked });
    this.props.onChange(ev.target.checked);
  }

  render () {
    const { value } = this.state;

    return (
      <div className="attrValue">
        <Switch checked={value}
          label=""
          large
          disabled={istrue(this.props.disabled)}
          style={{ lineHeight:'30px', marginBottom:0 }}
          onChange={this.onSwitchChange}
        />
      </div>
    );
  }
}


/**
 * SQL 편집 콤포넌트
 */
export class SQLComponent extends React.Component {
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

  onValueChange = (val) => {
    this.setState({ value: val });
    this.props.onChange(val);
  }

  render () {
    const { value } = this.state;

    return (
      <div className="attrValue" style={{ width:'100%', height:72 }}>
        <SQLEditor disabled={istrue(this.props.disabled)} sql={value} onValueChange={this.onValueChange} />
      </div>
    );
  }
}



/**
 * Node 속성 편집 UI Element.
 */
export class GroupedPropEditor extends React.Component {
	static propTypes = {
    disabled: PropTypes.bool,
    getNodeValue: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
    propId: PropTypes.string.isRequired,
    subGroup: PropTypes.bool,
    valueId: PropTypes.string.isRequired,
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
      //
    };
  }


  onValueChange = (propId, redraw) => (value) => {
    this.handleValueChange(propId, value, redraw);
  }  

  handleValueChange = (propId, value, redraw) => {
    if( this.props.onValueChange ) {
      this.props.onValueChange(propId, value, redraw);
    }
  }

  render () {
    const { propId, width, subGroup, valueId, getNodeValue, disabled } = this.props;
    const valueWidth = width - 32 - (subGroup ? 28 : 0);
    const pmList = nm.getPropMetaList(propId);

    const single = pmList.length === 1;
    const readOnly = istrue(disabled);

    // console.log('PropertyEditComp render', propId, valueId, pmList);

    return (
      <div key={makeid(4)}>
        { pmList.map((p, idx) => {
          const vid = single ? valueId : `${valueId}/${p.valueKey}`;
          const curVal = getNodeValue(vid);
          const isToggle = (p.vt === 'boolean' || p.vt === 'yesno');

          return (
            <div key={vid} className={'attrElement' + (subGroup ? ' attrSubGroup' : '')}>
              <Tooltip content={nvl(p.desc, '')} position={Position.BOTTOM}>
                <div className={isToggle ? 'attrTitleToogle' : 'attrTitle'}>{p.title}</div>
              </Tooltip> { p.vt === 'string' &&
                (<InputComponent disabled={readOnly} value={nvl(curVal, '')} onChange={this.onValueChange(vid)} />)
              } { p.vt === 'password' &&
                (<InputComponent disabled={readOnly} value={nvl(curVal, '')} onChange={this.onValueChange(vid)} password={true} />)
              } { p.vt === 'text' &&
                (<TextAreaComponent disabled={readOnly} value={nvl(curVal, '')} onChange={this.onValueChange(vid)} />)
              } { p.vt === 'enum' &&
                (<SelectComponent disabled={readOnly} value={nvl(curVal, '')} onChange={this.onValueChange(vid, true)} optionList={nm.getEnumList(p.vl)} vid={vid} />)
              } { p.vt === 'number' &&
                (<NumericComponent disabled={readOnly} value={nvl(curVal, 0)} onChange={this.onValueChange(vid)} />)
              } { p.vt === 'path' &&
                (<InputButtonComponent disabled={readOnly} value={nvl(curVal, '')} onChange={this.onValueChange(vid)} />)
              } { isToggle &&
                (<ToogleComponent disabled={readOnly} value={istrue(curVal)} onChange={this.onValueChange(vid)} />)
              } { p.vt === 'sql' &&
                (<SQLComponent disabled={readOnly} value={nvl(curVal, '')} onChange={this.onValueChange(vid)} />)
              }
            </div>);
          }
        )}
      </div>
    );
  }
}

export default GroupedPropEditor;
