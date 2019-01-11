import React, { Component } from 'react';
import {Input, Dropdown} from 'semantic-ui-react';

import {apiProxy} from '../apiProxy.js';

import './DeviceCard.css';


class DeviceCard extends Component {
  constructor (props) {
    super(props);

    this.state = {
      wating: false,
      testUser: '@@iot@kr01',
      userInfo: null,
      message: null,
      resValueMap: {},
      controlStatus: '',
      deviceStatus: ''
    };
  }

  componentDidMount () {
    const { device } = this.props;

    let resMap = {};
    for(let i = 0; i < device.resources.length; ++i) {
      const item = device.resources[i];
      resMap[i] = item.currentValue;
    }

    this.setState({ resValueMap: resMap, controlStatus: device.controlOption, deviceStatus: device.statusOption });
  }

  componentWillUnmount () {
    //
  }

  onChangeResource = (resIdx, type) => (ev, data) => {
    // console.log(resIdx, type, data);
    const { userID, device } = this.props;

    this.setState({wating: true});

    apiProxy.setResValue(userID, device.did, resIdx, data.value,
      (res) => {
        const resMap = this.state.resValueMap;
        resMap[resIdx] = data.value;

        this.setState({wating: false, resValueMap: resMap});
      },
      (err) => {
        this.setState({wating: false});
    });
  }

  onChangeInput = (resIdx, type) => (ev, data) => {
    // console.log(resIdx, type, data);
    const { userID, device } = this.props;

    const resMap = this.state.resValueMap;
    resMap[resIdx] = data.value;
    this.setState({wating: true, resValueMap: resMap});

    if (!data.value || data.value === '') return;

    apiProxy.setResValue(userID, device.did, resIdx, data.value,
      (res) => {
        this.setState({wating: false});
      },
      (err) => {
        this.setState({wating: false});
    });
  }

  onChangeStatus = (ev, data) => {
    // console.log(ev, data);
    const { userID, device } = this.props;

    this.setState({ wating: true, deviceStatus: data.value });

    apiProxy.setDvcState(userID, device.did, 'device', data.value,
      (res) => {
        this.setState({wating: false});
      },
      (err) => {
        this.setState({wating: false});
    });
  }

  onChangeControl = (ev, data) => {
    // console.log(ev, data);
    const { userID, device } = this.props;

    this.setState({ wating: true, controlStatus: data.value });

    apiProxy.setDvcState(userID, device.did, 'control', data.value,
      (res) => {
        this.setState({wating: false});
      },
      (err) => {
        this.setState({wating: false});
    });
  }

  render () {
    const { device } = this.props;
    const { resValueMap } = this.state;

    let tagList = [];
    const did = device.did;

    for(let i = 0; i < device.resources.length; ++i) {
      // index, currentValue, name, path, type: enum, constant, number, range, boolean, separator
      const item = device.resources[i];
      const curValue = resValueMap[i];

      const itemTitle = item.title ? item.title : item.path;

      if ('separator' === item.type) {
        tagList.push(
          <div key={i} className="ResourceItem">
            <div className="ResourceSeperator">&nbsp;</div>
          </div>
        );
      } else if ('enum' === item.type || 'boolean' === item.type) {
        let valueList = [];
        for(let j = 0; j < item.values.length; ++j) {
          valueList.push({ key:i + '.' + j + '.' + item.values[j], value:item.values[j], text:item.values[j] });
        }

        tagList.push(
          <div key={did + i} className="ResourceItem">
            <div className="ResourceName">{itemTitle}</div>
            <Dropdown selection value={curValue} options={valueList} onChange={this.onChangeResource(i, item.type)} />
          </div>
        );
      } else if ('range' === item.type) {
        tagList.push(
          <div key={did + i} className="ResourceItem">
            <div className="ResourceName">{itemTitle}</div>
            <Input type="number" min={item.values[0]} max={item.values[1]} step="1"
              value={curValue} onChange={this.onChangeInput(i, item.type)} />
          </div>
        );
      } else if ('number' === item.type) {
        tagList.push(
          <div key={did + i} className="ResourceItem">
            <div className="ResourceName">{itemTitle}</div>
            { item.path.indexOf('time') >= 0
              ? <Input type="number" min="0" max="59" step="1" value={curValue} onChange={this.onChangeInput(i, item.type)} />
              : <Input type="number" value={curValue} onChange={this.onChangeInput(i, item.type)} />
            }
          </div>
        );
      } else {
        tagList.push(
          <div key={did + i} className="ResourceItem">
            <div className="ResourceName">{itemTitle}</div>
            <Input disabled value={curValue} />
          </div>
        );
      }
    }

    const dvcStatusList = [
      { key:'ds0000', value:'0000', text:'Normal' },
      { key:'ds1222', value:'1222', text:'No Response' }
      // { key:'ds9990', value:'9990', text:'Long Loading' }
    ];

    const controlActionList = [
      { key:'ca0000', value:'0000', text:'Control may work.' },
      { key:'ca2101', value:'2101', text:'This model is not supported.' },
      // { key:'ca2000', value:'2000', text:'This function is not supported.' },
      { key:'ca1308', value:'1308', text:'Not authorized to control the device.' },
      { key:'ca9997', value:'9997', text:'A temporary issue occurred...' }
      // { key:'ca9998', value:'9998', text:'Cannot control the device.' },
      // { key:'ca9999', value:'9999', text:'Check the device connection.' }
    ];

    return (
      <div className="DvcCardMain">
        <div className="DvcHeader">
          <div className="HeaderItem">
            <div className="HeaderTitle">{device.name + ' [' + device.type + ']'}</div>
          </div>
        </div>
        <div className="ControlDiv">
          <Dropdown selection value={this.state.deviceStatus} options={dvcStatusList} onChange={this.onChangeStatus} />
          <Dropdown selection value={this.state.controlStatus} options={controlActionList} onChange={this.onChangeControl} />
        </div>
        <div className="ResourceList">{ tagList.map((tag) => tag) }</div>
      </div>
    );
  }
}

export default DeviceCard;
