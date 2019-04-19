import React from 'react';
import PropTypes from 'prop-types';

import { nm } from '../appMain/NodeMeta.js';
import { isvalid, nvl, hasString, istrue } from '../common/tool.js';

import { Icon } from '@blueprintjs/core';

import { GroupedPropEditor } from '../editComp/PropertyEditComp.js';

import './Editor.css';


/**
 * Node 속성 편집 UI.
 */
class AttributeEditor extends React.Component {
	static propTypes = {
    handleValueChange: PropTypes.func,
    node: PropTypes.object,
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    const node = props.node;
    const nodeType = isvalid(node) ? node.type : '';
    const propList = isvalid(node) ? { ...node.property } : {};

    this.state = {
      nodeType: nodeType,
      propList: propList,
      editable: true,
      editOn: false,
      redraw: 0
    };
  }

  componentWillReceiveProps (nextProps) {
    const node = nextProps.node;
    const nodeType = isvalid(node) ? node.type : '';
    const propList = isvalid(node) ? { ...node.property } : {};

    this.setState({ nodeType: nodeType, propList: propList, editOn: false });
  }

  handleValueChange = (vid, value, redraw) => {
    this.state.propList[vid] = value;

    if( istrue(redraw) ) {
      this.setState({ redraw: this.state.redraw + 1 });
    }
  }

  getNodeValue = (id) => {
    const { propList } = this.state;
    const value = propList[id];
    return typeof value === 'string' ? decodeURIComponent(value) : nvl(value, '');
  }

  /**
   * type - 1: 편집 시작, 2: 편집 취소, 3: 편집 완료
   */
  onTitleButton = (type) => () => {
    if( type === 1 ) {
      this.setState({ editOn: true });
    } else {
      if( type === 2 ) {
        const node = this.props.node;
        const propList = isvalid(node) ? { ...node.property } : {};
        this.setState({ propList: propList, editOn: false });
      } else if( type === 3) {
        this.props.handleValueChange(this.state.propList);
        this.setState({ editOn: false });
      }
    }
  }

  render () {
    const { node, height, width } = this.props;
    const { nodeType, editable, editOn } = this.state;
    const groupList = nm.getNodeProperty(nodeType);

    return (
      <div key={'attr-' + (isvalid(node) ? node.id : 'null')}>
        <div className="paneTitle"><span>Attributes</span>
          { editable &&
            <span className="paneButton"><Icon tabIndex="1" icon={editOn ? 'tick' : 'edit'} onClick={this.onTitleButton(editOn ? 3 : 1 )} /></span>
          } { editable && editOn &&
            <span className="paneButton"><Icon tabIndex="1" icon={'cross'} onClick={this.onTitleButton(2)} /></span>
          }
        </div>
        <div className="attributeEditor bp3-dark"
          style={{ width:'100%', height:(height - 25) }}
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
                  disabled={!editOn}
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
