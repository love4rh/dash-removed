import React from 'react';
import PropTypes from 'prop-types';

import C from '../common/Constants.js';
import { IB } from '../common/ImageBank.js';

import ToolTip, { ArrowPosition } from '../component/ToolTip.js';

import './Editor.css';



class GalleryItem extends React.Component {
  static propTypes = {
    nodeMeta: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);

    this.state = {
      showToolTip: false,
    };
  }

  handleDrag = (ev) => {
    ev.dataTransfer.setData(C.evtDnDNode, JSON.stringify(this.props.nodeMeta));
  }

  handleMouseOver = (ev) => {
    const elem = ev.currentTarget;
    const pn = elem.parentNode;

    this.setState({
      showToolTip: true,
      text: this.props.nodeMeta.description,
      tx: ev.clientX - pn.scrollLeft, // elem.offsetLeft + 24,
      ty: elem.offsetTop + elem.clientHeight - pn.scrollTop
    });
  }

  hideToolTip = () => {
    this.setState({ showToolTip: false });
  }

  render () {
    const { nodeMeta, ...rest } = this.props;
    const { showToolTip, text, tx, ty } = this.state;

    return (
      <React.Fragment>
        <div className="galleryItem"
          draggable={true}
          onDragStart={this.handleDrag}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.hideToolTip}
          {...rest}
        >
          <img className="galleryIcon"
            alt={nodeMeta.name}
            src={IB.getNodeImage(nodeMeta.type, true)}
          />
          {nodeMeta.name}
        </div>
        { showToolTip && (<ToolTip x={tx} y={ty} arrowPosition={ArrowPosition.top}>{text}</ToolTip>) }
      </React.Fragment>
    );
  }
}

export default GalleryItem;
export { GalleryItem };
