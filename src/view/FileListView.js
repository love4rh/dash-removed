import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Table } from 'semantic-ui-react'

import scrollbarSize from 'dom-helpers/util/scrollbarSize';



class FileListView extends Component {
  static propTypes = {
    compHeight: PropTypes.number.isRequired,
    compWitdh: PropTypes.number.isRequired,
    fileList: PropTypes.array.isRequired,
    switchPage: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props);
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

  onClickRow = (ev) => {
    console.log('onClickRow', ev);
    this.props.switchPage('grid', ev);
  }

  render() {
    const margin = 10;
    const { fileList, compHeight, compWitdh } = this.props;

    return (
      <div style={{ marginLeft:margin, marginRight:margin, marginBottom:margin }}>
        <Table celled singleLine style={{width:(compWitdh - scrollbarSize() - 2 * margin), marginBottom:0}}>
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
        <div style={{ width:'100%', height:(compHeight - 110), overflow:'auto' }} onScroll={this.onScroll}>
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
