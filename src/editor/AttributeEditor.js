import React from 'react';
import PropTypes from 'prop-types';

import { Divider, Form, Input } from 'semantic-ui-react'

import {makeid} from '../common/tool.js';

import './Editor.css';



class AttributeEditor extends React.Component {
	static propTypes = {
    attributes: PropTypes.array.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

  }

  onChange = (idx) => (ev, data) => {
    // console.log('onInputChange', idx, ev, data);
    this.props.handleValueChange(idx, data.value);
  }

  render () {
    const { attributes } = this.props;

    const tagList = [];

    for(let i = 0; i < attributes.length; ++i) {
      const a = attributes[i];
      tagList.push(
        <Form.Field key={makeid(6)}>
          <label>Name</label>
          <Input placeholder="Name" defaultValue={a.value} onBlur={() => console.log('blurred')} onKeyDown={() => console.log('keydown')} />
        </Form.Field>
      );
    }

  	return (
      <div className="attributeEditor" style={{ width:'100%', height:'100%' }}>
        <Form>
          { tagList.map((elem) => (elem)) }
        </Form>
      </div>
    );
  }
}

export default AttributeEditor;
export { AttributeEditor };
