import {isvalid} from '../common/tool.js';

import sample from '../assets/svg/sample.svg';

import node_etc from '../assets/png/node_etc.png';

import node_fetch from '../assets/png/node_fetch.png';
import node_datagroup from '../assets/png/node_datagroup.png';
import node_dbin from '../assets/png/node_dbin.png';
import node_filein from '../assets/png/node_filein.png';
import node_dataon from '../assets/png/node_dataon.png';
import node_append from '../assets/png/node_append.png';
import node_coding from '../assets/png/node_coding.png';
import node_column from '../assets/png/node_column.png';
import node_rename from '../assets/png/node_rename.png';
import node_derived from '../assets/png/node_derived.png';
import node_distinct from '../assets/png/node_distinct.png';
import node_groupcount from '../assets/png/node_groupcount.png';
import node_groupselect from '../assets/png/node_groupselect.png';
import node_merge from '../assets/png/node_merge.png';
import node_mergeinto from '../assets/png/node_mergeinto.png';
import node_select from '../assets/png/node_select.png';
import node_separate from '../assets/png/node_separate.png';
import node_sort from '../assets/png/node_sort.png';
import node_groupvalue from '../assets/png/node_groupvalue.png';
import node_image from '../assets/png/node_image.png';
import node_trxn from '../assets/png/node_trxn.png';
import node_compare from '../assets/png/node_compare.png';
import node_gostop from '../assets/png/node_gostop.png';
import node_replace from '../assets/png/node_replace.png';
import node_dbinsert from '../assets/png/node_dbinsert.png';
import node_fileout from '../assets/png/node_fileout.png';
import node_loading from '../assets/png/node_loading.png';
import node_sepout from '../assets/png/node_sepout.png';
import node_s3 from '../assets/png/node_s3.png';
import node_runchart from '../assets/png/node_runchart.png';



/*
 * Image Bank
 */
const nodeImageMap = {
	'default': node_etc,
	'com.lge.crawlego.project.DataFetchMethod': node_fetch,
	'com.lge.crawlego.project.DataGroup': node_datagroup,
	'com.lge.crawlego.project.DBInputInfo': node_dbin,
	'com.lge.crawlego.project.FileInputInfo': node_filein,
	'com.lge.crawlego.project.DataOnInputInfo': node_dataon,
	'com.lge.crawlego.project.EpgOnLogInfo': node_etc,
	'com.lge.crawlego.project.AppendDataInfo': node_append,
	'com.lge.crawlego.project.CodingDataInfo': node_coding,
	'com.lge.crawlego.project.ColumnFilterInfo': node_column,
	'com.lge.crawlego.project.ColumnRenameInfo': node_rename,
	'com.lge.crawlego.project.DerivedProcessInfo': node_derived,
	'com.lge.crawlego.project.DistinctDataInfo': node_distinct,
	'com.lge.crawlego.project.GroupingCountInfo': node_groupcount,
	'com.lge.crawlego.project.GroupingSelectInfo': node_groupselect,
	'com.lge.crawlego.project.MergeDataInfo': node_merge,
	'com.lge.crawlego.project.MergeIntoInfo': node_mergeinto,
	'com.lge.crawlego.project.SelectRowInfo': node_select,
	'com.lge.crawlego.project.SeparatorInfo': node_separate,
	'com.lge.crawlego.project.PairSeparatorInfo': node_separate,
	'com.lge.crawlego.project.SortColumnInfo': node_sort,
	'com.lge.crawlego.project.GroupingValueInfo': node_groupvalue,
	'com.lge.crawlego.project.ImageDownUpInfo': node_image,
	'com.lge.crawlego.project.GnSchdFilterInfo': node_etc,
	'com.lge.crawlego.project.DBTransactionInfo': node_trxn,
	'com.lge.crawlego.project.DBInputProcessInfo': node_dbinsert,
	'com.lge.crawlego.project.GroupingCompareInfo': node_compare,
	'com.lge.crawlego.project.GoStopInfo': node_gostop,
	'com.lge.crawlego.project.ReplaceValueInfo': node_replace,
	'com.lge.crawlego.project.DataLoadingInfo': node_loading,
	'com.lge.crawlego.project.DataOnLoadingInfo': node_dataon,
	'com.lge.crawlego.project.DataOnInsertInfo': node_dbinsert,
	'com.lge.crawlego.project.FileOutputInfo': node_fileout,
	'com.lge.crawlego.project.DirectLoadingInfo': node_loading,
	'com.lge.crawlego.project.FileSepOutputInfo': node_sepout,
	'com.lge.crawlego.project.S3OutputInfo': node_s3,
	'com.lge.prometheus.extension.RunChartNodeInfo': node_runchart,
	'com.lge.prometheus.extension.LiveWatchNodeInfo': node_runchart,
};


const IB = {
	getNodeImage: (type) => {
		return isvalid(nodeImageMap[type]) ? nodeImageMap[type] : nodeImageMap['default'];
	}
};


export default IB;
export { IB };
