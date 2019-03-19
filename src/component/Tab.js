import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react'

import { nvl, isvalid } from '../common/tool.js';

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

  onTabClick = (idx) => (ev) => {
    this.setState({ activeTab: idx });
    this.props.onTabChange(idx);

    ev.preventDefault();
    ev.stopPropagation();
  }

  onTabClose = (idx) => (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    let close = true;

    if( isvalid(this.props.onTabClose) ) {
      close = this.props.onTabClose(idx);
    }

    if( idx <= this.state.activeTab ) {
      const aIdx = this.state.activeTab - 1;
      this.setState({ activeTab: aIdx, });
    }
  }

  render () {
    const { panes } = this.props;
    const { activeTab } = this.state;

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
                onClick={this.onTabClick(idx)}
              >
                {pane.title}
                {pane.closeButton && <Icon className="tabCloseStyle" link name='close' onClick={this.onTabClose(idx)} />}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tab;
export { Tab };
