import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { nm } from '../appMain/NodeMeta.js';
import { nvl, isvalid, makeid, hasString } from '../common/tool.js';

import { GroupedPropEditor } from '../editComp/PropertyEditComp.js';

import { Text, TextArea, InputGroup } from '@blueprintjs/core';

import './Editor.css';


const testNodeId = 'nodeid';

/**
 * Node 속성 편집 UI.
 */
@inject('appData')
@observer
class AttributeEditor extends React.Component {
	static propTypes = {
    handleValueChange: PropTypes.func,
    node: PropTypes.object,
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    const values = {};

    values[testNodeId + '/name'] = '테스트 노드';
    values[testNodeId + '/desc'] = '이제 좀 끝내자';
    values[testNodeId + '/fm'] = 'DB';
    values[testNodeId + '/dtype'] = 'PLAIN';
    values[testNodeId + '/tp/nameAtHead'] = true;

    this.state = {
      nodeValues: values
    };
  }

  handleValueChange = (id, value) => {
    const { nodeValues } = this.state;

    const chValue = {};
    chValue[id] = value;

    this.setState({nodeValues: { ...nodeValues, ...chValue}})

    // console.log('onInputChange', idx, ev, data);
    this.props.handleValueChange(id, value);
  }

  getNodeValue = (id) => {
    const { appData } = this.props;

    const node = appData.getActiveNode();

    if( isvalid(node) ) {
      return node.property[id];
    }

    return '';
  }

  render () {
    const { appData, height, width } = this.props;
    const { nodeValues } = this.state;

    const node = appData.getActiveNode();
    const nodeType = 'fetchMethod';
    const groupList = nm.getNodeProperty(nodeType);

    return (
      <div key={'attr-' + (node === null ? 'null' : node.id)}>
        <div className="paneTitle">Attributes</div>
        <div className="attributeEditor"
          style={{ width:'100%', height:(height - 55) }}
        >
          { groupList.map((p, idx) => {
              const subGroup = hasString(p.enableKey);
              return (!subGroup || p.enableValue === this.getNodeValue(p.enableKey)) ?
                <GroupedPropEditor
                  key={`gpe-${idx}`}
                  width={width}
                  propId={p.propKey}
                  valueId={`${p.valueKey}`}
                  subGroup={subGroup}
                  getNodeValue={this.getNodeValue}
                  onValueChange={this.handleValueChange}
                /> : null;
            })
          }
        </div>
      </div>
    );
  }
}

export default AttributeEditor;
export { AttributeEditor };
