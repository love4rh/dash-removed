import { observable, action } from 'mobx';

// import { appOpt } from '../appMain/AppSetting.js';

import { isvalid, makeid2 } from '../common/tool.js';


/**
 * MobX storage: appData
 */
export default class AppData {
  // Project ID List
  @observable pidList = [];

  // id --> project object
  projectMap = {};

  // 현재 사용(편집) 중인 프로젝트 번호
  @observable activeIndex = -1;

  // 현재 선택된 노드 아이디
  @observable activeNode = null;

  // 노드 추가/삭제 등 프로젝트에 변화가 있을 때 갱신을 위하여 사용함.
  @observable redrawCount = 0;

  // 새 프로젝트 추가 시 이름 뒤에 붙일 인덱스
  guideNo = 0;

  // 프로젝트 객체 반환
  getProject = (idx) => {
    return this.getProjectDataByID(this.pidList[idx]);
  }

  sizeOfProject = () => {
    return this.pidList.length;
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
  addProject = (project, cloned) => {
    const pid = makeid2('pid', 16);
    const prjData = cloned ? JSON.parse(JSON.stringify({ ...project, pid })) : { ...project, pid };
    const newList = [...this.pidList, pid];

    this.pidList = newList;
    this.activeIndex = newList.length - 1;
    this.activeNode = null;

    this.projectMap[pid] = prjData;
  }

  // 프로젝트를 닫고 닫힘 여부 반환
  @action
  removeProject = (idx) => {
    const pid = this.pidList[idx];
    const prjData = this.projectMap[pid];

    this.pidList.splice(idx, 1);
    delete this.projectMap[pid];

    if( idx <= this.activeIndex ) {
      this.activeIndex -= 1;
      if( this.activeIndex <= -1 && this.sizeOfProject() > 0 ) {
        this.activeIndex = 0;
      }
    }

    return prjData;
  }

  getActiveProject = () => {
    return this.activeIndex >= 0 ? this.getProject(this.activeIndex) : null;
  }

  getActiveProjectIndex = () => {
    return this.activeIndex;
  }

  getActiveProjectID = () => {
    return this.activeIndex >= 0 ? this.getProject(this.activeIndex).pid : '';
  }

  @action
  setActiveProject = (idx) => {
    this.activeIndex = idx;
    this.activeNode = null;
  }

  getProjectData = (idx) => {
    return this.getProjectDataByID(this.pidList[idx]);
  }

  getProjectDataByID = (pid) => {
    return this.projectMap[pid];
  }

  @action
  refresh = () => {
    this.redrawCount = (this.redrawCount + 1) % 9999;
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
  addNode = (pid, nodeMeta, x, y) => {
    const prjData = this.getProjectDataByID(pid);
    const nid = makeid2('nid', 16);

    // console.log('addNode', pid, nodeMeta, nid);

    prjData.nodes[nid] = {
      id: nid,
      name: nodeMeta.name,
      type: nodeMeta.type,
      x: x - 20,
      y: y - 20,
      script: ''
    }

    this.refresh();
  }

  @action
  connectNodes = (pid, begin, end, type, text) => {
    const prjData = this.getProjectDataByID(pid);
    // const linkId = makeid2('lid', 16);

    prjData.links.push({
      begin, end, type, text
    });

    this.refresh();
  }

  // pid: project id
  // links: delete links map. {1: true, 2: true, ...}
  @action
  deleteLinks = (pid, links) => {
    const prjData = this.getProjectDataByID(pid);

    const newList = [];
    for(let i = 0; i < prjData.links.length; ++i) {
      if( !isvalid(links[i]) ) {
        newList.push(prjData.links[i]);
      }
    }

    prjData.links = newList;
    this.refresh();
  }

  // pid: project id
  // nodes: delete nodes map. {nid1: true, nid2: true, ...}
  @action
  deleteNodes = (pid, nodes) => {
    const prjData = this.getProjectDataByID(pid);

    const newList = [];
    for(let i = 0; i < prjData.links.length; ++i) {
      const lnk = prjData.links[i];

      if( !isvalid(nodes[lnk.begin]) && !isvalid(nodes[lnk.end]) ) {
        newList.push(lnk);
      }
    }

    for(let key in nodes) {
      if( isvalid(prjData.nodes[key]) ) {
        delete prjData.nodes[key];
      }
    }

    prjData.links = newList;
    this.refresh();
  }

  // 현재 선택된 노드
  @action
  displayNode = (pid, nid) => {
    this.activeNode = nid;
    this.refresh();
  }

  getActiveNode = () => {
    const prjData = this.getActiveProject();

    return isvalid(prjData) ? prjData.nodes[this.activeNode] : null;
  }

  @action
  setActiveNodePropList = (propList) => {
    const prjData = this.getActiveProject();
    prjData.nodes[this.activeNode].property = { ...propList };
  }
}
