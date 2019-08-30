import React from 'react';
import PropTypes from 'prop-types';

import { isundef, isvalid, istrue, nvl, makeid } from '../common/tool.js';
import { nm } from '../appMain/NodeMeta.js';

import { InputGroup, NumericInput, Switch, TextArea, Tooltip, Position } from '@blueprintjs/core';

import { SQLEditor } from './SQLEditor.js';
import { ColumnEditComponent } from './ColumnEditComponent.js';

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
    this.props.onChange(ev.target.value, true);
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
    const { disabled } = this.props;
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
    this.props.onChange(ev.target.checked, true);
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
 * Enabled String (Toggle + Input Text)
 */
export class ToggleInputComponent extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.object.isRequired, // {set, param}

    // onChange: PropTypes.func.isRequired,
    // password: PropTypes.bool,
    
  }

  constructor (props) {
    super(props);

    this.state = {
      enable: props.value.set,
      text: decodeURIComponent(nvl(props.value.param, ''))
    };
  }

  onSwitchChange = (ev) => {
    const { text } = this.state;

    this.setState({ enable: ev.target.checked });
    this.props.onChange({ set: ev.target.checked, param: text }, true);
  }

  onTextChange = (value) => {
    const { enable } = this.state;
    this.props.onChange({ set: enable, param: value });
  }

  render () {
    const {disabled} = this.props;
    const { enable, text } = this.state;

    return (
      <>
        <div className="attrValue">
          <Switch
            checked={enable}
            label=""
            large
            disabled={istrue(disabled)}
            style={{ lineHeight:'30px', marginBottom:0 }}
            onChange={this.onSwitchChange}
          />
        </div>
        <div className="attrElement">
          <InputComponent disabled={istrue(disabled) || !enable} value={text} onChange={this.onTextChange} />
        </div>
      </>
    );
  }
}


const _componentMap_ = {
  'string': ({ disabled, value, onChange }) => {
    return (<InputComponent disabled={disabled} value={nvl(value, '')} onChange={onChange} />);
  },

  'password': ({ disabled, value, onChange }) => {
    return (<InputComponent disabled={disabled} value={nvl(value, '')} onChange={onChange} password={true} />);
  },

  'text': ({ disabled, value, onChange }) => {
    return (<TextAreaComponent disabled={disabled} value={nvl(value, '')} onChange={onChange} />);
  },

  'enum': ({ disabled, value, onChange, optionList, vid }) => {
    return  (<SelectComponent disabled={disabled} value={nvl(value, '')} onChange={onChange} optionList={optionList} vid={vid} />);
  },

  'number': ({ disabled, value, onChange }) => {
    return (<NumericComponent disabled={disabled} value={nvl(value, 0)} onChange={onChange} />);
  },

  'path': ({ disabled, value, onChange }) => {
    return (<InputButtonComponent disabled={disabled} value={nvl(value, '')} onChange={onChange} />);
  },

  'toggle': ({ disabled, value, onChange }) => {
    return (<ToogleComponent disabled={disabled} value={istrue(value)} onChange={onChange} />);
  },

  'sql': ({ disabled, value, onChange }) => {
    return (<SQLComponent disabled={disabled} value={nvl(value, '')} onChange={onChange} />);
  },

  'columnOperator': ({ disabled, value, onChange, width, node }) => {
    return (<ColumnEditComponent disabled={disabled} value={value} node={node} onChange={onChange} width={width} />);
  },

  'enabledString': ({ disabled, value, onChange }) => {
    if( value === '' ) {
      value = { set: false };
    }

    return (<ToggleInputComponent disabled={disabled} value={value} onChange={onChange} />);
  }
};


const generateComponent = (type, param) => {
  const genFunc = _componentMap_[type];
  const implemented = !isundef(genFunc);

  console.log('CHECK generateComponent', type, implemented, param);

  return implemented && genFunc(param);
};



/**
 * Node 속성 편집 UI Element.
 */
export class GroupedPropEditor extends React.Component {
	static propTypes = {
    disabled: PropTypes.bool,
    getNodeValue: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
    propId: PropTypes.string.isRequired,
    propParam: PropTypes.object,
    subGroup: PropTypes.bool,
    valueId: PropTypes.string.isRequired,
    width: PropTypes.number,
    node: PropTypes.object,
  }

  constructor (props) {
    super(props);

    this.state = {
      //
    };
  }

  onValueChange = (propId, redraw) => (value) => {
    // console.log('CHECK onValueChange', propId, value);
    this.handleValueChange(propId, value, redraw);
  }

  handleValueChange = (propId, value, redraw) => {
    if( this.props.onValueChange ) {
      this.props.onValueChange(propId, value, redraw);
    }
  }

  render () {
    const { propId, propParam, subGroup, valueId, getNodeValue, disabled, width, node } = this.props;
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
          const propName = p.vt === 'label' && isvalid(propParam) ? propParam.title : p.title;
          const propDesc = nvl(p.vt === 'label' && isvalid(propParam) ? propParam.desc : p.desc, '');

          // console.log('CHECK PropertyEditor', idx, vid, curVal);
          const compParam = {
            disabled: readOnly,
            node: node,
            value: curVal,
            onChange: this.onValueChange(vid, p.vt === 'enum'),
            width: width,
            vid: vid,
          };

          if (p.vt === 'enum') {
            compParam.optionList = nm.getEnumList(p.vl);
          }

          return (
            <div key={vid} className={(p.vt === 'label' ? 'captionElement' : 'attrElement') + (subGroup ? ' attrSubGroup' : '')}>
              <Tooltip content={propDesc} position={Position.BOTTOM}>
                <div className={(isToggle || p.vt === 'enabledString') ? 'attrTitleToogle' : 'attrTitle'}>{propName}</div>
              </Tooltip>
              { p.vt !== 'label' && generateComponent(isToggle ? 'toggle' : p.vt, compParam) }
            </div>
          );
        })}
      </div>
    );
  }
}

export default GroupedPropEditor;
