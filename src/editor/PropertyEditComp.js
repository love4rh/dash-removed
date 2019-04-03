import React from 'react';
import PropTypes from 'prop-types';

import { isvalid, nvl, makeid } from '../common/tool.js';
import { nm } from '../appMain/NodeMeta.js';

import { NumericInput, Text, TextArea, InputGroup } from '@blueprintjs/core';

import './PropertyEditComp.css';



// string, text, encryped, enum(select), true/false, yes/no


/**
 * Node 속성 편집 UI Element.
 */
export class GroupedPropEditor extends React.Component {
	static propTypes = {
    handleValueChange: PropTypes.func,
    propId: PropTypes.string.isRequired,
    subGroup: PropTypes.bool,
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
      //
    };
  }

  onValueChange = (id, data) => {
    // console.log('onInputChange', idx, ev, data);
    // this.props.handleValueChange(id, data);
  }

  render () {
    const { propId, width, subGroup } = this.props;
    const valueWidth = width - 195 - (subGroup ? 24 : 0);
    const pmList = nm.getPropMetaList(propId)

    // console.log(propId, pmList);

    return (
      <div>
        {pmList.map((p, idx) => (
          <div key={`${propId}-${idx}`} className={'attrElement' + (subGroup ? ' attrSubGroup' : '')}>
            <div className="attrTitle">{p.title}</div>
            { p.vt === 'string' &&
              (<div className="attrValue" style={{ width:valueWidth }}>
                <InputGroup fill={true} placeholder={nvl(p.desc, '')} />
              </div>)
            }
            { p.vt === 'encrypted' &&
              (<div className="attrValue" style={{ width:valueWidth }}>
                <InputGroup fill={true} type="password" placeholder={nvl(p.desc, '')} />
              </div>)
            }
            { p.vt === 'text' &&
              (<div className="attrValue" style={{ width:valueWidth }}>
                <TextArea fill={true} placeholder={nvl(p.desc, '')} />
              </div>)
            }
            { p.vt === 'enum' &&
              (<select className="dashSelect" style={{ width:valueWidth }}>
                {nm.getEnumList(p.vl).map((v, i) => <option key={`${propId}-${idx}-${i}`} value={v}>{v}</option>)}
              </select>)
            }
            { p.vt === 'number' &&
              (<div className="attrValue" style={{ width:valueWidth }}>
                <NumericInput fill={true} placeholder={nvl(p.desc, '')} />
              </div>)
            }
            { p.vt === 'path' &&
              (<div className="attrValue" style={{ width:valueWidth }}>
                <div className="bp3-input-group">
                  <input type="text" className="bp3-input" placeholder={nvl(p.desc, '')} />
                  <button className="bp3-button bp3-minimal bp3-intent-warning bp3-icon-layout-linear"></button>
                </div>
              </div>)
            }
            { (p.vt === 'boolean' || p.vt === 'yesno') &&
              (<div className="attrValue" style={{ width:valueWidth }}>
                <label className="bp3-control bp3-switch bp3-large" style={{ lineHeight:'30px', marginBottom:0 }}>
                  <input type="checkbox" className="bp3-large" />
                  <span className="bp3-control-indicator"></span>
                </label>
              </div>)
            }
          </div>)
        )}
      </div>
    );
  }
}

export default GroupedPropEditor;
