import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nvl } from '../common/tool.js';

import './Tab.css';



class Tab extends Component {
  static propTypes ={
    activeTab: PropTypes.number,
    onTabChange: PropTypes.func.isRequired,
    panes: PropTypes.array.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {
      activeTab: nvl(this.props.activeTab, 0),
    };
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  onTabClick = (idx) => () => {
    this.setState({ activeTab: idx });
    this.props.onTabChange(idx);
  }

  render () {
    const { panes } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="dashTabs">
        <ol className="dashTabList">
          {panes.map((pane, idx) => {
            let cssName = 'dashTabListItem';

            if( activeTab === idx ) {
              cssName += ' dashTabListActive'
            }

            return (
              <li key={`dashtab-${idx}`}
                className={cssName}
                onClick={this.onTabClick(idx)}
              >
                {pane}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Tab;
export { Tab };
