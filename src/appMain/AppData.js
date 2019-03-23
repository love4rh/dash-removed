import { observable, action } from 'mobx';

import appOpt from '../appMain/appSetting.js';
import { makeid } from '../common/tool.js';


/**
 * AppData
 */
export default class AppData {
  // Project List
  @observable projectList = [];
  @observable activeIndex = -1;

  // 노드 추가/삭제 등 프로젝트에 변화가 있을 때 갱신을 위하여 사용함.
  @observable redrawCount = 0;

  guideNo = 0;

  getProject = (idx) => {
    return this.projectList[idx];
  }

  sizeOfProject = () => {
    return this.projectList.length;
  }

  @action
  addNewProject = () => {
    this.guideNo += 1;
    this.addProject({
      'title':`Project${this.guideNo}`,
      'description':'',
      'author':'',
      'nodes':{},
      'links': []
    });
  }

  @action
  addProject = (project) => {
    const newList = [...this.projectList, project];
    this.projectList = newList;
    this.activeIndex = newList.length - 1;
  }

  // 프로젝트를 닫고 닫힘 여부 반환
  @action
  removeProject = (idx) => {
    this.projectList.splice(idx, 1);

    if( idx <= this.activeIndex ) {
      this.activeIndex -= 1;
      if( this.activeIndex <= -1 && this.sizeOfProject() > 0 ) {
        this.activeIndex = 0;
      }
    }
  }

  getActiveProject = () => {
    return this.activeIndex >= 0 ? this.getProject(this.activeIndex) : null;
  }

  getActiveProjectIndex = () => {
    return this.activeIndex;
  }

  @action
  setActiveProject = (idx) => {
    this.activeIndex = idx;
  }

  /* {
    'id':'501',
    'name':'RunChart',
    'category':'chart',
    'type':'com.lge.prometheus.extension.RunChartNodeInfo',
    'favorite':true,
    'hasData':true,
    'inputType':'single',
    'beFrom':'all',
    'beTo':'101',
    'description':'Draw a RunChart'
  } // */
  @action
  addNode = (nodeMeta, x, y) => {
    const prjData = this.getActiveProject();

    const nid = 'nidd-' + makeid(8);

    prjData.nodes[nid] = {
      id: nid,
      name: nodeMeta.name,
      type: nodeMeta.type,
      x: x - 20,
      y: y - 20
    }

    this.redrawCount = (this.redrawCount + 1) % 9999;
    console.log('redrawCount', this.redrawCount);
  }
}
