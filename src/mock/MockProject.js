import { isundef } from '../common/tool.js';


const scriptSample = [{
  "title":"SegmentInfo.xml",
  "description":"project is blah~ blah~",
  "author":"mh9.kim@lge.com",
  "nodes":{
    "nid-NeRvfnX2i0bySAWX":{
      "id":"nid-NeRvfnX2i0bySAWX",
      "name":"SCHEDULE",
      "type":"com.lge.crawlego.project.DataFetchMethod",
      "x":134, "y":233,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CfetchMethod%20name%3D%22SCHEDULE%22%3E%0A%09%3Ctype%3EHTTP%3C%2Ftype%3E%0A%09%3Cpath%3E%3C%21%5BCDATA%5B%24%28segmentURL%29%5D%5D%3E%3C%2Fpath%3E%0A%09%3CparsingType%3EJSON%3C%2FparsingType%3E%0A%09%3CignoreError%3Efalse%3C%2FignoreError%3E%0A%09%3Ctransforms%3E%0A%09%09%3Ctransform%20method%3D%22unzip%22%3Eschedule.json%3C%2Ftransform%3E%0A%09%3C%2Ftransforms%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22134%22%20y%3D%22233%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FfetchMethod%3E%0A"
    },
    "nid-rn1A9Ah6QpdTsWDL":{
      "id":"nid-rn1A9Ah6QpdTsWDL",
      "name":"SCHEDULELIST",
      "type":"com.lge.crawlego.project.DataGroup",
      "x":234, "y":233,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataGroup%20name%3D%22SCHEDULELIST%22%3E%0A%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3Cpath%3E%2FscheduleList%3C%2Fpath%3E%0A%09%3Cparent%20%2F%3E%0A%09%3CpropValues%3E%0A%09%09%3Cvalue%20name%3D%22dbAction%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FdbAction%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22schdId%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FschdId%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22contentId%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FcontentId%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22seqNo%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FseqNo%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22chanCode%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FchanCode%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22strtTime%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FstrtTime%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22strtTimeLong%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FstrtTimeLong%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22endTime%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FendTime%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22endTimeLong%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FendTimeLong%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22schdSummary%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FschdSummary%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22timeType%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FtimeType%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22schdPgmTtl%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FschdPgmTtl%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22schdSubTtl%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FschdSubTtl%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22rebrdcstFlag%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FrebrdcstFlag%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22capFlag%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FcapFlag%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22liveFlag%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FliveFlag%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22dataBrdcstFlag%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FdataBrdcstFlag%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22scExplnBrdcstFlag%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FscExplnBrdcstFlag%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22scQualityGbn%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FscQualityGbn%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22signBrdcstFlag%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FsignBrdcstFlag%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22voiceMultiBrdcstCount%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FvoiceMultiBrdcstCount%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22threeDFlag%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FthreeDFlag%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22schdAdultClassCode%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FschdAdultClassCode%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22schdAgeGrdCode%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FschdAgeGrdCode%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22pgmGrId%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FpgmGrId%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22genreCode%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FgenreCode%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22realEpsdNo%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FrealEpsdNo%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%3C%2FpropValues%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22234%22%20y%3D%22233%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataGroup%3E%0A"
    },
    "nid-O4YtExwt3KHBbpnb":{
      "id":"nid-O4YtExwt3KHBbpnb",
      "name":"PROGRAM",
      "type":"com.lge.crawlego.project.DataFetchMethod",
      "x":131, "y":113,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CfetchMethod%20name%3D%22PROGRAM%22%3E%0A%09%3Ctype%3EHTTP%3C%2Ftype%3E%0A%09%3Cpath%3E%3C%21%5BCDATA%5B%24%28segmentURL%29%5D%5D%3E%3C%2Fpath%3E%0A%09%3CparsingType%3EJSON%3C%2FparsingType%3E%0A%09%3CignoreError%3Efalse%3C%2FignoreError%3E%0A%09%3Ctransforms%3E%0A%09%09%3Ctransform%20method%3D%22unzip%22%3Eprogram.json%3C%2Ftransform%3E%0A%09%3C%2Ftransforms%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22131%22%20y%3D%22113%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FfetchMethod%3E%0A"
    },
    "nid-f3xk9Z1mSeHW7v9A":{
      "id":"nid-f3xk9Z1mSeHW7v9A",
      "name":"PROGRAMLIST",
      "type":"com.lge.crawlego.project.DataGroup",
      "x":231, "y":113,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataGroup%20name%3D%22PROGRAMLIST%22%3E%0A%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3Cpath%3E%2FprogramList%3C%2Fpath%3E%0A%09%3Cparent%20%2F%3E%0A%09%3CpropValues%3E%0A%09%09%3Cvalue%20name%3D%22dbAction%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FdbAction%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22contentId%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FcontentId%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22seqNo%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FseqNo%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22pgmGrId%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FpgmGrId%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22connectorId%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FconnectorId%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22serId%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FserId%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22serNo%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FserNo%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22seasonId%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FseasonId%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22seasonNo%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FseasonNo%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22pgmType%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FpgmType%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22realEpsdNo%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FrealEpsdNo%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22summary%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2Fsummary%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22pgmImgUrlName%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FpgmImgUrlName%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22pgmImgUrl%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FpgmImgUrl%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22orgGenreType%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2ForgGenreType%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22orgGenreCode%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2ForgGenreCode%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22oGenreCode%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FoGenreCode%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22oGenreType%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FoGenreType%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22subGenreType%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FsubGenreType%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22subGenreCode%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FsubGenreCode%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22makeCom%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FmakeCom%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22makeCntry%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FmakeCntry%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22makeYear%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FmakeYear%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22usrPplrSt%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FusrPplrSt%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22pplrSt%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FpplrSt%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22audLang%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FaudLang%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22dataLang%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FdataLang%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22audQlty%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FaudQlty%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22genreImgUrl%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FgenreImgUrl%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22vodFlag%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FvodFlag%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22pgmImgSize%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FpgmImgSize%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22genreImgSize%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FgenreImgSize%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22lgGenreCode2%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FlgGenreCode2%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22lgGenreName2%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FlgGenreName2%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22programLock%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FprogramLock%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22castingFlag%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FcastingFlag%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%3C%2FpropValues%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22231%22%20y%3D%22113%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataGroup%3E%0A"
    },
    "nid-S9J2qE83G72cAXep":{
      "id":"nid-S9J2qE83G72cAXep",
      "name":"CHANNEL",
      "type":"com.lge.crawlego.project.DistinctDataInfo",
      "x":413, "y":234,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22distinct%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BSCHEDULELIST%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BCHANNEL%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22413%22%20y%3D%22234%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3Ccolumns%3E%3C%21%5BCDATA%5BchanCode%5D%5D%3E%3C%2Fcolumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-w7kj4HenRAWoPjXp":{
      "id":"nid-w7kj4HenRAWoPjXp",
      "name":"PGM_SCH_CHECK",
      "type":"com.lge.crawlego.project.MergeDataInfo",
      "x":371, "y":97,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22merge%22%3E%0A%09%3CdataSources%3E%0A%09%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BSCHEDULELIST%5D%5D%3E%3C%2FdataSource%3E%0A%09%09%3CdataSource%20alias%3D%22A2%22%3E%3C%21%5BCDATA%5BPROGRAMLIST%5D%5D%3E%3C%2FdataSource%3E%0A%09%3C%2FdataSources%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BPGM_SCH_CHECK%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22371%22%20y%3D%2297%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CjoinMethod%3Eanti%3C%2FjoinMethod%3E%0A%09%3CaddKeyColumn%3Efalse%3C%2FaddKeyColumn%3E%0A%09%3CequalKeys%3E%0A%09%09%3CequalKey%20source%3D%22PROGRAMLIST%22%3E%3C%21%5BCDATA%5BcontentId%5D%5D%3E%3C%2FequalKey%3E%0A%09%09%3CequalKey%20source%3D%22SCHEDULELIST%22%3E%3C%21%5BCDATA%5BcontentId%5D%5D%3E%3C%2FequalKey%3E%0A%09%3C%2FequalKeys%3E%0A%09%3CselectColumns%3E%0A%09%09%3Ccolumns%20source%3D%22PROGRAMLIST%22%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fcolumns%3E%0A%09%09%3Ccolumns%20source%3D%22SCHEDULELIST%22%3E%3C%21%5BCDATA%5B*%5D%5D%3E%3C%2Fcolumns%3E%0A%09%3C%2FselectColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    }
  },
  "links":[
    {
      "begin":"nid-NeRvfnX2i0bySAWX",
      "end":"nid-rn1A9Ah6QpdTsWDL",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-O4YtExwt3KHBbpnb",
      "end":"nid-f3xk9Z1mSeHW7v9A",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-rn1A9Ah6QpdTsWDL",
      "end":"nid-S9J2qE83G72cAXep",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-rn1A9Ah6QpdTsWDL",
      "end":"nid-w7kj4HenRAWoPjXp",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-f3xk9Z1mSeHW7v9A",
      "end":"nid-w7kj4HenRAWoPjXp",
      "type":"normal",
      "text":""
    }
  ]
}, {
  "title":"scriptSample.xml",
  "description":"project is blah~ blah~",
  "author":"mh9.kim@lge.com",
  "nodes":{
    "nid-WKjbVddJOxhgI0rK":{
      "id":"nid-WKjbVddJOxhgI0rK",
      "name":"GranceNote_DGS",
      "type":"com.lge.crawlego.project.DataFetchMethod",
      "x":398, "y":13,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CfetchMethod%20name%3D%22GranceNote_DGS%22%3E%0A%09%3Ctype%3EHTTP%3C%2Ftype%3E%0A%09%3Cpath%3E%3C%21%5BCDATA%5Bhttps%3A%2F%2Fc9609216.ipg.web.cddbp.net%2Fwebapi%2Fxml%2F1.0%2F%5D%5D%3E%3C%2Fpath%3E%0A%09%3CparsingType%3EXML%3C%2FparsingType%3E%0A%09%3CignoreError%3Efalse%3C%2FignoreError%3E%0A%09%3Cparams%3E%0A%09%09%3Cparam%20name%3D%22backupAndRead%22%3E%3C%21%5BCDATA%5Btrue%5D%5D%3E%3C%2Fparam%3E%0A%09%09%3Cparam%20name%3D%22message%22%3E%3C%21%5BCDATA%5B%3CQUERIES%3E%0A%09%09%09%09%09%09%3CAUTH%3E%0A%09%09%09%09%09%09%09%3CCLIENT%3E7060480-83FA5ADA4D9439C4244D45BEC4FBC48B%3C%2FCLIENT%3E%0A%09%09%09%09%09%09%09%3CUSER%3E266924749544357922-55EE46C3E237FB4FF849158289A3E72A%3C%2FUSER%3E%0A%09%09%09%09%09%09%3C%2FAUTH%3E%0A%09%09%09%09%09%09%3CQUERY%20CMD%3D%22TVGRIDBATCH_UPDATE%22%3E%0A%09%09%09%09%09%09%09%3CSTATE_INFO%3E%0A%09%09%09%09%09%09%09%09%3CSTATE_TYPE%3ETVPROVIDER_REGION-EU%3C%2FSTATE_TYPE%3E%09%09%09%0A%09%09%09%09%09%09%09%09%3CSTAMP%3E0%3C%2FSTAMP%3E%09%09%09%09%0A%09%09%09%09%09%09%09%3C%2FSTATE_INFO%3E%0A%09%09%09%09%09%09%3C%2FQUERY%3E%0A%09%09%09%09%09%3C%2FQUERIES%3E%5D%5D%3E%3C%2Fparam%3E%0A%09%09%3Cparam%20name%3D%22requestMethod%22%3E%3C%21%5BCDATA%5BPOST%5D%5D%3E%3C%2Fparam%3E%0A%09%3C%2Fparams%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22398%22%20y%3D%2213%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FfetchMethod%3E%0A"
    },
    "nid-moEcpIR4Cw61S7NL":{
      "id":"nid-moEcpIR4Cw61S7NL",
      "name":"GranceNote",
      "type":"com.lge.crawlego.project.DataGroup",
      "x":509, "y":14,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataGroup%20name%3D%22GranceNote%22%3E%0A%09%3Cdescription%3E%3C%21%5BCDATA%5BCHILLI_CONTENT_LIST%5D%5D%3E%3C%2Fdescription%3E%0A%09%3Cpath%3E%2FRESPONSES%2FRESPONSE%2FUPDATE_INFO%3C%2Fpath%3E%0A%09%3Cparent%20%2F%3E%0A%09%3CrecordKey%20allowDup%3D%22true%22%3EUPDATE_TYPE%3C%2FrecordKey%3E%0A%09%3CpropValues%3E%0A%09%09%3Cvalue%20name%3D%22UPDATE_TYPE%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FUPDATE_TYPE%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22UPDATE_INST%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FUPDATE_INST%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22STAMP%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FSTAMP%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22URL%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FURL%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%3C%2FpropValues%3E%0A%09%3CdataEvents%3E%0A%09%09%3CdataEvent%20to%3D%22GN_ROOT%22%3E%0A%09%09%09%3Cparam%20name%3D%22%7B1%7D%22%3EURL%3C%2Fparam%3E%0A%09%09%3C%2FdataEvent%3E%0A%09%3C%2FdataEvents%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22509%22%20y%3D%2214%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5BCHILLI_CONTENT_LIST%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataGroup%3E%0A"
    },
    "nid-s2v41uU7dYk9HEQ6":{
      "id":"nid-s2v41uU7dYk9HEQ6",
      "name":"GN_ROOT",
      "type":"com.lge.crawlego.project.DataFetchMethod",
      "x":725, "y":13,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CfetchMethod%20name%3D%22GN_ROOT%22%3E%0A%09%3Ctype%3EHTTP%3C%2Ftype%3E%0A%09%3Cpath%3E%3C%21%5BCDATA%5B%7B1%7D%5D%5D%3E%3C%2Fpath%3E%0A%09%3CparsingType%3EXML%3C%2FparsingType%3E%0A%09%3CignoreError%3Efalse%3C%2FignoreError%3E%0A%09%3Cparams%3E%0A%09%09%3Cparam%20name%3D%22backupAndRead%22%3E%3C%21%5BCDATA%5Btrue%5D%5D%3E%3C%2Fparam%3E%0A%09%09%3Cparam%20name%3D%22requestMethod%22%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fparam%3E%0A%09%3C%2Fparams%3E%0A%09%3Ctransforms%3E%0A%09%09%3Ctransform%20method%3D%22backup%22%3E%24%28GN_DOWN_DIR%29%2FLINEUP%2F%24%28NOW%29%2F%24%28apiCheck%29.xml.gz%3C%2Ftransform%3E%0A%09%09%3Ctransform%20method%3D%22gzunzip%22%3E%3C%2Ftransform%3E%0A%09%3C%2Ftransforms%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22725%22%20y%3D%2213%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FfetchMethod%3E%0A"
    },
    "nid-pJPMUT8dHMpNmed1":{
      "id":"nid-pJPMUT8dHMpNmed1",
      "name":"CHANNEL_LOCATOR",
      "type":"com.lge.crawlego.project.DataGroup",
      "x":951, "y":68,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataGroup%20name%3D%22CHANNEL_LOCATOR%22%3E%0A%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3Cpath%3E%2FTVGRIDBATCH%2FGRIDCHANGE%2FTVPROVIDER%2FTVLINEUP%2FCHANNEL_LOCATOR%3C%2Fpath%3E%0A%09%3Cparent%3ETVPROVIDER%3C%2Fparent%3E%0A%09%3CpropValues%3E%0A%09%09%3Cvalue%20name%3D%22ORD%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%7CORD%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22CHAN_CODE%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%7CTVCHANNEL_GN_ID%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22TYPE%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%7CTYPE%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22CHANNEL_NUM%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FCHANNEL_NUM%3C%2Fpath%3E%0A%09%09%09%3Cconverter%3E%3C%21%5BCDATA%5BIIF%28%20ISNULL%28%7Bthis%7D%29%2C%20%270%27%2C%20%7Bthis%7D%29%5D%5D%3E%3C%2Fconverter%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22PACKAGETYPE%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FPACKAGETYPE%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%3C%2FpropValues%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22951%22%20y%3D%2268%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataGroup%3E%0A"
    },
    "nid-NSn6nsHUmO4rF9rw":{
      "id":"nid-NSn6nsHUmO4rF9rw",
      "name":"TVPROVIDER",
      "type":"com.lge.crawlego.project.DataGroup",
      "x":580, "y":83,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataGroup%20name%3D%22TVPROVIDER%22%3E%0A%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3Cpath%3E%2FTVGRIDBATCH%2FGRIDCHANGE%2FTVPROVIDER%3C%2Fpath%3E%0A%09%3Cparent%20%2F%3E%0A%09%3CrecordKey%20allowDup%3D%22true%22%3EMSO_CODE%3C%2FrecordKey%3E%0A%09%3CpropValues%3E%0A%09%09%3Cvalue%20name%3D%22MSO_CODE%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FGN_ID%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22MSO_NAME%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FNAME%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22PROVIDERTYPE%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FPROVIDERTYPE%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22CNTRY_CODE%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FCOUNTRY%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22REGION_CODE%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2FTVREGION%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%3C%2FpropValues%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22580%22%20y%3D%2283%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataGroup%3E%0A"
    },
    "nid-YRhK2FKZaDyOEjlr":{
      "id":"nid-YRhK2FKZaDyOEjlr",
      "name":"POSTAL_CODE",
      "type":"com.lge.crawlego.project.DataGroup",
      "x":731, "y":93,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataGroup%20name%3D%22POSTAL_CODE%22%3E%0A%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3Cpath%3E%2FTVGRIDBATCH%2FGRIDCHANGE%2FTVPROVIDER%2FPOSTAL_CODE%3C%2Fpath%3E%0A%09%3Cparent%3ETVPROVIDER%3C%2Fparent%3E%0A%09%3CpropValues%3E%0A%09%09%3Cvalue%20name%3D%22postalCode%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%3C%2FpropValues%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22731%22%20y%3D%2293%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataGroup%3E%0A"
    },
    "nid-RmMW5j4UM3QOgmSM":{
      "id":"nid-RmMW5j4UM3QOgmSM",
      "name":"MSO_UNFILTER_DGS",
      "type":"com.lge.crawlego.project.DataFetchMethod",
      "x":449, "y":140,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CfetchMethod%20name%3D%22MSO_UNFILTER_DGS%22%3E%0A%09%3Ctype%3EFILE%3C%2Ftype%3E%0A%09%3Cpath%3E%3C%21%5BCDATA%5B%24%28CRAWLEGO.GN.CONF%29%2Fmso_unfilter_EU.txt%5D%5D%3E%3C%2Fpath%3E%0A%09%3CparsingType%3EPLAIN%3C%2FparsingType%3E%0A%09%3CignoreError%3Efalse%3C%2FignoreError%3E%0A%09%3Cparams%3E%0A%09%09%3Cparam%20name%3D%22delimiter%22%3E%3C%21%5BCDATA%5B%7C%5D%5D%3E%3C%2Fparam%3E%0A%09%09%3Cparam%20name%3D%22encoding%22%3E%3C%21%5BCDATA%5BUTF-8%5D%5D%3E%3C%2Fparam%3E%0A%09%09%3Cparam%20name%3D%22nameAtHead%22%3E%3C%21%5BCDATA%5Btrue%5D%5D%3E%3C%2Fparam%3E%0A%09%09%3Cparam%20name%3D%22quote%22%3E%3C%21%5BCDATA%5Bfalse%5D%5D%3E%3C%2Fparam%3E%0A%09%3C%2Fparams%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22449%22%20y%3D%22140%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FfetchMethod%3E%0A"
    },
    "nid-khQ1GmgQRxENoEaQ":{
      "id":"nid-khQ1GmgQRxENoEaQ",
      "name":"MSO_FILTER",
      "type":"com.lge.crawlego.project.DataGroup",
      "x":449, "y":199,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataGroup%20name%3D%22MSO_FILTER%22%3E%0A%09%3Cdescription%3E%3C%21%5BCDATA%5BMSO%20data%5D%5D%3E%3C%2Fdescription%3E%0A%09%3Cpath%3E%2Fvroot%3C%2Fpath%3E%0A%09%3Cparent%20%2F%3E%0A%09%3CpropValues%3E%0A%09%09%3Cvalue%20name%3D%22cntryCode%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2F1%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22msoName%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2F2%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%09%3Cvalue%20name%3D%22IR_SVC_NAME%22%20type%3D%22string%22%3E%0A%09%09%09%3Cpath%3E%7E%2F3%3C%2Fpath%3E%0A%09%09%3C%2Fvalue%3E%0A%09%3C%2FpropValues%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22449%22%20y%3D%22199%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5BMSO%20data%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataGroup%3E%0A"
    },
    "nid-jCkMxoUQl7ti2IOt":{
      "id":"nid-jCkMxoUQl7ti2IOt",
      "name":"DB_CHAN_BAS",
      "type":"com.lge.crawlego.project.DBInputInfo",
      "x":1095, "y":92,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CinputNode%20name%3D%22DB_CHAN_BAS%22%20type%3D%22DB%22%3E%0A%09%3CignoreNoData%3Etrue%3C%2FignoreNoData%3E%0A%09%3Cquery%3E%3C%21%5BCDATA%5BSELECT%20CHAN_CODE%2C%0A%20%20%20%20%20%20%20CHAN_STD_NAME%20AS%20chanName%2C%20%0A%09%20%20IFNULL%28SRCH_CHAN_ID%2C%200%29%20AS%09srchChanId%2C%0A%09%20%20hd_flag%0A%20FROM%09HESDP_IBS.TB_IC_CHAN_BAS%20%0A%20WHERE%20ic_contents_set_id%20%3D%20%27com.lge.crawler.xml.gn.epg.GnEpgCrawler%27%20and%20use_flag%3D%27Y%27%5D%5D%3E%3C%2Fquery%3E%0A%09%3Ccolumns%3E%0A%09%09%3Ccolumn%20name%3D%22CHAN_CODE%22%20type%3D%22string%22%20%2F%3E%0A%09%09%3Ccolumn%20name%3D%22CHANNAME%22%20type%3D%22string%22%20%2F%3E%0A%09%09%3Ccolumn%20name%3D%22SRCHCHANID%22%20type%3D%22real%22%20%2F%3E%0A%09%09%3Ccolumn%20name%3D%22HD_FLAG%22%20type%3D%22string%22%20%2F%3E%0A%09%3C%2Fcolumns%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%221095%22%20y%3D%2292%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FinputNode%3E%0A"
    },
    "nid-ryt1gP1juBN1itJI":{
      "id":"nid-ryt1gP1juBN1itJI",
      "name":"ALL_LIST_TYPE",
      "type":"com.lge.crawlego.project.DBInputInfo",
      "x":430, "y":346,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CinputNode%20name%3D%22ALL_LIST_TYPE%22%20type%3D%22DB%22%3E%0A%09%3CignoreNoData%3Etrue%3C%2FignoreNoData%3E%0A%09%3Cquery%3E%3C%21%5BCDATA%5BSELECT%20A.CP_REF_ITM_ID%20AS%20DB_REGION_CODE%0A%09%09%09%20%2C%20A.CP_REF_ITM_NAME%20AS%20MSO_LOC_1%0A%09%09%09%20%2C%20A.LG_MAP_ITM_ID%20AS%20cntryCode%0A%20%20%20%20%20%20%20%20%20%20FROM%20HESDP_IBS.TB_IC_REF_LIST%20A%0A%20%20%20%20%20%20%20%20%20WHERE%20A.IC_CONTENTS_SET_ID%20%3D%20%27com.lge.crawler.xml.gn.epg.GnEpgCrawler%27%0A%20%20%20%20%20%20%20%20%20%20%20AND%20A.CP_REF_LIST_ID%20%3D%20%27155%27%5D%5D%3E%3C%2Fquery%3E%0A%09%3Ccolumns%3E%0A%09%09%3Ccolumn%20name%3D%22DB_REGION_CODE%22%20type%3D%22string%22%20%2F%3E%0A%09%09%3Ccolumn%20name%3D%22MSO_LOC_1%22%20type%3D%22string%22%20%2F%3E%0A%09%09%3Ccolumn%20name%3D%22cntryCode%22%20type%3D%22string%22%20%2F%3E%0A%09%3C%2Fcolumns%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22430%22%20y%3D%22346%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FinputNode%3E%0A"
    },
    "nid-o3hyxvhehiBZ2pTK":{
      "id":"nid-o3hyxvhehiBZ2pTK",
      "name":"DB_MSO_PRDT",
      "type":"com.lge.crawlego.project.DBInputInfo",
      "x":806, "y":381,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CinputNode%20name%3D%22DB_MSO_PRDT%22%20type%3D%22DB%22%3E%0A%09%3CignoreNoData%3Etrue%3C%2FignoreNoData%3E%0A%09%3Cquery%3E%3C%21%5BCDATA%5BSELECT%20MSO_PRDT_ITM_CODE%2C%20PRDT_VER%2C%20CHAN_LOGO_VER%0A%20FROM%20HESDP_IBS.TB_IC_MSO_PRDT_ITM_BAS%20%0A%20WHERE%20GEN_USR_NO%20%3D%20555%09%0A%20AND%20IC_CONTENTS_SET_ID%20%3D%20%27%24%28contentsSetId%29%27%5D%5D%3E%3C%2Fquery%3E%0A%09%3Ccolumns%3E%0A%09%09%3Ccolumn%20name%3D%22MSO_PRDT_ITM_CODE%22%20type%3D%22string%22%20%2F%3E%0A%09%09%3Ccolumn%20name%3D%22PRDT_VER%22%20type%3D%22string%22%20%2F%3E%0A%09%09%3Ccolumn%20name%3D%22CHAN_LOGO_VER%22%20type%3D%22string%22%20%2F%3E%0A%09%3C%2Fcolumns%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22806%22%20y%3D%22381%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FinputNode%3E%0A"
    },
    "nid-IQUklbsQpjDVQfpm":{
      "id":"nid-IQUklbsQpjDVQfpm",
      "name":"tb_ic_mso_chan_map",
      "type":"com.lge.crawlego.project.DBInputInfo",
      "x":1104, "y":278,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CinputNode%20name%3D%22tb_ic_mso_chan_map%22%20type%3D%22DB%22%3E%0A%09%3CignoreNoData%3Etrue%3C%2FignoreNoData%3E%0A%09%3Cquery%3E%3C%21%5BCDATA%5Bselect%20mso_prdt_itm_code%2C%20chan_code%2C%20chan_no%2C%20CLLCT_CHAN_NAME%0AFROM%20%20HESDP_IBS.TB_IC_mso_chan_map%0AWHERE%20ic_contents_set_id%20%3D%20%27com.lge.crawler.xml.gn.epg.GnEpgCrawler%27%0AAND%20GEN_USR_NO%20%3D%20555%20and%20use_flag%3D%27Y%27%5D%5D%3E%3C%2Fquery%3E%0A%09%3Ccolumns%3E%0A%09%09%3Ccolumn%20name%3D%22mso_prdt_itm_code%22%20type%3D%22string%22%20%2F%3E%0A%09%09%3Ccolumn%20name%3D%22chan_code%22%20type%3D%22string%22%20%2F%3E%0A%09%09%3Ccolumn%20name%3D%22chan_no%22%20type%3D%22string%22%20%2F%3E%0A%09%09%3Ccolumn%20name%3D%22CLLCT_CHAN_NAME%22%20type%3D%22string%22%20%2F%3E%0A%09%3C%2Fcolumns%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%221104%22%20y%3D%22278%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FinputNode%3E%0A"
    },
    "nid-7JLMq0Wc0GCAQJ7z":{
      "id":"nid-7JLMq0Wc0GCAQJ7z",
      "name":"MERGE_NANE_CHAN_MAP",
      "type":"com.lge.crawlego.project.MergeDataInfo",
      "x":951, "y":131,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22merge%22%3E%0A%09%3CdataSources%3E%0A%09%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BDB_CHAN_BAS%5D%5D%3E%3C%2FdataSource%3E%0A%09%09%3CdataSource%20alias%3D%22A2%22%3E%3C%21%5BCDATA%5BCHANNEL_LOCATOR%5D%5D%3E%3C%2FdataSource%3E%0A%09%3C%2FdataSources%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BMERGE_NANE_CHAN_MAP%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22951%22%20y%3D%22131%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CjoinMethod%3Einner%3C%2FjoinMethod%3E%0A%09%3CaddKeyColumn%3Efalse%3C%2FaddKeyColumn%3E%0A%09%3CequalKeys%3E%0A%09%09%3CequalKey%20source%3D%22CHANNEL_LOCATOR%22%3E%3C%21%5BCDATA%5BCHAN_CODE%5D%5D%3E%3C%2FequalKey%3E%0A%09%09%3CequalKey%20source%3D%22DB_CHAN_BAS%22%3E%3C%21%5BCDATA%5BCHAN_CODE%5D%5D%3E%3C%2FequalKey%3E%0A%09%3C%2FequalKeys%3E%0A%09%3CselectColumns%3E%0A%09%09%3Ccolumns%20source%3D%22CHANNEL_LOCATOR%22%3E%3C%21%5BCDATA%5BMSO_CODE%2CCHAN_CODE%2CTYPE%2CCHANNEL_NUM%2CPACKAGETYPE%5D%5D%3E%3C%2Fcolumns%3E%0A%09%09%3Ccolumns%20source%3D%22DB_CHAN_BAS%22%3E%3C%21%5BCDATA%5BCHANNAME%2CHD_FLAG%5D%5D%3E%3C%2Fcolumns%3E%0A%09%3C%2FselectColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-5U6XOBFYG7ltvIOs":{
      "id":"nid-5U6XOBFYG7ltvIOs",
      "name":"DERIVED_NAME_CHAN_MAP",
      "type":"com.lge.crawlego.project.DerivedProcessInfo",
      "x":951, "y":257,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22derived%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BchanMapFilter%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BDERIVED_NAME_CHAN_MAP%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22951%22%20y%3D%22257%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CaddColumns%3E%0A%09%09%3CderivedColumn%20name%3D%22USE_FLAG%22%3E%3C%21%5BCDATA%5BIIF%28isNull%28%7BuseFlag%7D%29%2C%20%20%27N%27%2C%20%7BuseFlag%7D%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%09%3CderivedColumn%20name%3D%22CHAN_STD_NAME%22%3E%3C%21%5BCDATA%5BIIF%28ISNULL%28%7BCHANNAME%7D%29%20%2C%20%22%22%2C%20%7BCHANNAME%7D%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%09%3CderivedColumn%20name%3D%22RANK%22%3E%3C%21%5BCDATA%5BIIF%28ISNULL%28%7BHD_FLAG%7D%29%2C%201%2C%20IIF%28%7BHD_FLAG%7D%3D%27N%27%2C%201%2C%202%29%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%3C%2FaddColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-9EGxnwwDeVyFqhbO":{
      "id":"nid-9EGxnwwDeVyFqhbO",
      "name":"msoBas",
      "type":"com.lge.crawlego.project.MergeDataInfo",
      "x":487, "y":407,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22merge%22%3E%0A%09%3CdataSources%3E%0A%09%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5Bfilter%5D%5D%3E%3C%2FdataSource%3E%0A%09%09%3CdataSource%20alias%3D%22A2%22%3E%3C%21%5BCDATA%5BALL_LIST_TYPE%5D%5D%3E%3C%2FdataSource%3E%0A%09%3C%2FdataSources%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BmsoBas%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22487%22%20y%3D%22407%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CjoinMethod%3Eouter%3C%2FjoinMethod%3E%0A%09%3CaddKeyColumn%3Efalse%3C%2FaddKeyColumn%3E%0A%09%3CequalKeys%3E%0A%09%09%3CequalKey%20source%3D%22ALL_LIST_TYPE%22%3E%3C%21%5BCDATA%5BDB_REGION_CODE%5D%5D%3E%3C%2FequalKey%3E%0A%09%09%3CequalKey%20source%3D%22filter%22%3E%3C%21%5BCDATA%5BREGION_CODE%5D%5D%3E%3C%2FequalKey%3E%0A%09%3C%2FequalKeys%3E%0A%09%3CselectColumns%3E%0A%09%09%3Ccolumns%20source%3D%22ALL_LIST_TYPE%22%3E%3C%21%5BCDATA%5BMSO_LOC_1%5D%5D%3E%3C%2Fcolumns%3E%0A%09%09%3Ccolumns%20source%3D%22filter%22%3E%3C%21%5BCDATA%5B*%5D%5D%3E%3C%2Fcolumns%3E%0A%09%3C%2FselectColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-XFmqbtjD75kdI0SY":{
      "id":"nid-XFmqbtjD75kdI0SY",
      "name":"DERIVED_SVC_FLAG_MSO_BAS",
      "type":"com.lge.crawlego.project.DerivedProcessInfo",
      "x":488, "y":477,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22derived%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BmsoBas%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BDERIVED_SVC_FLAG_MSO_BAS%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22488%22%20y%3D%22477%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CaddColumns%3E%0A%09%09%3CderivedColumn%20name%3D%22postalCodesLower%22%3E%3C%21%5BCDATA%5Blower%28%7BpostalCodes%7D%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%09%3CderivedColumn%20name%3D%22USE_FLAG%22%3E%3C%21%5BCDATA%5BIIF%28isNull%28%7BuseFlag%7D%29%2C%20%20%27N%27%2C%20%7BuseFlag%7D%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%09%3CderivedColumn%20name%3D%22TOTAL_SVC_FLAG%22%3E%3C%21%5BCDATA%5BIIF%28ISNULL%28%7BREGION_CODE%7D%29%2C%20%27N%27%2C%0AIIF%28%7BREGION_CODE%7D%3D%27112744%27%2C%20%27Y%27%2C%0AIIF%28%7BREGION_CODE%7D%3D%27112724%27%2C%20%27Y%27%2C%0AIIF%28%7BREGION_CODE%7D%3D%27113117%27%2C%20%27Y%27%2C%0AIIF%28%7BREGION_CODE%7D%3D%27113503%27%2C%20%27Y%27%2C%0AIIF%28%7BREGION_CODE%7D%3D%27113629%27%2C%20%27Y%27%2C%20%27N%27%29%29%29%29%29%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%09%3CderivedColumn%20name%3D%22STB_SVC_FLAG%22%3E%3C%21%5BCDATA%5BIIF%28%7BMSO_NAME%7D%3D%27DVB-T%27%2C%20%27N%27%2C%27Y%27%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%3C%2FaddColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-tLhRfggGvjaD2LX5":{
      "id":"nid-tLhRfggGvjaD2LX5",
      "name":"prdtWithVer",
      "type":"com.lge.crawlego.project.MergeDataInfo",
      "x":703, "y":410,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22merge%22%3E%0A%09%3CdataSources%3E%0A%09%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5Bfilter%5D%5D%3E%3C%2FdataSource%3E%0A%09%09%3CdataSource%20alias%3D%22A2%22%3E%3C%21%5BCDATA%5BDB_MSO_PRDT%5D%5D%3E%3C%2FdataSource%3E%0A%09%3C%2FdataSources%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BprdtWithVer%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22703%22%20y%3D%22410%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CjoinMethod%3Eouter%3C%2FjoinMethod%3E%0A%09%3CaddKeyColumn%3Efalse%3C%2FaddKeyColumn%3E%0A%09%3CequalKeys%3E%0A%09%09%3CequalKey%20source%3D%22DB_MSO_PRDT%22%3E%3C%21%5BCDATA%5BMSO_PRDT_ITM_CODE%5D%5D%3E%3C%2FequalKey%3E%0A%09%09%3CequalKey%20source%3D%22filter%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2FequalKey%3E%0A%09%3C%2FequalKeys%3E%0A%09%3CselectColumns%3E%0A%09%09%3Ccolumns%20source%3D%22DB_MSO_PRDT%22%3E%3C%21%5BCDATA%5BPRDT_VER%2CCHAN_LOGO_VER%5D%5D%3E%3C%2Fcolumns%3E%0A%09%09%3Ccolumns%20source%3D%22filter%22%3E%3C%21%5BCDATA%5B*%5D%5D%3E%3C%2Fcolumns%3E%0A%09%3C%2FselectColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-UzbsVyig0dGRUgkH":{
      "id":"nid-UzbsVyig0dGRUgkH",
      "name":"MSO_PRDT_ITM_BAS",
      "type":"com.lge.crawlego.project.DerivedProcessInfo",
      "x":703, "y":481,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22derived%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BprdtWithVer%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BMSO_PRDT_ITM_BAS%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22703%22%20y%3D%22481%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CaddColumns%3E%0A%09%09%3CderivedColumn%20name%3D%22USE_FLAG%22%3E%3C%21%5BCDATA%5BIIF%28isNull%28%7BuseFlag%7D%29%2C%20%20%27N%27%2C%20%7BuseFlag%7D%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%09%3CderivedColumn%20name%3D%22D_PRDT_VER%22%3E%3C%21%5BCDATA%5BIIF%28ISNULL%28%7BPRDT_VER%7D%29%2C%20%20DATETOSTR%28NOW%28%29%2C%20%22yyyyMMdd%22%29%2B%220000%22%2C%20%7BPRDT_VER%7D%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%09%3CderivedColumn%20name%3D%22DVC_SRC_IDX%22%3E%3C%21%5BCDATA%5BIIF%28ISNULL%28%7BPROVIDERTYPE%7D%29%2C%20%270%27%2C%0AIIF%28LOWER%28%7BPROVIDERTYPE%7D%29%3D%27dbc%27%2C%20%272%27%2C%0AIIF%28LOWER%28%7BPROVIDERTYPE%7D%29%3D%27cab%27%2C%20%272%27%2C%0AIIF%28LOWER%28%7BPROVIDERTYPE%7D%29%3D%27sat%27%2C%20%273%27%2C%0AIIF%28LOWER%28%7BPROVIDERTYPE%7D%29%3D%27iptv%27%2C%20%274%27%2C%20%270%27%29%29%29%29%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%3C%2FaddColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-Xe6vfaFO2Kge9dfp":{
      "id":"nid-Xe6vfaFO2Kge9dfp",
      "name":"SELECT2_CHAN_MAP",
      "type":"com.lge.crawlego.project.SelectRowInfo",
      "x":951, "y":383,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22select%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BSD_HD_FILTER%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BSELECT2_CHAN_MAP%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22951%22%20y%3D%22383%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3Ccondition%3E%3C%21%5BCDATA%5B%7BCHANNEL_NUM%7D%21%3D%270%27%20and%20%7BUSE_FLAG%7D%3D%27Y%27%5D%5D%3E%3C%2Fcondition%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-S3rFZJ3vNznQL2gg":{
      "id":"nid-S3rFZJ3vNznQL2gg",
      "name":"filter_prdt_itm",
      "type":"com.lge.crawlego.project.SelectRowInfo",
      "x":580, "y":219,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22select%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BpostalCodes%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5Bfilter_prdt_itm%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22580%22%20y%3D%22219%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3Ccondition%3E%3C%21%5BCDATA%5B%7BCNTRY_CODE%7D%3D%22ESP%22%20or%20%7BCNTRY_CODE%7D%3D%22FRA%22%20or%20%7BCNTRY_CODE%7D%3D%22GBR%22%20or%20%7BCNTRY_CODE%7D%3D%22ITA%22%5D%5D%3E%3C%2Fcondition%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-N5uL93y3lWr0V2lu":{
      "id":"nid-N5uL93y3lWr0V2lu",
      "name":"SD_HD_FILTER",
      "type":"com.lge.crawlego.project.GroupingSelectInfo",
      "x":951, "y":320,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22groupingSelect%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BDERIVED_NAME_CHAN_MAP%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BSD_HD_FILTER%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22951%22%20y%3D%22320%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CgroupingColumns%3E%3C%21%5BCDATA%5BMSO_CODE%2C%20CHANNEL_NUM%5D%5D%3E%3C%2FgroupingColumns%3E%0A%09%3CselectColumn%20type%3D%22min%22%3E%3C%21%5BCDATA%5BRANK%5D%5D%3E%3C%2FselectColumn%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-LqP64YkGt7PNtEzc":{
      "id":"nid-LqP64YkGt7PNtEzc",
      "name":"GroupingCompare_1",
      "type":"com.lge.crawlego.project.GroupingCompareInfo",
      "x":1104, "y":362,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22groupingComare%22%3E%0A%09%3CdataSources%3E%0A%09%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BSELECT2_CHAN_MAP%5D%5D%3E%3C%2FdataSource%3E%0A%09%09%3CdataSource%20alias%3D%22A2%22%3E%3C%21%5BCDATA%5Btb_ic_mso_chan_map%5D%5D%3E%3C%2FdataSource%3E%0A%09%3C%2FdataSources%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BGroupingCompare_1%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%221104%22%20y%3D%22362%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3Cgrouping%3E%0A%09%09%3Ccolumn%20source%3D%22SELECT2_CHAN_MAP%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2Fcolumn%3E%0A%09%09%3Ccolumn%20source%3D%22tb_ic_mso_chan_map%22%3E%3C%21%5BCDATA%5Bmso_prdt_itm_code%5D%5D%3E%3C%2Fcolumn%3E%0A%09%3C%2Fgrouping%3E%0A%09%3Ccompare%3E%0A%09%09%3Ccolumn%20source%3D%22SELECT2_CHAN_MAP%22%3E%3C%21%5BCDATA%5BCHAN_CODE%2CCHANNEL_NUM%2CCHAN_STD_NAME%5D%5D%3E%3C%2Fcolumn%3E%0A%09%09%3Ccolumn%20source%3D%22tb_ic_mso_chan_map%22%3E%3C%21%5BCDATA%5Bchan_code%2Cchan_no%2CCLLCT_CHAN_NAME%5D%5D%3E%3C%2Fcolumn%3E%0A%09%3C%2Fcompare%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-39a7kNasaQhYV8uo":{
      "id":"nid-39a7kNasaQhYV8uo",
      "name":"useFlagY",
      "type":"com.lge.crawlego.project.DerivedProcessInfo",
      "x":449, "y":258,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22derived%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BMSO_FILTER%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BuseFlagY%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22449%22%20y%3D%22258%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CaddColumns%3E%0A%09%09%3CderivedColumn%20name%3D%22useFlag%22%3E%3C%21%5BCDATA%5B%27Y%27%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%09%3CderivedColumn%20name%3D%22msoName2%22%3E%3C%21%5BCDATA%5BLOWER%28%20REPLACEALL%28%7BmsoName%7D%2C%27%20%27%2C%27%27%29%20%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%3C%2FaddColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-9EJNpc5E5K7OrfWP":{
      "id":"nid-9EJNpc5E5K7OrfWP",
      "name":"chanMapFilter",
      "type":"com.lge.crawlego.project.MergeDataInfo",
      "x":951, "y":194,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22merge%22%3E%0A%09%3CdataSources%3E%0A%09%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BMERGE_NANE_CHAN_MAP%5D%5D%3E%3C%2FdataSource%3E%0A%09%09%3CdataSource%20alias%3D%22A2%22%3E%3C%21%5BCDATA%5Bfilter%5D%5D%3E%3C%2FdataSource%3E%0A%09%3C%2FdataSources%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BchanMapFilter%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22951%22%20y%3D%22194%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CjoinMethod%3Einner%3C%2FjoinMethod%3E%0A%09%3CaddKeyColumn%3Efalse%3C%2FaddKeyColumn%3E%0A%09%3CequalKeys%3E%0A%09%09%3CequalKey%20source%3D%22MERGE_NANE_CHAN_MAP%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2FequalKey%3E%0A%09%09%3CequalKey%20source%3D%22filter%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2FequalKey%3E%0A%09%3C%2FequalKeys%3E%0A%09%3CselectColumns%3E%0A%09%09%3Ccolumns%20source%3D%22MERGE_NANE_CHAN_MAP%22%3E%3C%21%5BCDATA%5B*%5D%5D%3E%3C%2Fcolumns%3E%0A%09%09%3Ccolumns%20source%3D%22filter%22%3E%3C%21%5BCDATA%5BuseFlag%5D%5D%3E%3C%2Fcolumns%3E%0A%09%3C%2FselectColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-yxn2golCpGieh624":{
      "id":"nid-yxn2golCpGieh624",
      "name":"filter",
      "type":"com.lge.crawlego.project.MergeDataInfo",
      "x":580, "y":355,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22merge%22%3E%0A%09%3CdataSources%3E%0A%09%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BderiveMsoName%5D%5D%3E%3C%2FdataSource%3E%0A%09%09%3CdataSource%20alias%3D%22A2%22%3E%3C%21%5BCDATA%5BuseFlagY%5D%5D%3E%3C%2FdataSource%3E%0A%09%3C%2FdataSources%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5Bfilter%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22580%22%20y%3D%22355%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CjoinMethod%3Eouter%3C%2FjoinMethod%3E%0A%09%3CaddKeyColumn%3Efalse%3C%2FaddKeyColumn%3E%0A%09%3CequalKeys%3E%0A%09%09%3CequalKey%20source%3D%22deriveMsoName%22%3E%3C%21%5BCDATA%5BmsoNameToCompare%5D%5D%3E%3C%2FequalKey%3E%0A%09%09%3CequalKey%20source%3D%22useFlagY%22%3E%3C%21%5BCDATA%5BmsoName2%5D%5D%3E%3C%2FequalKey%3E%0A%09%3C%2FequalKeys%3E%0A%09%3CselectColumns%3E%0A%09%09%3Ccolumns%20source%3D%22deriveMsoName%22%3E%3C%21%5BCDATA%5B*%5D%5D%3E%3C%2Fcolumns%3E%0A%09%09%3Ccolumns%20source%3D%22useFlagY%22%3E%3C%21%5BCDATA%5BIR_SVC_NAME%2CuseFlag%5D%5D%3E%3C%2Fcolumns%3E%0A%09%3C%2FselectColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-57nIAUvtE7kfXyOI":{
      "id":"nid-57nIAUvtE7kfXyOI",
      "name":"deriveMsoName",
      "type":"com.lge.crawlego.project.DerivedProcessInfo",
      "x":580, "y":287,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22derived%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5Bfilter_prdt_itm%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BderiveMsoName%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22580%22%20y%3D%22287%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CaddColumns%3E%0A%09%09%3CderivedColumn%20name%3D%22msoNameToCompare%22%3E%3C%21%5BCDATA%5BLOWER%28%20REPLACEALL%28%7BMSO_NAME%7D%2C%27%20%27%2C%27%27%29%20%29%5D%5D%3E%3C%2FderivedColumn%3E%0A%09%3C%2FaddColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-1M4SQ09qBrg9IOZL":{
      "id":"nid-1M4SQ09qBrg9IOZL",
      "name":"SeparateZipcode",
      "type":"com.lge.crawlego.project.SeparatorInfo",
      "x":318, "y":406,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22separator%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BDERIVED_SVC_FLAG_MSO_BAS%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BSeparateZipcode%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22318%22%20y%3D%22406%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3Ccolumns%3EMSO_CODE%2C%20MSO_NAME%2C%20CNTRY_CODE%2C%20REGION_CODE%2C%20postalCodesLower%2C%20USE_FLAG%2C%20TOTAL_SVC_FLAG%3C%2Fcolumns%3E%0A%09%3CinsertEmpty%3Etrue%3C%2FinsertEmpty%3E%0A%09%3Cseparate%20delimiter%3D%22Comma%28%2C%29%22%20toName%3D%22postalCode%22%3EpostalCodesLower%3C%2Fseparate%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-uBL975C9POmeiNOF":{
      "id":"nid-uBL975C9POmeiNOF",
      "name":"postalCodes_",
      "type":"com.lge.crawlego.project.GroupingValueInfo",
      "x":734, "y":159,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22groupingValue%22%3E%0A%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BPOSTAL_CODE%5D%5D%3E%3C%2FdataSource%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BpostalCodes_%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22734%22%20y%3D%22159%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CgroupingColumns%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2FgroupingColumns%3E%0A%09%3Cgenerate%3E%0A%09%09%3Ccolumn%20type%3D%22merge%22%20delimiter%3D%22%2C%22%20toName%3D%22postalCodes%22%3E%3C%21%5BCDATA%5BpostalCode%5D%5D%3E%3C%2Fcolumn%3E%0A%09%3C%2Fgenerate%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-RRSeUVSFWUK9mcUr":{
      "id":"nid-RRSeUVSFWUK9mcUr",
      "name":"postalCodes",
      "type":"com.lge.crawlego.project.MergeDataInfo",
      "x":580, "y":151,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22merge%22%3E%0A%09%3CdataSources%3E%0A%09%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BTVPROVIDER%5D%5D%3E%3C%2FdataSource%3E%0A%09%09%3CdataSource%20alias%3D%22A2%22%3E%3C%21%5BCDATA%5BpostalCodes_%5D%5D%3E%3C%2FdataSource%3E%0A%09%3C%2FdataSources%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BpostalCodes%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22580%22%20y%3D%22151%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3CjoinMethod%3Eouter%3C%2FjoinMethod%3E%0A%09%3CaddKeyColumn%3Efalse%3C%2FaddKeyColumn%3E%0A%09%3CequalKeys%3E%0A%09%09%3CequalKey%20source%3D%22TVPROVIDER%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2FequalKey%3E%0A%09%09%3CequalKey%20source%3D%22postalCodes_%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2FequalKey%3E%0A%09%3C%2FequalKeys%3E%0A%09%3CselectColumns%3E%0A%09%09%3Ccolumns%20source%3D%22TVPROVIDER%22%3E%3C%21%5BCDATA%5B*%5D%5D%3E%3C%2Fcolumns%3E%0A%09%09%3Ccolumns%20source%3D%22postalCodes_%22%3E%3C%21%5BCDATA%5BpostalCodes%5D%5D%3E%3C%2Fcolumns%3E%0A%09%3C%2FselectColumns%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-T25NxZmW1maL1CWu":{
      "id":"nid-T25NxZmW1maL1CWu",
      "name":"notNullZipcode",
      "type":"com.lge.crawlego.project.SelectRowInfo",
      "x":318, "y":472,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CprocessingElem%20type%3D%22select%22%3E%0A%09%3CdataSources%3E%0A%09%09%3CdataSource%20alias%3D%22A1%22%3E%3C%21%5BCDATA%5BSeparateZipcode%5D%5D%3E%3C%2FdataSource%3E%0A%09%09%3CdataSource%20alias%3D%22A2%22%3E%3C%21%5BCDATA%5BSeparateZipcode%5D%5D%3E%3C%2FdataSource%3E%0A%09%3C%2FdataSources%3E%0A%09%3CdataGroupName%3E%3C%21%5BCDATA%5BnotNullZipcode%5D%5D%3E%3C%2FdataGroupName%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22318%22%20y%3D%22472%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%09%3Ccondition%3E%3C%21%5BCDATA%5BNot%20ISNULL%28%7BpostalCode%7D%29%20and%20%7BUSE_FLAG%7D%3D%27Y%27%5D%5D%3E%3C%2Fcondition%3E%0A%3C%2FprocessingElem%3E%0A"
    },
    "nid-6AaUXixito5yojY1":{
      "id":"nid-6AaUXixito5yojY1",
      "name":"insertMsoChanMap",
      "type":"com.lge.crawlego.project.DataLoadingInfo",
      "x":951, "y":446,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataLoading%20%20name%3D%22insertMsoChanMap%22%20source%3D%22SELECT2_CHAN_MAP%22%20type%3D%22C-Batis%22%3E%0A%09%3CsqlFile%3E%3C%21%5BCDATA%5B%24%28CRAWLEGO.SQLFILE%29%5D%5D%3E%3C%2FsqlFile%3E%0A%09%3CsqlID%3EinsertMSOChanMap_crawlego_gnForLineUp%3C%2FsqlID%3E%0A%09%3CpreAction%3E%3C%21%5BCDATA%5Bupdate%20HESDP_IBS.TB_IC_MSO_CHAN_MAP%0A%09%09%09%09%09set%20use_flag%3D%27X%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20WHERE%20GEN_USR_NO%20%3D%20555%20AND%20IC_CONTENTS_SET_ID%20%3D%20%27%24%28contentsSetId%29%27%5D%5D%3E%3C%2FpreAction%3E%0A%09%3CignoreException%3Efalse%3C%2FignoreException%3E%0A%09%3CcolumnMapping%3E%0A%09%09%3Celement%20column%3D%22IC_CONTENTS_SET_ID%22%20type%3D%22constant%22%3E%3C%21%5BCDATA%5B%24%28contentsSetId%29%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22MSO_PRDT_ITM_CODE%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22CHAN_NO%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BCHANNEL_NUM%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22CHAN_CODE%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BCHAN_CODE%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22CLLCT_CHAN_NAME%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BCHAN_STD_NAME%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22USE_FLAG%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BUSE_FLAG%5D%5D%3E%3C%2Felement%3E%0A%09%3C%2FcolumnMapping%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22951%22%20y%3D%22446%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataLoading%3E%0A"
    },
    "nid-UZTlppV2HHtuTcrt":{
      "id":"nid-UZTlppV2HHtuTcrt",
      "name":"insertMsoBas",
      "type":"com.lge.crawlego.project.DataLoadingInfo",
      "x":484, "y":548,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataLoading%20%20name%3D%22insertMsoBas%22%20source%3D%22DERIVED_SVC_FLAG_MSO_BAS%22%20type%3D%22C-Batis%22%3E%0A%09%3CsqlFile%3E%3C%21%5BCDATA%5B%24%28CRAWLEGO.SQLFILE%29%5D%5D%3E%3C%2FsqlFile%3E%0A%09%3CsqlID%3EinsertMsoBasGn_crawlego_gn%3C%2FsqlID%3E%0A%09%3CpreAction%3E%3C%21%5BCDATA%5Bupdate%20HESDP_IBS.TB_IC_MSO_BAS%0A%09%09set%20use_flag%3D%27X%27%0A%09%09WHERE%20GEN_USR_NO%20%3D%20555%20AND%20IC_CONTENTS_SET_ID%20%3D%20%27%24%28contentsSetId%29%27%5D%5D%3E%3C%2FpreAction%3E%0A%09%3CignoreException%3Efalse%3C%2FignoreException%3E%0A%09%3CcolumnMapping%3E%0A%09%09%3Celement%20column%3D%22IC_CONTENTS_SET_ID%22%20type%3D%22constant%22%3E%3C%21%5BCDATA%5B%24%28contentsSetId%29%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22MSO_CODE%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22MSO_NAME%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BMSO_NAME%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22MSO_SO_NAME%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BMSO_NAME%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22MSO_LOC_1%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BMSO_LOC_1%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22CNTRY_CODE%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BCNTRY_CODE%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22IR_SVC_NAME%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BIR_SVC_NAME%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22TOTAL_SVC_FLAG%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BTOTAL_SVC_FLAG%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22STB_SVC_FLAG%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BSTB_SVC_FLAG%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22USE_FLAG%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BUSE_FLAG%5D%5D%3E%3C%2Felement%3E%0A%09%3C%2FcolumnMapping%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22484%22%20y%3D%22548%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataLoading%3E%0A"
    },
    "nid-uRyNlu71g99KQTlG":{
      "id":"nid-uRyNlu71g99KQTlG",
      "name":"insertMsoPrdtItmBas",
      "type":"com.lge.crawlego.project.DataLoadingInfo",
      "x":703, "y":552,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataLoading%20%20name%3D%22insertMsoPrdtItmBas%22%20source%3D%22MSO_PRDT_ITM_BAS%22%20type%3D%22C-Batis%22%3E%0A%09%3CsqlFile%3E%3C%21%5BCDATA%5B%24%28CRAWLEGO.SQLFILE%29%5D%5D%3E%3C%2FsqlFile%3E%0A%09%3CsqlID%3EinsertMsoPrdtItmBasGn_crawlego_gn%3C%2FsqlID%3E%0A%09%3CpreAction%3E%3C%21%5BCDATA%5Bupdate%20tb_ic_mso_prdt_itm_bas%0A%09set%20use_flag%3D%27X%27%0A%09WHERE%20GEN_USR_NO%3D555%20and%20IC_CONTENTS_SET_ID%3D%27com.lge.crawler.xml.gn.epg.GnEpgCrawler%27%20%0A%09and%20mso_prdt_itm_code%21%3D%27com.lge.crawler.xml.gn.epg.GnEpgCrawler%27%5D%5D%3E%3C%2FpreAction%3E%0A%09%3CignoreException%3Efalse%3C%2FignoreException%3E%0A%09%3CcolumnMapping%3E%0A%09%09%3Celement%20column%3D%22IC_CONTENTS_SET_ID%22%20type%3D%22constant%22%3E%3C%21%5BCDATA%5B%24%28contentsSetId%29%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22MSO_PRDT_ITM_CODE%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22MSO_CODE%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22MSO_PRDT_ITM_NAME%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BMSO_NAME%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22DVC_SRC_IDX%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BDVC_SRC_IDX%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22BRDCST_TYPE%22%20type%3D%22constant%22%3E%3C%21%5BCDATA%5B2%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22USE_FLAG%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BUSE_FLAG%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22PRDT_VER%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BD_PRDT_VER%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22CHAN_LOGO_VER%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BCHAN_LOGO_VER%5D%5D%3E%3C%2Felement%3E%0A%09%3C%2FcolumnMapping%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22703%22%20y%3D%22552%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataLoading%3E%0A"
    },
    "nid-iPC4qBSNAAVWConC":{
      "id":"nid-iPC4qBSNAAVWConC",
      "name":"updatePrdtVer",
      "type":"com.lge.crawlego.project.DataLoadingInfo",
      "x":1104, "y":446,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataLoading%20%20name%3D%22updatePrdtVer%22%20source%3D%22GroupingCompare_1%22%20type%3D%22C-Batis%22%3E%0A%09%3CsqlFile%3E%3C%21%5BCDATA%5B%24%28CRAWLEGO.SQLFILE%29%5D%5D%3E%3C%2FsqlFile%3E%0A%09%3CsqlID%3EupdateLineupVersion_crawlego_gn%3C%2FsqlID%3E%0A%09%3CpreAction%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2FpreAction%3E%0A%09%3CignoreException%3Efalse%3C%2FignoreException%3E%0A%09%3CcolumnMapping%3E%0A%09%09%3Celement%20column%3D%22MSO_PRDT_ITM_CODE%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BGROUPING%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22IC_CONTENTS_SET_ID%22%20type%3D%22constant%22%3E%3C%21%5BCDATA%5B%24%28contentsSetId%29%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22RESULT%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BRESULT%5D%5D%3E%3C%2Felement%3E%0A%09%3C%2FcolumnMapping%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%221104%22%20y%3D%22446%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataLoading%3E%0A"
    },
    "nid-U8TIRgYCE3tqPy78":{
      "id":"nid-U8TIRgYCE3tqPy78",
      "name":"insertMsoSvcRegnMap",
      "type":"com.lge.crawlego.project.DataLoadingInfo",
      "x":318, "y":538,
      "script":"%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%0A%3CdataLoading%20%20name%3D%22insertMsoSvcRegnMap%22%20source%3D%22notNullZipcode%22%20type%3D%22C-Batis%22%3E%0A%09%3CsqlFile%3E%3C%21%5BCDATA%5B%24%28CRAWLEGO.SQLFILE%29%5D%5D%3E%3C%2FsqlFile%3E%0A%09%3CsqlID%3EinsertMsoSvcRegnMapGn_crawlego_gn%3C%2FsqlID%3E%0A%09%3CpreAction%3E%3C%21%5BCDATA%5Bupdate%20tb_ic_mso_svc_regn_map%0A%09set%20use_flag%3D%27X%27%20%0A%09WHERE%20IC_CONTENTS_SET_ID%20%3D%20%27com.lge.crawler.xml.gn.epg.GnEpgCrawler%27%5D%5D%3E%3C%2FpreAction%3E%0A%09%3CignoreException%3Efalse%3C%2FignoreException%3E%0A%09%3CcolumnMapping%3E%0A%09%09%3Celement%20column%3D%22IC_CONTENTS_SET_ID%22%20type%3D%22constant%22%3E%3C%21%5BCDATA%5B%24%28contentsSetId%29%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22MSO_CODE%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BMSO_CODE%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22ZIP_NO%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BpostalCode%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22SEQ_NO%22%20type%3D%22constant%22%3E%3C%21%5BCDATA%5B0%5D%5D%3E%3C%2Felement%3E%0A%09%09%3Celement%20column%3D%22USE_FLAG%22%20type%3D%22column%22%3E%3C%21%5BCDATA%5BUSE_FLAG%5D%5D%3E%3C%2Felement%3E%0A%09%3C%2FcolumnMapping%3E%0A%09%3Cui%3E%0A%09%09%3Cposition%20x%3D%22318%22%20y%3D%22538%22%20%2F%3E%0A%09%09%3Cdescription%3E%3C%21%5BCDATA%5B%5D%5D%3E%3C%2Fdescription%3E%0A%09%3C%2Fui%3E%0A%3C%2FdataLoading%3E%0A"
    }
  },
  "links":[
    {
      "begin":"nid-WKjbVddJOxhgI0rK",
      "end":"nid-moEcpIR4Cw61S7NL",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-s2v41uU7dYk9HEQ6",
      "end":"nid-pJPMUT8dHMpNmed1",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-s2v41uU7dYk9HEQ6",
      "end":"nid-NSn6nsHUmO4rF9rw",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-s2v41uU7dYk9HEQ6",
      "end":"nid-YRhK2FKZaDyOEjlr",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-RmMW5j4UM3QOgmSM",
      "end":"nid-khQ1GmgQRxENoEaQ",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-moEcpIR4Cw61S7NL",
      "end":"nid-s2v41uU7dYk9HEQ6",
      "type":"event",
      "text":"{1}:URL"
    }, {
      "begin":"nid-pJPMUT8dHMpNmed1",
      "end":"nid-NSn6nsHUmO4rF9rw",
      "type":"parent",
      "text":"MSO_CODE"
    }, {
      "begin":"nid-YRhK2FKZaDyOEjlr",
      "end":"nid-NSn6nsHUmO4rF9rw",
      "type":"parent",
      "text":"MSO_CODE"
    }, {
      "begin":"nid-jCkMxoUQl7ti2IOt",
      "end":"nid-7JLMq0Wc0GCAQJ7z",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-pJPMUT8dHMpNmed1",
      "end":"nid-7JLMq0Wc0GCAQJ7z",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-9EJNpc5E5K7OrfWP",
      "end":"nid-5U6XOBFYG7ltvIOs",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-yxn2golCpGieh624",
      "end":"nid-9EGxnwwDeVyFqhbO",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-ryt1gP1juBN1itJI",
      "end":"nid-9EGxnwwDeVyFqhbO",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-9EGxnwwDeVyFqhbO",
      "end":"nid-XFmqbtjD75kdI0SY",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-yxn2golCpGieh624",
      "end":"nid-tLhRfggGvjaD2LX5",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-o3hyxvhehiBZ2pTK",
      "end":"nid-tLhRfggGvjaD2LX5",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-tLhRfggGvjaD2LX5",
      "end":"nid-UzbsVyig0dGRUgkH",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-N5uL93y3lWr0V2lu",
      "end":"nid-Xe6vfaFO2Kge9dfp",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-RRSeUVSFWUK9mcUr",
      "end":"nid-S3rFZJ3vNznQL2gg",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-5U6XOBFYG7ltvIOs",
      "end":"nid-N5uL93y3lWr0V2lu",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-Xe6vfaFO2Kge9dfp",
      "end":"nid-LqP64YkGt7PNtEzc",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-IQUklbsQpjDVQfpm",
      "end":"nid-LqP64YkGt7PNtEzc",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-khQ1GmgQRxENoEaQ",
      "end":"nid-39a7kNasaQhYV8uo",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-7JLMq0Wc0GCAQJ7z",
      "end":"nid-9EJNpc5E5K7OrfWP",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-yxn2golCpGieh624",
      "end":"nid-9EJNpc5E5K7OrfWP",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-57nIAUvtE7kfXyOI",
      "end":"nid-yxn2golCpGieh624",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-39a7kNasaQhYV8uo",
      "end":"nid-yxn2golCpGieh624",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-S3rFZJ3vNznQL2gg",
      "end":"nid-57nIAUvtE7kfXyOI",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-XFmqbtjD75kdI0SY",
      "end":"nid-1M4SQ09qBrg9IOZL",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-YRhK2FKZaDyOEjlr",
      "end":"nid-uBL975C9POmeiNOF",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-NSn6nsHUmO4rF9rw",
      "end":"nid-RRSeUVSFWUK9mcUr",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-uBL975C9POmeiNOF",
      "end":"nid-RRSeUVSFWUK9mcUr",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-1M4SQ09qBrg9IOZL",
      "end":"nid-T25NxZmW1maL1CWu",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-1M4SQ09qBrg9IOZL",
      "end":"nid-T25NxZmW1maL1CWu",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-Xe6vfaFO2Kge9dfp",
      "end":"nid-6AaUXixito5yojY1",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-XFmqbtjD75kdI0SY",
      "end":"nid-UZTlppV2HHtuTcrt",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-UzbsVyig0dGRUgkH",
      "end":"nid-uRyNlu71g99KQTlG",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-LqP64YkGt7PNtEzc",
      "end":"nid-iPC4qBSNAAVWConC",
      "type":"normal",
      "text":""
    }, {
      "begin":"nid-T25NxZmW1maL1CWu",
      "end":"nid-U8TIRgYCE3tqPy78",
      "type":"normal",
      "text":""
    }
  ]
}];

export const getMockProject = (idx) => {
  if( isundef(idx) || idx < 0 || idx >= scriptSample.length ) {
    idx = Math.floor(Math.random() * 100) % scriptSample.length;
  }

  return scriptSample[idx];
}
