import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nvl } from '../common/tool.js';

import './ToolTip.css';


export const ArrowPosition = {
  top: 'top',
  left: 'left'
};



/**
 * ToolTip Component.
 */
class ToolTip extends Component {
  static propTypes = {
    arrowPosition: PropTypes.oneOf(Object.keys(ArrowPosition)),
    x: PropTypes.number,
    y: PropTypes.number,
  }

  constructor (props) {
    super(props);

    this.state = {
      arrowPos: nvl(this.props.arrowPosition, ArrowPosition.left)
    };
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  render () {
    const { x, y, children } = this.props;

    const arrowStyle = this.props.arrowPosition === ArrowPosition.top
      ? 'toolTipPointerTop' : 'toolTipPointer';

    return (
      <div className="toolTipDiv" style={{ left: x, top: y }}>
        <div className="toolTipInner">
          <div className={arrowStyle}></div>
          {children}
        </div>
      </div>
    );
  }
}

export default ToolTip;
export { ToolTip };
