import React, { Component } from 'react';
import logo from '../logo.svg';
// import css from './MainFrame.less';

import { ProjectEditor } from '../editor/ProjectEditor.js';

import apiProxy from '../common/apiProxy.js';
import {isvalid} from '../common/tool.js';

import { scriptSample } from '../mock/sampleProject.js';


import {
  Container,
  Icon,
  Image,
  Menu,
  Loader,
  Dimmer,
} from 'semantic-ui-react';


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

    // this.loadScript('/', 'SegmentInfo.xml');

    this.addProject(scriptSample);
    this.setState({ loading: false });

    this.loadScript('/', 'scriptSample.xml');
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  test = (type) => () => {
    if( 'add' === type ) {
      this.loadScript('',
        ['scriptSample.xml', 'SegmentInfo.xml'][Math.floor(Math.random() * 100) % 2]
      );
    }
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
    });

    this.setState({ projectList: newList });

    return true;
  }

  onResize = (ev) => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
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
    const { windowHeight, windowWidth, projectList, addNew } = this.state;

    return (
      <div>
        <Menu fixed='top' inverted>
          <Menu.Item header name='Home' onClick={this.handleMenuClick}>
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            S3 Explorer
          </Menu.Item>
          <Menu.Item name='test1' onClick={this.test('add')}>Test#1</Menu.Item>
        </Menu>

        <Container text style={{ height: '55px' }}>&nbsp;</Container>

        {this.state.loading ? (<Dimmer active inverted><Loader content='Loading' /></Dimmer>) : null}

        <ProjectEditor
          height={windowHeight - 60}
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
