import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@blueprintjs/core';

import { isvalid, hasString } from '../common/tool.js';

import ToolTip from './ToolTip.js';

import './Tab.css';



/**
 * Tab Component.
 * Properties -----
 * activeTab: initial activated tab index
 * onTabChange: handler of the event when tab is changed. onTabChange(activeTabIndex)
 * onTabClose: handler of the event when tab's close button is clicked. onTabClose(tabIndex)
 * panes: {title, icon, closeButton}
 */
class Tab extends Component {
  static propTypes ={
    activeTab: PropTypes.number,
    onTabChange: PropTypes.func.isRequired,
    onTabClose: PropTypes.func,
    panes: PropTypes.array.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
      activeTab: 0,
      toolTip: { tabIndex: -1, text: '' }
    };
  }

  componentDidMount () {
    //
  }

  componentWillReceiveProps (nextProps) {
    if( nextProps.activeTab ) {
      this.setState({ activeTab: nextProps.activeTab });
    } else if( nextProps.panes.length === 1 ) {
      this.setState({ activeTab: 0 });
    }
  }

  componentWillUnmount () {
    //
  }

  onTabOver = (idx) => (ev) => {
    if( !hasString(this.props.panes[idx].tooltip) ) {
      return;
    }

    const elem = ev.currentTarget;

    this.setState({ toolTip: {
      tabIndex: idx,
      text: this.props.panes[idx].tooltip,
      x: elem.offsetLeft + elem.clientWidth + 10,
      y: elem.offsetTop
    } });

    setTimeout(() => {
      this.hideToolTip();
    }, 5000);
  }

  hideToolTip = () => {
    this.setState({ toolTip: { tabIndex: -1, text: '' } });
  }

  onTabClick = (idx) => (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    this.setState({ activeTab: idx });
    this.props.onTabChange(idx);
  }

  onTabClose = (idx) => (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    let closed = false;

    if( isvalid(this.props.onTabClose) ) {
      closed = this.props.onTabClose(idx);
    }

    if( closed && idx <= this.state.activeTab ) {
      const aIdx = this.state.activeTab - 1;
      this.setState({ activeTab: aIdx, });
    }
  }

  render () {
    const { panes } = this.props;
    const { activeTab, toolTip } = this.state;
    const { tabIndex, text } = toolTip;

    return (
      <div className="dashTabs">
        <div className="dashTabList">
          {panes.map((pane, idx) => {
            let cssName = 'dashTabListItem ' + (pane.closeButton ? 'dashTabPaddingClose' : 'dashTabPadding');

            if( activeTab === idx ) {
              cssName += ' dashTabListActive'
            }

            return (
              <li key={`dashtab-${idx}`}
                className={cssName}
                onMouseOver={this.onTabOver(idx)}
                onMouseOut={this.hideToolTip}
                onClick={this.onTabClick(idx)}
              >
                {isvalid(pane.icon) && (<img className="dashTabIcon" src={pane.icon} />)}
                <span className="dashTabTitle">
                  {hasString(pane.title) ? pane.title : ''}
                </span>
                {pane.closeButton && (
                  <div className="tabCloseStyle">
                    <Icon icon="cross" iconSize={Icon.SIZE_STANDARD} onClick={this.onTabClose(idx)} />
                  </div>
                )}
              </li>
            );
          })}
          { tabIndex !== -1 && text !== '' && (<ToolTip x={toolTip.x} y={toolTip.y}>{text}</ToolTip>) }
        </div>
      </div>
    );
  }
}

export default Tab;
export { Tab };
