import React, { Component } from 'react';
// import css from './FileListView.less';
import FileListItem from './FileListItem.js';
// https://react.semantic-ui.com/collections/table/
import { Container, Icon, Table } from 'semantic-ui-react'

import scrollbarSize from 'dom-helpers/util/scrollbarSize';



class FileListView extends Component {
  constructor (props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize);
  }

  componentDidUpdate () {
    //
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = (ev) => {
    console.log('resize', ev);
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
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

  onClickRow = (ev) => {
    console.log('onClickRow', ev);
  }

  render() {
    const margin = 10;
    const { fileList } = this.props;
    const { windowWidth, windowHeight } = this.state;

    return (
      <div style={{ marginLeft:margin, marginRight:margin, marginBottom:margin }}>
        <Table celled singleLine style={{width:(windowWidth - scrollbarSize() - 2 * margin), marginBottom:0}}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="4">File List (Count: {fileList.length})</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell width="5">Name</Table.HeaderCell>
              <Table.HeaderCell width="5">Path</Table.HeaderCell>
              <Table.HeaderCell width="3" textAlign="right">Size</Table.HeaderCell>
              <Table.HeaderCell width="3" textAlign="right">Time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
        <div style={{ width:'100%', height:(windowHeight - 160), overflow:'auto' }} onScroll={this.onScroll}>
          <Table celled singleLine selectable style={{width:'100%', marginTop:0}}>
            <Table.Body>
              {fileList.map((data, idx) => {
                return (
                  <Table.Row key={idx} onClick={this.onClickRow}>
                    <Table.Cell width="5">
                      <Icon name="file outline" />{data.name}
                    </Table.Cell>
                    <Table.Cell width="5">{data.path}</Table.Cell>
                    <Table.Cell width="3" textAlign="right">
                      {data.size}
                    </Table.Cell>
                    <Table.Cell width="3" textAlign="right">
                      {data.mTime}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default FileListView;
export { FileListView };
