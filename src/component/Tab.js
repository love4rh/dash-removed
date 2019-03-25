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
      <div>
        <div className="dashTabs">
          <div className="dashTabList" style={{ width:(panes.length * 400) }}>
            {panes.map((pane, idx) => {
              const {title, icon, closeButton} = pane;
              let cssName = 'dashTabListItem ' + (closeButton ? 'dashTabPaddingClose' : 'dashTabPadding');

              if( activeTab === idx ) {
                cssName += ' dashTabListActive'
              }

              return (
                <div key={`dashtab-${idx}`}
                  className={cssName}
                  onMouseOver={this.onTabOver(idx)}
                  onMouseOut={this.hideToolTip}
                  onClick={this.onTabClick(idx)}
                >
                  {isvalid(icon) && (<img alt="" className="dashTabIcon" src={icon} />)}
                  <span className="dashTabTitle">
                    {hasString(title) ? title : ''}
                  </span>
                  {closeButton && (
                    <div className="tabCloseStyle">
                      <Icon icon="cross" iconSize={Icon.SIZE_STANDARD} onClick={this.onTabClose(idx)} />
                    </div>
                  )}
                </div>
              );
            })}
            { tabIndex !== -1 && text !== '' && (<ToolTip x={toolTip.x} y={toolTip.y}>{text}</ToolTip>) }
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;
export { Tab };
