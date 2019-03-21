import axios from 'axios';


const appMeta = {
  galleryList: ['input', 'processing', 'chart', 'output'],
  gallery: {
    'chart':[
      {
        'id':'501',
        'name':'RunChart',
        'category':'chart',
        'type':'com.lge.prometheus.extension.RunChartNodeInfo',
        'favorite':true,
        'hasData':true,
        'inputType':'single',
        'beFrom':'all',
        'beTo':'101',
        'descripion':''
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
        'descripion':''
      }
    ],
    'input':[
      {
        'id':'101',
        'name':'DataFetch',
        'category':'input',
        'type':'com.lge.crawlego.project.DataFetchMethod',
        'favorite':true,
        'hasData':true,
        'inputType':'none',
        'beFrom':'na',
        'beTo':'na',
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
      }
    ],
    'output':[
      {
        'id':'401',
        'name':'DataLoading',
        'category':'output',
        'type':'com.lge.crawlego.project.DataLoadingInfo',
        'favorite':true,
        'hasData':true,
        'inputType':'single',
        'beFrom':'all',
        'beTo':'101',
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
      }
    ],
    'processing':[
      {
        'id':'301',
        'name':'AppendData',
        'category':'processing',
        'type':'com.lge.crawlego.project.AppendDataInfo',
        'favorite':true,
        'hasData':true,
        'inputType':'multi',
        'beFrom':'all',
        'beTo':'101',
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
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
        'descripion':''
      }
    ]
  }
};


export const appOpt = {
  hostAddrs: () => {
    // return 'http://hdtest.tool4.us';
    return 'http://10.186.119.121:7777';
  },

  initialize: (cb) => {
    axios.get(appOpt.hostAddrs() + '/appOption')
    .then(res => {
      // TODO set up options gotten from the server
      if (cb) cb(true);
    })
    .catch(res => {
      if (cb) cb(false);
    });
  },

  isReady: () => {
    return true;
  },

  getGalleryList: () => {
    return appMeta.galleryList;
  },

  getGallery: (type) => {
    if( 'favorite' === type ) {
        // TODO favorite 목록 정리
        return [];
    }

    return appMeta.gallery[type];
  }
};

export default appOpt;
