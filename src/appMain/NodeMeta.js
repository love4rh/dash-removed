import { isvalid } from '../common/tool.js';

const nodeMeta = {
  'enum':{
    'fetchType':[
      'HTTP',
      'FTP',
      'FILE',
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
    ],
    'codingData':[
      'FILE',
      'DB'
    ]
  },
  'single':{
    'accessKey':{
      'valueKey':'accessKey',
      'title':'Acces Key',
      'vt':'string',
      'desc':'S3 접속용 Access Key 입력'
    },
    'allowDup':{
      'valueKey':'allowDup',
      'title':'Allow Duplication',
      'vt':'boolean',
      'desc':'중복 허용 여부 지정'
    },
    'backup':{
      'valueKey':'backup',
      'title':'Backup',
      'vt':'enabledString',
      'desc':'받은 데이터를 지정한 위치에 백업한 후 실행함'
    },
    'bucketName':{
      'valueKey':'bucketName',
      'title':'Bucket Name',
      'vt':'string',
      'desc':'S3 Bucket Name 입력'
    },
    'caption':{
      'valueKey':'caption',
      'title':'Caption',
      'vt':'label',
      'desc':'화면에 표시할 캡션을 지정해야 함'
    },
    'codingSource':{
      'valueKey':'codingSource',
      'title':'Mapping Data Source',
      'vt':'enum',
      'vl':'codingData',
      'desc':'데이터 맵핑 정보를 가져올 방법 지정'
    },
    'collection':{
      'valueKey':'collection',
      'title':'Collection',
      'vt':'string',
      'desc':'Collection 지정'
    },
    'columnOperator':{
      'valueKey':'columnOperator',
      'title':'Column',
      'vt':'columnOperator',
      'desc':'컬럼 순서, 명칭 변경, 사용여부 지정'
    },
    'compAppend':{
      'valueKey':'compAppend',
      'title':'Append Method',
      'vt':'enum',
      'vl':'appendMethod',
      'desc':'데이터 추가 방법 지정'
    },
    'compDesc':{
      'valueKey':'compDesc',
      'title':'Description',
      'vt':'text',
      'desc':'노드에 대한 설명'
    },
    'compName':{
      'valueKey':'compName',
      'title':'Name',
      'vt':'string',
      'desc':'노드 이름'
    },
    'connectionString':{
      'valueKey':'connectionString',
      'title':'Connection String',
      'vt':'string',
      'desc':'DB 접속을 위한 서버 정보 지정'
    },
    'connectionTimeout':{
      'valueKey':'connectionTimeout',
      'title':'connectionTimeout',
      'vt':'number',
      'desc':'접속 제한 시간(초) 지정'
    },
    'connectionType':{
      'valueKey':'connectionType',
      'title':'Connection Type',
      'vt':'enum',
      'vl':'connectionType',
      'desc':'접속 방식 지정'
    },
    'dataEvent':{
      'valueKey':'dataEvent',
      'title':'Relay Event',
      'vt':'dataEvent',
      'desc':'데이터 연계 이벤트 지정'
    },
    'dataGrpProp':{
      'valueKey':'dataGrpProp',
      'title':'Extract Option',
      'vt':'dataGrpProp',
      'desc':'컬럼별 데이터를 추출하기 위한 옵션 지정'
    },
    'delimiter':{
      'valueKey':'delimiter',
      'title':'Delimiter',
      'vt':'enum',
      'vl':'delimiter',
      'desc':'컬럼을 구분할 구분자 지정'
    },
    'driver':{
      'valueKey':'driver',
      'title':'Driver',
      'vt':'enum',
      'vl':'jdbcDriver',
      'desc':'DB 접속을 위한 JDBC 드라이버 지정'
    },
    'encoding':{
      'valueKey':'encoding',
      'title':'Encoing',
      'vt':'enum',
      'vl':'charEncoding',
      'desc':'문자열 인코딩 방식 지정'
    },
    'endPoint':{
      'valueKey':'endPoint',
      'title':'Endpoint',
      'vt':'string',
      'desc':'S3 접속용 Endpoint 입력'
    },
    'errorIgnored':{
      'valueKey':'errorIgnored',
      'title':'errorIgnored',
      'vt':'string',
      'desc':'무시할 오류 코드 지정'
    },
    'fetchMethod':{
      'valueKey':'fetchMethod',
      'title':'Method',
      'vt':'enum',
      'vl':'fetchType',
      'desc':'데이터를 가져올 방식 지정'
    },
    'filePath':{
      'valueKey':'filePath',
      'title':'File Path',
      'vt':'path',
      'desc':'데이터 파일 경로'
    },
    'fixedColumns':{
      'valueKey':'fixedColumns',
      'title':'Fixed Value Columns',
      'vt':'pair',
      'desc':'필요한 경우, 고정값으로 추가할 컬럼 지정'
    },
    'gzunzip':{
      'valueKey':'gzunzip',
      'title':'Unzip GZ',
      'vt':'boolean',
      'desc':'GZ로 압축된 경우 선택'
    },
    'ignoreError':{
      'valueKey':'ignoreError',
      'title':'ignoreError',
      'vt':'yesno',
      'desc':'오류 무시 여부 지정'
    },
    'loaderPath':{
      'valueKey':'loaderPath',
      'title':'Loader Path',
      'vt':'path',
      'desc':'Loader 설치 경로'
    },
    'nameAtHead':{
      'valueKey':'nameAtHead',
      'title':'Name At First',
      'vt':'boolean',
      'desc':'첫 라인에 컬럼명이 있는지 여부 지정'
    },
    'outputColumn':{
      'valueKey':'outputColumn',
      'title':'Output Column',
      'vt':'string',
      'desc':'변환된 값 저장을 위한 컬럼'
    },
    'parentSource':{
      'valueKey':'parentSource',
      'title':'Parent DataGroup',
      'vt':'string',
      'desc':'상위 데이터그룹 명칭'
    },
    'password':{
      'valueKey':'password',
      'title':'Password',
      'vt':'password',
      'desc':'비밀번호'
    },
    'port':{
      'valueKey':'port',
      'title':'Port',
      'vt':'number',
      'desc':'접속 포트'
    },
    'postBody':{
      'valueKey':'postBody',
      'title':'POST Body',
      'vt':'text',
      'desc':'POST Body 입력'
    },
    'privateKey':{
      'valueKey':'privateKey',
      'title':'Private Key',
      'vt':'path',
      'desc':'SCP  접속을 위한 비말키 파일 지정'
    },
    'query':{
      'valueKey':'query',
      'title':'Query Statement',
      'vt':'sql',
      'desc':'쿼리문'
    },
    'quote':{
      'valueKey':'quote',
      'title':'Quote',
      'vt':'boolean',
      'desc':'따옴표로 묶여 있는지 여부 지정'
    },
    'readTimeout':{
      'valueKey':'readTimeout',
      'title':'readTimeout',
      'vt':'number',
      'desc':'읽기 대기 제한 시간(초) 지정'
    },
    'recordKey':{
      'valueKey':'recordKey',
      'title':'Record Key',
      'vt':'string',
      'desc':'레코드의 키컬럼을 지정'
    },
    'rename':{
      'valueKey':'rename',
      'title':'Column',
      'vt':'columnOperator',
      'desc':'컴럼명칭 변경'
    },
    'requestMethod':{
      'valueKey':'requestMethod',
      'title':'requestMethod',
      'vt':'enum',
      'vl':'httpMethod',
      'desc':'HTTP 접속 방식 지정'
    },
    'rootPath':{
      'valueKey':'rootPath',
      'title':'Root path',
      'vt':'string',
      'desc':'데이터 묶음의 시작을 구분하기 위한 최상의 경로 지정'
    },
    'secretKey':{
      'valueKey':'secretKey',
      'title':'Secret Key',
      'vt':'string',
      'desc':'S3 접속용 Secret Key 입력'
    },
    'server':{
      'valueKey':'server',
      'title':'Server',
      'vt':'string',
      'desc':'접속 대상 서버 IP 혹은 도메인'
    },
    'sourceColumn':{
      'valueKey':'sourceColumn',
      'title':'Source Column',
      'vt':'column',
      'desc':'변환 대상값 제공 컬럼'
    },
    'structureType':{
      'valueKey':'structureType',
      'title':'Data Structure',
      'vt':'enum',
      'vl':'structureType',
      'desc':'데이터 구조'
    },
    'targetTable':{
      'valueKey':'targetTable',
      'title':'Target Table',
      'vt':'string',
      'desc':'저장 대상 테이블명 지정'
    },
    'tnsName':{
      'valueKey':'tnsName',
      'title':'TNS Name',
      'vt':'string',
      'desc':'오라클 접속용 TNS Name 지정'
    },
    'unzip':{
      'valueKey':'unzip',
      'title':'Unzip ZIP',
      'vt':'enabledString',
      'desc':'ZIP으로 압축된 경우 선택하고 추출할 파일명 입력. 파일명이 입력되지 않으면 첫 번째 파일을 사용함'
    },
    'user':{
      'valueKey':'user',
      'title':'User',
      'vt':'string',
      'desc':'사용자 계정'
    },
    'rootWrap':{
      'valueKey':'rootWrap',
      'title':'Virtual Root',
      'vt':'enabledString',
      'desc':'가상의 Root 태그를 추가할 지 여부 지정.'
    }
  },
  'group':{
    'httpParam':[
      {
        'compKey':'server',
        'mandatory':true
      },
      {
        'compKey':'requestMethod',
        'mandatory':true,
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
        'compKey':'postBody'
      },
      {
        'compKey':'errorIgnored'
      }
    ],
    'ftpParam':[
      {
        'compKey':'server'
      },
      {
        'compKey':'port',
        'default':'21'
      },
      {
        'compKey':'user'
      },
      {
        'compKey':'password'
      },
      {
        'compKey':'filePath'
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
        'compKey':'gzunzip'
      },
      {
        'compKey':'unzip'
      },
      {
        'compKey':'rootWrap'
      },
      {
        'compKey':'backup'
      }
    ],
    'recordKeyOption':[
      {
        'compKey':'recordKey'
      },
      {
        'compKey':'allowDup'
      }
    ]
  },
  'node':{
    'All':[
      {
        'valueKey':'name',
        'propKey':'compName'
      },
      {
        'valueKey':'desc',
        'propKey':'compDesc'
      }
    ],
    'com.lge.crawlego.project.AppendDataInfo':[
      {
        'valueKey':'ca',
        'propKey':'compAppend'
      }
    ],
    'com.lge.crawlego.project.CodeingDataInfo':[
      {
        'valueKey':'sc',
        'propKey':'sourceColumn'
      },
      {
        'valueKey':'oc',
        'propKey':'outputColumn'
      },
      {
        'valueKey':'cs',
        'propKey':'codingSource'
      },
      {
        'valueKey':'db',
        'propKey':'dbWithSQL',
        'enableKey':'cs',
        'enableValue':'DB'
      },
      {
        'valueKey':'local',
        'propKey':'filePath',
        'enableKey':'cs',
        'enableValue':'FILE'
      }
    ],
    'com.lge.crawlego.project.ColumnFilterInfo':[
      {
        'valueKey':'co',
        'propKey':'columnOperator',
        'parameter':{
          'type':'full'
        }
      }
    ],
    'com.lge.crawlego.project.ColumnRenameInfo':[
      {
        'valueKey':'rn',
        'propKey':'rename',
        'parameter':{
          'type':'rename'
        }
      }
    ],
    'com.lge.crawlego.project.DataFetchMethod':[
      {
        'valueKey':'fm',
        'propKey':'fetchMethod'
      },
      {
        'valueKey':'hp',
        'propKey':'httpParam',
        'enableKey':'fm',
        'enableValue':'HTTP'
      },
      {
        'valueKey':'ftp',
        'propKey':'ftpParam',
        'enableKey':'fm',
        'enableValue':'FTP'
      },
      {
        'valueKey':'local',
        'propKey':'filePath',
        'enableKey':'fm',
        'enableValue':'FILE'
      },
      {
        'valueKey':'db',
        'propKey':'dbWithSQL',
        'enableKey':'fm',
        'enableValue':'DB'
      },
      {
        'valueKey':'scp',
        'propKey':'scpParam',
        'enableKey':'fm',
        'enableValue':'SCP'
      },
      {
        'valueKey':'dtype',
        'propKey':'structureType'
      },
      {
        'valueKey':'tp',
        'propKey':'textParse',
        'enableKey':'dtype',
        'enableValue':'PLAIN'
      },
      {
        'valueKey':'ie',
        'propKey':'ignoreError'
      },
      {
        'valueKey':'caption',
        'propKey':'caption',
        'parameter':{
          'title':'Transform',
          'desc':'데이터 변환이 필요한 경우 해당 옵션을 지정합니다.'
        }
      },
      {
        'valueKey':'transform',
        'propKey':'transform',
        'enableKey':'any',
        'enableValue':'any'
      }
    ],
    'com.lge.crawlego.project.DataGroup':[
      {
        'valueKey':'rootPath',
        'propKey':'rootPath'
      },
      {
        'valueKey':'parent',
        'propKey':'parentSource'
      },
      {
        'valueKey':'recKey',
        'propKey':'recordKeyOption',
        'enableKey':'any',
        'enableValue':'any'
      },
      {
        'valueKey':'propValues',
        'propKey':'dataGrpProp'
      },
      {
        'valueKey':'fixCols',
        'propKey':'fixedColumns'
      },
      {
        'valueKey':'event',
        'propKey':'dataEvent'
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

  // 노드 속성 중 지정된 ID(propId)에 해당하는 속성의 메타 정보 반환
  getPropMetaList: (propId) => {
    const pl = [];

    if( isvalid(nodeMeta.single[propId]) ) { // Single Property인지 체크
      pl.push(nodeMeta.single[propId]);
    } else if( isvalid(nodeMeta.group[propId]) ) { // Group Property인지 체크
      const gl = nodeMeta.group[propId];
      for(let i = 0; i < gl.length; ++i) {
        pl.push(nodeMeta.single[gl[i].compKey]);
      }
    }

    return pl;
  },

  // 노드별 지정되어야 하는 속성 정의 목록 반환
  getNodeProperty: (nid) => {
    return isvalid(nodeMeta.node[nid])
      ? [ ...nodeMeta.node['All'], ...nodeMeta.node[nid] ]
      : [ ...nodeMeta.node['All'] ]
    ;
  }
};

export default nm;
