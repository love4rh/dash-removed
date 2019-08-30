import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import logo from '../assets/logo.svg';

import { ProjectEditor } from '../editor/ProjectEditor.js';

import apiProxy from '../common/apiProxy.js';
import { isvalid } from '../common/tool.js';

import { getMockProjectByName } from '../mock/MockProject.js';

import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Spinner,
  Overlay
} from '@blueprintjs/core';

import './MainFrame.css';


@inject('appData')
@observer
class MainFrame extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      addNew: false,

      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  componentDidMount () {
    const { appData } = this.props;

    window.addEventListener('resize', this.onResize);

    this.initialize(() => {
      appData.addNewProject();
    });
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  test = (type) => () => {
    const { appData } = this.props;

    if( 'open1' === type ) {
      this.openProject('', 'scriptSample.xml');
    } else if( 'open2' === type ) {
      this.openProject('', 'SegmentInfo.xml');
    } else if( 'new' === type ) {
      appData.addNewProject();
    }
  }

  initialize = (cb) => {
    if( cb ) cb();

    this.setState({ loading: false });
    /*
    this.setState({ loading: true });

    apiProxy.getInitialSetting(
      (res) => {
        if( res && res.data && isvalid(res.data.gallery) ) {
          console.log(JSON.stringify(res.data.gallery));
          this.setState({ gallery: res.data.gallery });
        }
      }, (err) => {
        console.log('api getInitialSetting error', err);
      }, () => {
        this.setState({ loading: false });

        if( cb ) cb();
      }
    ); // */
  }

  onResize = (ev) => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  openProject = (path, name) => {
    const mockMode = false;
    const { appData } = this.props;

    if( mockMode ) {
      appData.addProject(getMockProjectByName(name), true);
      return;
    }

    this.setState({ loading: true });

    apiProxy.getScript({ path, name },
      (res) => {
        console.log('openProject', res);
        if( res && res.data && isvalid(res.data.project) ) {
          // console.log('openProject', JSON.stringify(res.data.project));
          appData.addProject(res.data.project)
        }
      }, (err) => {
        console.log('api getScript error', err);
      }, () => {
        setTimeout(() => {
          this.setState({ loading: false });
        }, 200);
      }
    );
  }

  render() {
    const { windowHeight, windowWidth } = this.state;

    return (
      <div>
        <Navbar className="bp3-dark" >
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading style={{ paddingTop:'5px' }}><img alt="logo" src={logo} style={{ width:'32px', height:'32px' }} /></NavbarHeading>
            <NavbarHeading>Dash</NavbarHeading>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="document" text="New" onClick={this.test('new')} />
            <Button className={Classes.MINIMAL} icon="folder-open" text="Open1" onClick={this.test('open1')} />
            <Button className={Classes.MINIMAL} icon="folder-open" text="Open2" onClick={this.test('open2')} />
          </NavbarGroup>
        </Navbar>

        {this.state.loading && (
          <Overlay isOpen={this.state.loading}>
            <div className="waitingPopup" style={{ left:`${windowWidth / 2 - 100}px`, top:`${windowHeight / 2 - 100}px` }}><Spinner /></div>
          </Overlay>
        )}

        <ProjectEditor height={windowHeight - 55} width={windowWidth} />
      </div>
    );
  }
}

export default MainFrame;
export { MainFrame };
