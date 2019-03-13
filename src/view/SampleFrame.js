import React from 'react';
// import PropTypes from 'prop-types';


class SampleFrame extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      code: ''
    }
  }

  render () {
    return (
      <div>{this.state.code}</div>
    );
  }
}

export default SampleFrame;
export { SampleFrame };
