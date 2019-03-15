import React from 'react';
import PropTypes from 'prop-types';



export const DividerDirection = {
  vertical: 'vertical',
  horizontal: 'horizontal'
};


class LayoutDivider extends React.Component {
	static propTypes = {
    direction: PropTypes.oneOf(Object.keys(DividerDirection)).isRequired,
    onLayoutChange: PropTypes.func.isRequired,
    size: PropTypes.number // default 7
  }

  constructor (props) {
    super(props);

    this.state = {
    	p1: 0,
      p2: 0,
      dragging: false
    };
  }

  handleMouseDown = (ev) => {
    const p = this.isVertical() ? ev.clientX : ev.clientY;

    console.log('LayoutDivider', ev.clientX, ev.clientY, p);

    this.refs.wrapper.focus();

    this.setState({ p1: p, p2: p, dragging: true });

    document.body.style.cursor = this.isVertical() ? 'e-resize' : 'n-resize';

    ev.preventDefault();
    ev.stopPropagation();

    document.addEventListener('mousemove', this.handleMouseMove, {capture: true});
    document.addEventListener('mouseup', this.handleMouseUp, {capture: true});
  }

  handleMouseMove = (ev) => {
    this.setState({ p2: (this.isVertical() ? ev.clientX : ev.clientY) });
  }

  handleMouseUp = (ev) => {
    const p = this.isVertical() ? ev.clientX : ev.clientY;

    console.log('LayoutDivider Up', ev.clientX, ev.clientY, p);

    document.body.style.cursor = 'auto';

    document.removeEventListener('mousemove', this.handleMouseMove, {capture: true});
    document.removeEventListener('mouseup', this.handleMouseUp, {capture: true});

    this.props.onLayoutChange(this.state.p1, p);
    this.setState({ p1: 0, p2 : 0, dragging: true });
  }

  isVertical = () => {
    return this.props.direction === DividerDirection.vertical;
  }

  render () {
    const size = this.props.size ? this.props.size : 7;

    const shape = this.isVertical()
      ? {
        flexBasis:size,
        width:`${size}px`,
        cursor:'e-resize'
      } : {
        flexBasis:size,
        height:`${size}px`,
        cursor:'n-resize'
      }
    ;

  	return (
      <div ref="wrapper" style={shape}
        onMouseDown={this.handleMouseDown}
      >
        &nbsp;
      </div>
    );
  }
}

export default LayoutDivider;
export { LayoutDivider };
