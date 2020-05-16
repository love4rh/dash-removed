import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

import { JSONTool } from './JSONTool.js';
import { JNodeTree } from './JNodeTree.js';

import { TextArea, Intent, Spinner, Overlay } from '@blueprintjs/core';

import DataGrid from '../grid/DataGrid.js';

import { LayoutDivider, DividerDirection} from '../editor/LayoutDivider.js';

import './css/JSONReport.css';


const _headerHeight = 60;


class JSONAreaPanel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      jsonText: this.props.text,
    };
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  handleJsonChange = (ev) => {
    if( this.props.onChange ) {
      this.props.onChange(ev.target.value);
    }
    this.setState({ jsonText: ev.target.value });
  }

  render () {
    return (
      <TextArea className="jrJsonArea"
        style={{ 'height':'100%' }}
        large={true}
        intent={Intent.PRIMARY}
        value={this.state.jsonText}
        onChange={this.handleJsonChange}
      />
    );
  }
}



class JSONResultPanel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      leftWidth: 300,
      dataSource: props.rootNode
    };
  }

  componentDidMount () {
    // console.log('CHECKTTT', ReactDOM.findDOMNode(this).parentNode);
  }

  componentWillUnmount () {
    //
  }

  handleLayoutChange = (f, t) => {
    let { leftWidth } = this.state;
    leftWidth += t - f;
    this.setState({ leftWidth: leftWidth });
  }

  handleClickNode = (node) => {
    let dataNode = node;

    if( node.isInParentData() ) {
      dataNode = node.getParent();
    }

    this.setState({ dataSource: dataNode });
  }

  render () {
    const { rootNode } = this.props;
    const { leftWidth, dataSource } = this.state;
    const dividerSize = 5;
    const windowHeight = window.innerHeight - _headerHeight - 14,
      windowWidth = window.innerWidth - leftWidth - dividerSize
    ;

    return (
      <div className="jrReportPane">
        <div className="jrLeftPane" style={{ height:`${windowHeight}px`, flexBasis:`${leftWidth}px` }}>
          <JNodeTree rootNode={rootNode} onClickNode={this.handleClickNode} />
        </div>
        <div style={{ flexBasis:`${dividerSize}px` }}>
          <LayoutDivider direction={DividerDirection.vertical}
            size={dividerSize}
            onLayoutChange={this.handleLayoutChange}
          />
        </div>
        <div className="jrRightPane">
          {dataSource.hasData() &&
            <DataGrid
              key={`grid-${dataSource.getPath()}`}
              height={windowHeight}
              width={windowWidth}
              dataSource={dataSource}
              showRowNumber={true}
              showColumnNumber={true}
            />
          }
          { !dataSource.hasData() && <p>No Data</p> }
        </div>
      </div>
    );
  }
}



class JSONReport extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeMenu: 'text',
      processing: false,
      jsonText: '',
      rootNode: null,
    };
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  handleTabChange = (tabSel) => {
    this.setState({ tabID: tabSel });
  }

  handleJsonChange = (text) => {
    this.setState({ jsonText: text });
  }

  handleKeyUp = (ev) => {
    if( ev.ctrlKey && ev.keyCode === 13 ) {
      this.handleSwitch();
    }
  }

  handleSwitch = () => {
    const cMenu = this.state.activeMenu;

    if( cMenu === 'text' ) {
      this.setState({ processing: true });

      JSONTool.analyze(this.state.jsonText, (res) => {
        if( res.returnCode === 0 ) {
          this.setState({ processing: false, activeMenu: 'decomp', rootNode: res.rootNode });
        } else {
          this.setState({ processing: false });
        }
      });
    } else if( cMenu === 'decomp' ) {
      // console.log('CHECK', 'switch to text', this.state.jsonText);
      this.setState({ activeMenu: 'text' });
    }
  }

  //
  render () {
    const { jsonText, activeMenu, processing, rootNode } = this.state;

    // console.log('CHECK', 'render', activeMenu, jsonText);

    return (
      <div className="bp3-dark jrMain">
        <div className="jrHeader" style={{ height:`${_headerHeight}px`}}>
          <div className="jrTitle">JSON Extractor</div>
          <div className="jrButton" onClick={this.handleSwitch}>
            {activeMenu === 'text' ? 'Tabular' : 'JSON'}
          </div>
        </div>
        <div className="jrContent" onKeyUp={this.handleKeyUp}>
          {activeMenu === 'text' &&
            <JSONAreaPanel text={jsonText} onChange={this.handleJsonChange} />
          }
          {activeMenu === 'decomp' &&
            <JSONResultPanel rootNode={rootNode} />
          }
        </div>
        {processing &&
          <Overlay isOpen={processing}>
            <div style={{ left:'50%', top:'50%' }}>
              <Spinner intent={Intent.PRIMARY} size={Spinner.SIZE_STANDARD} />
            </div>
          </Overlay>
        }
      </div>
    );
  }
}

export default JSONReport;
export { JSONReport };
