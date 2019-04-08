import axios from 'axios';


const appMeta = {
  galleryList: ['input', 'processing', 'chart', 'output'],
  gallery:{
    chart:[{
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
    }, {
      'id':'502',
      'name':'LiveWatch',
      'category':'chart',
      'type':'com.lge.prometheus.extension.LiveWatchNodeInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'LiveWatch Graph'
    }],
    'input':[{
      'id':'101',
      'name':'DataFetch',
      'category':'input',
      'type':'com.lge.crawlego.project.DataFetchMethod',
      'favorite':true,
      'hasData':true,
      'inputType':'none',
      'beFrom':'na',
      'beTo':'na',
      'description':'DataFetch'
    }, {
      'id':'201',
      'name':'DataGroup',
      'category':'input',
      'type':'com.lge.crawlego.project.DataGroup',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'101',
      'beTo':'na',
      'description':'DataGroup'
    }, {
      'id':'211',
      'name':'DBInput',
      'category':'input',
      'type':'com.lge.crawlego.project.DBInputInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'none',
      'beFrom':'na',
      'beTo':'na',
      'description':'DBInput'
    }, {
      'id':'212',
      'name':'FileInput',
      'category':'input',
      'type':'com.lge.crawlego.project.FileInputInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'none',
      'beFrom':'na',
      'beTo':'na',
      'description':'FileInput'
    }, {
      'id':'213',
      'name':'DataOnIn',
      'category':'input',
      'type':'com.lge.crawlego.project.DataOnInputInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'none',
      'beFrom':'na',
      'beTo':'na',
      'description':'DataOnInput'
    }, {
      'id':'214',
      'name':'epgOnLog',
      'category':'input',
      'type':'com.lge.crawlego.project.EpgOnLogInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'none',
      'beFrom':'na',
      'beTo':'read',
      'description':'epgOn log'
    }],
    'output':[{
      'id':'401',
      'name':'DataLoading',
      'category':'output',
      'type':'com.lge.crawlego.project.DataLoadingInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Loading data to DB'
    }, {
      'id':'402',
      'name':'DataOnLoading',
      'category':'output',
      'type':'com.lge.crawlego.project.DataOnLoadingInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Loading data into dataOn'
    }, {
      'id':'403',
      'name':'DataOnInsert',
      'category':'output',
      'type':'com.lge.crawlego.project.DataOnInsertInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Insert data into a insertable DataGroup'
    }, {
      'id':'404',
      'name':'FileOutput',
      'category':'output',
      'type':'com.lge.crawlego.project.FileOutputInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Save data to a text file'
    }, {
      'id':'405',
      'name':'DirectLoading',
      'category':'output',
      'type':'com.lge.crawlego.project.DirectLoadingInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Direct loading data into the table'
    }, {
      'id':'406',
      'name':'FileSepOutput',
      'category':'output',
      'type':'com.lge.crawlego.project.FileSepOutputInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Save data to several files'
    }, {
      'id':'407',
      'name':'S3Output',
      'category':'output',
      'type':'com.lge.crawlego.project.S3OutputInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Upload a delimited text file to S3'
    }],
    'processing':[{
      'id':'301',
      'name':'AppendData',
      'category':'processing',
      'type':'com.lge.crawlego.project.AppendDataInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'multi',
      'beFrom':'all',
      'beTo':'101',
      'description':'Append two or more DataGroup'
    }, {
      'id':'302',
      'name':'CodeConverter',
      'category':'processing',
      'type':'com.lge.crawlego.project.CodingDataInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Convert value to another'
    }, {
      'id':'303',
      'name':'ColumnOperator',
      'category':'processing',
      'type':'com.lge.crawlego.project.ColumnFilterInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Filter and rename column(s)'
    }, {
      'id':'304',
      'name':'RenameColumn',
      'category':'processing',
      'type':'com.lge.crawlego.project.ColumnRenameInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Rename column(s)'
    }, {
      'id':'305',
      'name':'Derived',
      'category':'processing',
      'type':'com.lge.crawlego.project.DerivedProcessInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Generate derived column(s)'
    }, {
      'id':'306',
      'name':'DistinctData',
      'category':'processing',
      'type':'com.lge.crawlego.project.DistinctDataInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Generate DataGroup of distinct value'
    }, {
      'id':'307',
      'name':'GroupCount',
      'category':'processing',
      'type':'com.lge.crawlego.project.GroupingCountInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Attach counting column(s) by grouping'
    }, {
      'id':'308',
      'name':'SelectByGroup',
      'category':'processing',
      'type':'com.lge.crawlego.project.GroupingSelectInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Select record(s) by grouping'
    }, {
      'id':'309',
      'name':'MergeData',
      'category':'processing',
      'type':'com.lge.crawlego.project.MergeDataInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'multi',
      'beFrom':'all',
      'beTo':'101',
      'description':'Merge two or more DataGroups with key column(s)'
    }, {
      'id':'321',
      'name':'MergeInto',
      'category':'processing',
      'type':'com.lge.crawlego.project.MergeIntoInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'multi',
      'beFrom':'all',
      'beTo':'101',
      'description':'Merge into'
    }, {
      'id':'310',
      'name':'SelectData',
      'category':'processing',
      'type':'com.lge.crawlego.project.SelectRowInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Select record(s) with condition'
    }, {
      'id':'311',
      'name':'SeparateValue',
      'category':'processing',
      'type':'com.lge.crawlego.project.SeparatorInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Create a column by separating value with delimiter'
    }, {
      'id':'322',
      'name':'PairedSeparate',
      'category':'processing',
      'type':'com.lge.crawlego.project.PairSeparatorInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Create a column by separating value with delimiter'
    }, {
      'id':'312',
      'name':'SortColumn',
      'category':'processing',
      'type':'com.lge.crawlego.project.SortColumnInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Sort column(s)'
    }, {
      'id':'313',
      'name':'GroupingValue',
      'category':'processing',
      'type':'com.lge.crawlego.project.GroupingValueInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Generate basic statistical column(s)'
    }, {
      'id':'314',
      'name':'ImageCrawler',
      'category':'processing',
      'type':'com.lge.crawlego.project.ImageDownUpInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Generate basic statistical column(s)'
    }, {
      'id':'317',
      'name':'GnSchdFilter',
      'category':'processing',
      'type':'com.lge.crawlego.project.GnSchdFilterInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Generate basic statistical column(s)'
    }, {
      'id':'318',
      'name':'DBTransaction',
      'category':'processing',
      'type':'com.lge.crawlego.project.DBTransactionInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Generate basic statistical column(s)'
    }, {
      'id':'319',
      'name':'DBInputProcess',
      'category':'processing',
      'type':'com.lge.crawlego.project.DBInputProcessInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'multi',
      'beFrom':'all',
      'beTo':'101',
      'description':'Generate basic statistical column(s)'
    }, {
      'id':'320',
      'name':'GroupingCompare',
      'category':'processing',
      'type':'com.lge.crawlego.project.GroupingCompareInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'two',
      'beFrom':'all',
      'beTo':'101',
      'description':'GroupingCompare data to a text file'
    }, {
      'id':'321',
      'name':'GoStop',
      'category':'processing',
      'type':'com.lge.crawlego.project.GoStopInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Decide to go or stop'
    }, {
      'id':'322',
      'name':'Replace',
      'category':'processing',
      'type':'com.lge.crawlego.project.ReplaceValueInfo',
      'favorite':true,
      'hasData':true,
      'inputType':'single',
      'beFrom':'all',
      'beTo':'101',
      'description':'Decide to go or stop'
    }]
  }
};


export const appOpt = {
  favoriteList: null,
  nodeTemplateMap: null,

  hostAddrs: () => {
    // return 'http://hdtest.tool4.us';
    // return 'http://10.186.119.121:7777';
    return 'http://localhost:7777';
  },

  initialize: (cb) => {
    axios.get(appOpt.hostAddrs() + '/appOption')
    .then(res => {
      console.log(JSON.stringify(res));
      if (cb) cb(true);
    })
    .catch(res => {
      if (cb) cb(false);
    });
  },

  initializeNodeTemplate: () => {
    // set up favorite node list
    const fl = [];
    for(let i = 0; i < appMeta.galleryList.length; ++i) {
      const nl = appMeta.gallery[appMeta.galleryList[i]];
      for(let j = 0; j < nl.length; ++j) {
        if( nl[j].favorite ) {
          fl.push(nl[j]);
        }
      }
    }
    appOpt.favoriteList = fl;

    // set up node template map
    const nodeMap = {};
    for(let i = 0; i < appMeta.galleryList.length; ++i) {
      const nl = appMeta.gallery[appMeta.galleryList[i]];
      for(let j = 0; j < nl.length; ++j) {
        nodeMap[nl[j].id] = nl[j];
      }
    }
    appOpt.nodeTemplateMap = nodeMap;
  },

  isReady: () => {
    return true;
  },

  getGalleryList: () => {
    return appMeta.galleryList;
  },

  getGallery: (type) => {
    if( 'favorite' === type ) {
      if( appOpt.favoriteList === null ) {
        appOpt.initializeNodeTemplate();
      }
      return appOpt.favoriteList;
    }

    return appMeta.gallery[type];
  },

  /*
  return node template matched to typeId.
  {
    'id':'322',
    'name':'Replace',
    'category':'processing',
    'type':'com.lge.crawlego.project.ReplaceValueInfo',
    'favorite':true,
    'hasData':true,
    'inputType':'single',
    'beFrom':'all',
    'beTo':'101',
    'description':'Decide to go or stop'
  }
  */
  getNodeTemplate: (typeId) => {
    if( appOpt.nodeTemplateMap === null ) {
      appOpt.initializeNodeTemplate();
    }

    return appOpt.nodeTemplateMap[typeId];
  }
};

export default appOpt;
