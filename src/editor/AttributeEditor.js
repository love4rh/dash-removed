import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { isvalid, makeid } from '../common/tool.js';
import { nm } from '../appMain/NodeMeta.js';
import { GroupedPropEditor } from '../editor/PropertyEditComp.js';

import { Text, TextArea, InputGroup } from '@blueprintjs/core';

import './Editor.css';



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

    this.state = {
      //
    };
  }

  onValueChange = (id, data) => {
    // console.log('onInputChange', idx, ev, data);
    this.props.handleValueChange(id, data);
  }

  render () {
    const { appData, height, width } = this.props;

    const node = appData.getActiveNode();
    const nodeType = 'fetchMethod';
    const groupList = nm.getNodeProperty(nodeType);

    return (
      <div key={'attr-' + (node === null ? 'null' : node.id)}>
        <div className="paneTitle">Attributes</div>
        <div className="attributeEditor"
          style={{ width:'100%', height:(height - 55) }}
        >
          { groupList.map((p, idx) => <GroupedPropEditor key={`gpe-${idx}`} width={width} propId={p.prop} />) }
        </div>
      </div>
    );
  }
}

export default AttributeEditor;
export { AttributeEditor };
