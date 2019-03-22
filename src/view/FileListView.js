import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core';

import scrollbarSize from 'dom-helpers/util/scrollbarSize';



class FileListView extends Component {
  static propTypes = {
    compHeight: PropTypes.number.isRequired,
    compWidth: PropTypes.number.isRequired,
    fileList: PropTypes.array.isRequired,
    switchPage: PropTypes.func.isRequired,
  }

  componentDidMount () {
    //
  }

  componentDidUpdate () {
    //
  }

  onScroll = (ev) => {
    /*
    const $this = ev.currentTarget;
    console.log(
      $this.clientHeight,
      $this.clientWidth,
      $this.scrollHeight,
      $this.scrollLeft,
      $this.scrollTop,
      $this.scrollWidth
    ); // */

    // $this.scrollTop += 500;
  }

  onClickRow = (data) => (ev) => {
    this.props.switchPage('grid', { ...data, sampling: true });
  }

  render() {
    const margin = 10;
    const { fileList, compHeight, compWidth } = this.props;

    return (
      <div style={{ marginLeft:margin, marginRight:margin, marginBottom:margin }}>
        <table celled singleLine style={{width:(compWidth - scrollbarSize() - 2 * margin), marginBottom:0}}>
          <theader>
            <tr>
              <th colSpan="4">File List (Count: {fileList.length})</th>
            </tr>
            <tr>
              <th width="5">Name</th>
              <th width="5">Path</th>
              <th width="3" textAlign="right">Size</th>
              <th width="3" textAlign="right">Time</th>
            </tr>
          </theader>
        </table>
        <div style={{ width:'100%', height:(compHeight - 110), overflow:'auto' }} onScroll={this.onScroll}>
          <table celled singleLine selectable style={{width:'100%', marginTop:0}}>
            <tbody>
              {fileList.map((data, idx) => {
                return (
                  <tr key={idx} onClick={this.onClickRow(data)}>
                    <td width="5">
                      <Icon icon="document" iconSize={Icon.SIZE_STANDARD} />{data.name}
                    </td>
                    <td width="5">{data.path}</td>
                    <td width="3" textAlign="right">
                      {data.size}
                    </td>
                    <td width="3" textAlign="right">
                      {data.mTime}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FileListView;
export { FileListView };
