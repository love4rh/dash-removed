import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {isvalid} from '../common/tool.js';



class CornerHeader extends Component {
  static propTypes = {
    dataSource: PropTypes.object,
  }

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  render () {
    const { dataSource, ...rest } = this.props;
    console.log(dataSource);

    return (
      <div {...rest}>
        {'dataSource.getTitle()'}
      </div>
    );
  }
}

export default CornerHeader;
export { CornerHeader };

