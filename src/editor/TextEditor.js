import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input } from 'semantic-ui-react'

import {makeid} from '../common/tool.js';

import './Editor.css';



class TextEditor extends React.Component {
	static propTypes = {
    compId: PropTypes.string.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props);

    this.value = this.props.value;
  }

  occurChangeEvent = () => {
    this.props.handleValueChange(this.props.compId, this.value);
  }

  onChange = (ev, data) => {
    this.value = data.value;
  }

  onKeyDown = (ev) => {
    if( ev.keyCode === 13 ) {
      this.occurChangeEvent();
    }
  }

  render () {
    return (
      <Form.Field key={makeid(6)}>
        <label>Name</label>
        <Input placeholder="Name"
          defaultValue={this.value}
          onBlur={this.occurChangeEvent}
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
        />
      </Form.Field>
    );
  }
}

export default TextEditor;
export { TextEditor };
