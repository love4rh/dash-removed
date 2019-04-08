import React from 'react';
import PropTypes from 'prop-types';

import { isvalid, istrue, nvl, makeid } from '../common/tool.js';
import { nm } from '../appMain/NodeMeta.js';

import { InputGroup, NumericInput, Switch, Text, TextArea } from '@blueprintjs/core';

import { SQLEditor } from './SQLEditor.js';

import './PropertyEditComp.css';



// string, text, encryped, enum(select), true/false, yes/no


/**
 * Node 속성 편집 UI Element.
 */
export class GroupedPropEditor extends React.Component {
	static propTypes = {
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

  onValueChange = (propId) => (ev) => {
    this.handleValueChange(propId, ev.target.value);
  }

  onSwitchChange = (propId) => (ev) => {
    this.handleValueChange(propId, ev.target.checked);
  }

  handleValueChange = (propId, value) => {
    console.log('Value Changed', propId, value);

    if( this.props.onValueChange ) {
      this.props.onValueChange(propId, value);
    }
  }

  render () {
    const { propId, width, subGroup, valueId, getNodeValue } = this.props;
    const valueWidth = width - 195 - (subGroup ? 24 : 0);
    const pmList = nm.getPropMetaList(propId);

    const single = pmList.length === 1;

    // console.log(propId, valueId, pmList);

    return (
      <div>
        { pmList.map((p, idx) => {
          const vid = single ? valueId : `${valueId}/${p.valueKey}`;
          const curVal = getNodeValue(vid);

          return (
            <div key={vid} className={'attrElement' + (subGroup ? ' attrSubGroup' : '')}>
              <div className="attrTitle">{p.title}</div>
              { p.vt === 'string' &&
                (<div className="attrValue" style={{ width:valueWidth }}>
                  <InputGroup fill={true} placeholder={nvl(p.desc, '')} value={curVal} onChange={this.onValueChange(vid)} />
                </div>)
              }
              { p.vt === 'password' &&
                (<div className="attrValue" style={{ width:valueWidth }}>
                  <InputGroup fill={true} type="password" placeholder={nvl(p.desc, '')} value={curVal} onChange={this.onValueChange(vid)} />
                </div>)
              }
              { p.vt === 'text' &&
                (<div className="attrValue" style={{ width:valueWidth }}>
                  <TextArea fill={true} placeholder={nvl(p.desc, '')} value={curVal} onChange={this.onValueChange(vid)} />
                </div>)
              }
              { p.vt === 'enum' &&
                (<select className="dashSelect" style={{ width:valueWidth }} value={curVal} onChange={this.onValueChange(vid)}>
                  {nm.getEnumList(p.vl).map((v, i) => <option key={`${vid}/${i}`} value={v} >{v}</option>)}
                </select>)
              }
              { p.vt === 'number' &&
                (<div className="attrValue" style={{ width:valueWidth }}>
                  <NumericInput fill={true} placeholder={nvl(p.desc, '')} value={curVal} onChange={this.onValueChange(vid)} />
                </div>)
              }
              { p.vt === 'path' &&
                (<div className="attrValue" style={{ width:valueWidth }}>
                  <div className="bp3-input-group">
                    <input type="text" className="bp3-input" placeholder={nvl(p.desc, '')} value={curVal} onChange={this.onValueChange(vid)} />
                    <button className="bp3-button bp3-minimal bp3-intent-warning bp3-icon-layout-linear"></button>
                  </div>
                </div>)
              }
              { (p.vt === 'boolean' || p.vt === 'yesno') &&
                (<div className="attrValue" style={{ width:valueWidth }}>
                  <Switch checked={istrue(curVal)} label="" large style={{ lineHeight:'30px', marginBottom:0 }} onChange={this.onSwitchChange(vid)} />
                </div>)
              }
              { p.vt === 'sql' &&
                (<div className="attrValue" style={{ width:valueWidth, height:72 }}>
                  <SQLEditor propId={vid} onValueChange={this.handleValueChange} />
                </div>)
              }
            </div>);
          }
        )}
      </div>
    );
  }
}

export default GroupedPropEditor;
