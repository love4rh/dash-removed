import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import logo from '../assets/logo.svg';

import { ProjectEditor } from '../editor/ProjectEditor.js';

import apiProxy from '../common/apiProxy.js';
import {isvalid} from '../common/tool.js';

import { scriptSample } from '../mock/sampleProject.js';

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

      projectList: []
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize);

    this.initialize(() => {
      this.addNewProject();
      // this.loadScript('/', 'SegmentInfo.xml');
      this.addProject(scriptSample);
      // this.loadScript('/', 'scriptSample.xml');
    });
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  test = (type) => () => {
    const { appData } = this.props;

    if( 'open' === type ) {
      this.loadScript('',
        ['scriptSample.xml', 'SegmentInfo.xml'][Math.floor(Math.random() * 100) % 2]
      );
    } else if( 'new' === type ) {
      this.addNewProject();
    } else if( 'add' === type ) {
      appData.increase();
    } else if( 'sub' === type ) {
      appData.decrease();
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

  addNewProject = () => {
    this.addProject({
      'title':'New Project',
      'description':'',
      'author':'',
      'nodes':{},
      'links': []
    });
  }

  // TODO already open check
  addProject = (prj) => {
    let { projectList } = this.state;
    projectList.push(prj);
    this.setState({ projectList: projectList, addNew: true });
    setTimeout(() => {
      this.setState({ addNew: false });
    }, 500);
  }

  closeProject = (idx) => {
    const { projectList } = this.state;

    let newList = [];
    projectList.map((prj, i) => {
      if( i !== idx ) {
        newList.push(prj);
      }
      return prj;
    });

    this.setState({ projectList: newList });

    return true;
  }

  onResize = (ev) => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  loadScript = (path, name) => {
    this.setState({ loading: true });

    apiProxy.getScript({ path, name },
      (res) => {
        if( res && res.data && isvalid(res.data.script) ) {
          this.addProject(res.data.script)
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
    const { appData } = this.props;
    const { windowHeight, windowWidth, projectList, addNew } = this.state;

    return (
      <div>
        <Navbar className="bp3-dark" >
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading style={{ paddingTop:'5px' }}><img alt="logo" src={logo} style={{ width:'32px', height:'32px' }} /></NavbarHeading>
            <NavbarHeading>Dash</NavbarHeading>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="document" text="New" onClick={this.test('new')} />
            <Button className={Classes.MINIMAL} icon="folder-open" text="Open" onClick={this.test('open')} />
            <Button className={Classes.MINIMAL} icon="plus" text="Add" onClick={this.test('add')} />
            <Button className={Classes.MINIMAL} icon="minus" text="Sub" onClick={this.test('sub')} />
            {appData.number}
          </NavbarGroup>
        </Navbar>

        {this.state.loading && (
          <Overlay isOpen={this.state.loading}>
            <div className="waitingPopup" style={{ left:`${windowWidth / 2 - 100}px`, top:`${windowHeight / 2 - 100}px` }}><Spinner /></div>
          </Overlay>
        )}

        <ProjectEditor
          height={windowHeight - 55}
          width={windowWidth}
          projectList={projectList}
          addingNew={addNew}
          onCloseProject={this.closeProject}
        />
      </div>
    );
  }
}

export default MainFrame;
export { MainFrame };
