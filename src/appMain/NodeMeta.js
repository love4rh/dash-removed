import { isvalid } from '../common/tool.js';

const nodeMeta = {
  'enum':{
    'fetchType':[
      'HTTP',
      'FTP',
      'LOCAL',
      'DB',
      'SCP'
    ],
    'appendMethod':[
      'first',
      'intersect',
      'union'
    ],
    'httpMethod':[
      'GET',
      'POST'
    ],
    'charEncoding':[
      'UTF-8',
      'UTF-16',
      'MS949'
    ],
    'yesNo':[
      'Yes',
      'No'
    ],
    'trueFalse':[
      'true',
      'false'
    ],
    'falseTrue':[
      'false',
      'true'
    ],
    'valueType':[
      'Text',
      'Integer',
      'Real',
      'DateTime'
    ],
    'delimiter':[
      '(Tab)',
      '(Space)',
      'Pipe(|)',
      'Comma(,)',
      'Colon(:)',
      'Semi-Colon(;)',
      'Vertical Tab(0x08)',
      'Feed Forward (0x0C)'
    ],
    'jdbcDriver':[
      'com.mysql.jdbc.Driver',
      'oracle.jdbc.driver.OracleDriver'
    ],
    'cbatisColType':[
      'column',
      'constant',
      'macro'
    ],
    'sqlLoaderType':[
      'column',
      'constant',
      'macro',
      'function',
      'sequence',
      'rownum'
    ],
    'directLoadType':[
      'column',
      'constant',
      'macro',
      'function',
      'skip'
    ],
    'oracleFnList':[
      'SYSDATE'
    ],
    'connectionType':[
      'Local',
      'SCP'
    ],
    'structureType':[
      'PLAIN',
      'JSON',
      'XML'
    ]
  },
  'single':{
    'compName':{
      'title':'Name',
      'vt':'string',
      'desc':'노드 이름'
    },
    'compDesc':{
      'title':'Description',
      'vt':'text',
      'desc':'노드에 대한 설명'
    },
    'compAppend':{
      'title':'Append Method',
      'vt':'enum',
      'vl':'appendMethod',
      'desc':'데이터 추가 방법 지정'
    },
    'fetchMethod':{
      'title':'Method',
      'vt':'enum',
      'vl':'fetchType',
      'desc':'데이터를 가져올 방식 지정'
    },
    'connectionTimeout':{
      'title':'connectionTimeout',
      'vt':'number',
      'desc':'접속 제한 시간(초) 지정'
    },
    'readTimeout':{
      'title':'readTimeout',
      'vt':'number',
      'desc':'읽기 대기 제한 시간(초) 지정'
    },
    'requestMethod':{
      'title':'requestMethod',
      'vt':'enum',
      'vl':'httpMethod',
      'desc':'HTTP 접속 방식 지정'
    },
    'ignoreError':{
      'title':'ignoreError',
      'vt':'yesno',
      'desc':'오류 무시 여부 지정'
    },
    'server':{
      'title':'Server',
      'vt':'string',
      'desc':'접속 대상 서버 IP 혹은 도메인'
    },
    'user':{
      'title':'User',
      'vt':'string',
      'desc':'사용자 계정'
    },
    'password':{
      'title':'Password',
      'vt':'encrypted',
      'desc':'비밀번호'
    },
    'port':{
      'title':'Port',
      'vt':'number',
      'desc':'접속 포트'
    },
    'encoding':{
      'title':'Encoing',
      'vt':'enum',
      'vl':'charEncoding',
      'desc':'문자열 인코징 방식 지정'
    },
    'delimiter':{
      'title':'Delimiter',
      'vt':'enum',
      'vl':'delimiter',
      'desc':'컬럼을 구분할 구분자 지정'
    },
    'nameAtHead':{
      'title':'Name At First',
      'vt':'boolean',
      'desc':'첫 라인에 컬럼명이 있는지 여부 지정'
    },
    'quote':{
      'title':'Quote',
      'vt':'boolean',
      'desc':'따옴표로 묶여 있는지 여부 지정'
    },
    'driver':{
      'title':'Driver',
      'vt':'enum',
      'vl':'jdbcDriver',
      'desc':'DB 접속을 위한 JDBC 드라이버 지정'
    },
    'connectionString':{
      'title':'Connection String',
      'vt':'string',
      'desc':'DB 접속을 위한 서버 정보 지정'
    },
    'query':{
      'title':'Query Statement',
      'vt':'sql',
      'desc':'쿼리문'
    },
    'tnsName':{
      'title':'TNS Name',
      'vt':'string',
      'desc':'오라클 접속용 TNS Name 지정'
    },
    'loaderPath':{
      'title':'Loader Path',
      'vt':'path',
      'desc':'Loader 설치 경로'
    },
    'targetTable':{
      'title':'Target Table',
      'vt':'string',
      'desc':'저장 대상 테이블명 지정'
    },
    'collection':{
      'title':'Collection',
      'vt':'string',
      'desc':'Collection 지정'
    },
    'connectionType':{
      'title':'Connection Type',
      'vt':'enum',
      'vl':'connectionType',
      'desc':'접속 방식 지정'
    },
    'privateKey':{
      'title':'Private Key',
      'vt':'path',
      'desc':'SCP  접속을 위한 비말키 파일 지정'
    },
    'accessKey':{
      'title':'Acces Key',
      'vt':'string',
      'desc':'S3 접속용 Access Key 입력'
    },
    'secretKey':{
      'title':'Secret Key',
      'vt':'string',
      'desc':'S3 접속용 Secret Key 입력'
    },
    'endPoint':{
      'title':'Endpoint',
      'vt':'string',
      'desc':'S3 접속용 Endpoint 입력'
    },
    'bucketName':{
      'title':'Bucket Name',
      'vt':'string',
      'desc':'S3 Bucket Name 입력'
    },
    'filePath':{
      'title':'File Path',
      'vt':'path',
      'desc':'데이터 파일 경로'
    },
    'structureType':{
      'title':'Data Structure',
      'vt':'enum',
      'vl':'structureType',
      'desc':'데이터 구조'
    },
    'gzUnzip':{
      'title':'Unzip GZ',
      'vt':'boolean',
      'desc':'GZ로 압축된 경우 선택'
    },
    'unzipFile':{
      'title':'Unzip ZIP',
      'vt':'enabledString',
      'desc':'ZIP으로 압축된 경우 선택하고 추출할 파일명 입력. 파일명이 입력되지 않으면 첫 번째 파일을 사용함'
    },
    'virtualRootTag':{
      'title':'Virtual Root',
      'vt':'enabledString',
      'desc':'가상의 Root 태그를 추가할 지 여부 지정.'
    },
    'backupAndGo':{
      'title':'Backup',
      'vt':'enabledString',
      'desc':'받은 데이터를 지정한 위치에 백업한 후 실행함'
    }
  },
  'group':{
    'httpParam':[
      {
        'compKey':'server',
        'mandatory':'true'
      },
      {
        'compKey':'requestMethod',
        'mandatory':'true',
        'default':'GET'
      },
      {
        'compKey':'connectionTimeout',
        'default':'60'
      },
      {
        'compKey':'readTimeout',
        'default':'60'
      },
      {
        'compKey':'ignoreError',
        'default':'false'
      }
    ],
    'ftpParam':[
      {
        'compKey':'server'
      },
      {
        'compKey':'user'
      },
      {
        'compKey':'password'
      },
      {
        'compKey':'port',
        'default':'21'
      }
    ],
    'scpParam':[
      {
        'compKey':'server'
      },
      {
        'compKey':'user'
      },
      {
        'compKey':'port',
        'default':'22'
      },
      {
        'compKey':'privateKey'
      }
    ],
    'textParse':[
      {
        'compKey':'delimiter'
      },
      {
        'compKey':'encoding',
        'default':'UTF-8'
      },
      {
        'compKey':'nameAtHead'
      },
      {
        'compKey':'quote'
      }
    ],
    'dbWithSQL':[
      {
        'compKey':'driver'
      },
      {
        'compKey':'connectionString'
      },
      {
        'compKey':'user'
      },
      {
        'compKey':'password'
      },
      {
        'compKey':'query'
      }
    ],
    'dbConn':[
      {
        'compKey':'driver'
      },
      {
        'compKey':'connectionString'
      },
      {
        'compKey':'user'
      },
      {
        'compKey':'password'
      }
    ],
    'sqlLoader':[
      {
        'compKey':'tnsName'
      },
      {
        'compKey':'loaderPath'
      },
      {
        'compKey':'targetTable'
      }
    ],
    'mysqlLoader':[
      {
        'compKey':'targetTable'
      }
    ],
    'dataOnConn':[
      {
        'compKey':'server'
      },
      {
        'compKey':'port'
      },
      {
        'compKey':'user'
      },
      {
        'compKey':'password'
      },
      {
        'compKey':'collection'
      }
    ],
    'transfer':[
      {
        'compKey':'connectionType'
      },
      {
        'compKey':'server'
      },
      {
        'compKey':'user'
      },
      {
        'compKey':'port'
      },
      {
        'compKey':'privateKey'
      }
    ],
    'S3Conn':[
      {
        'compKey':'accessKey'
      },
      {
        'compKey':'secretKey'
      },
      {
        'compKey':'endPoint'
      },
      {
        'compKey':'bucketName'
      }
    ],
    'transform':[
      {
        'compKey':'gzUnzip'
      },
      {
        'compKey':'unzipFile'
      },
      {
        'compKey':'virtualRootTag'
      },
      {
        'compKey':'backupAndGo'
      }
    ]
  },
  'node':{
    'All':[
      {
        'key':'name',
        'propKey':'compName'
      },
      {
        'key':'desc',
        'propKey':'compDesc'
      }
    ],
    'appendNode':[
      {
        'key':'compAppend',
        'propKey':'compAppend'
      }
    ],
    'fetchMethod':[
      {
        'key':'fm',
        'propKey':'fetchMethod'
      },
      {
        'key':'hp',
        'propKey':'httpParam',
        'enableKey':'fm',
        'enableValue':'HTTP'
      },
      {
        'key':'ftp',
        'propKey':'ftpParam',
        'enableKey':'fm',
        'enableValue':'FTP'
      },
      {
        'key':'local',
        'propKey':'filePath',
        'enableKey':'fm',
        'enableValue':'LOCAL'
      },
      {
        'key':'db',
        'propKey':'dbWithSQL',
        'enableKey':'fm',
        'enableValue':'DB'
      },
      {
        'key':'scp',
        'propKey':'scpParam',
        'enableKey':'fm',
        'enableValue':'SCP'
      },
      {
        'key':'dtype',
        'propKey':'structureType'
      },
      {
        'key':'tp',
        'propKey':'textParse',
        'enableKey':'dtype',
        'enableValue':'PLAIN'
      },
      {
        'key':'ie',
        'propKey':'ignoreError'
      }
    ]
  }
};


/**
 * Node Meta
 */
export const nm = {
  getEnumList: (eid) => {
    return nodeMeta.enum[eid];
  },

  getPropMetaList: (propId) => {
    const pl = [];

    if( isvalid(nodeMeta.single[propId]) ) {
      pl.push(nodeMeta.single[propId]);
    } else if( isvalid(nodeMeta.group[propId]) ) {
      const gl = nodeMeta.group[propId];
      for(let i = 0; i < gl.length; ++i) {
        pl.push(nodeMeta.single[gl[i].compKey]);
      }
    }

    return pl;
  },

  getNodeProperty: (nid) => {
    return isvalid(nodeMeta.node[nid])
      ? [ ...nodeMeta.node['All'], ...nodeMeta.node[nid] ]
      : [ ...nodeMeta.node['All'] ]
    ;
  }
};

export default nm;
