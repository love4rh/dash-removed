import { istrue, isvalid } from '../common/tool.js';

// import sample from '../assets/svg/sample.svg';

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

import node_etc_16 from '../assets/png/node_etc16.png';

import node_fetch_16 from '../assets/png/node_fetch16.png';
import node_datagroup_16 from '../assets/png/node_datagroup16.png';
import node_dbin_16 from '../assets/png/node_dbin16.png';
import node_filein_16 from '../assets/png/node_filein16.png';
import node_dataon_16 from '../assets/png/node_dataon16.png';
import node_append_16 from '../assets/png/node_append16.png';
import node_coding_16 from '../assets/png/node_coding16.png';
import node_column_16 from '../assets/png/node_column16.png';
import node_rename_16 from '../assets/png/node_rename16.png';
import node_derived_16 from '../assets/png/node_derived16.png';
import node_distinct_16 from '../assets/png/node_distinct16.png';
import node_groupcount_16 from '../assets/png/node_groupcount16.png';
import node_groupselect_16 from '../assets/png/node_groupselect16.png';
import node_merge_16 from '../assets/png/node_merge16.png';
import node_mergeinto_16 from '../assets/png/node_mergeinto16.png';
import node_select_16 from '../assets/png/node_select16.png';
import node_separate_16 from '../assets/png/node_separate16.png';
import node_sort_16 from '../assets/png/node_sort16.png';
import node_groupvalue_16 from '../assets/png/node_groupvalue16.png';
import node_image_16 from '../assets/png/node_image16.png';
import node_trxn_16 from '../assets/png/node_trxn16.png';
import node_compare_16 from '../assets/png/node_compare16.png';
import node_gostop_16 from '../assets/png/node_gostop16.png';
import node_replace_16 from '../assets/png/node_replace16.png';
import node_dbinsert_16 from '../assets/png/node_dbinsert16.png';
import node_fileout_16 from '../assets/png/node_fileout16.png';
import node_loading_16 from '../assets/png/node_loading16.png';
import node_sepout_16 from '../assets/png/node_sepout16.png';
import node_s3_16 from '../assets/png/node_s316.png';
import node_runchart_16 from '../assets/png/node_runchart16.png';

import circle_red from '../assets/png/circle_red.png';
import circle_blue from '../assets/png/circle_blue.png';
import circle_yellow from '../assets/png/circle_yellow.png';
import circle_green from '../assets/png/circle_green.png';
import circle_purple from '../assets/png/circle_purple.png';
import circle_black from '../assets/png/circle_black.png';



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

	'default_16': node_etc_16,
	'com.lge.crawlego.project.DataFetchMethod_16': node_fetch_16,
	'com.lge.crawlego.project.DataGroup_16': node_datagroup_16,
	'com.lge.crawlego.project.DBInputInfo_16': node_dbin_16,
	'com.lge.crawlego.project.FileInputInfo_16': node_filein_16,
	'com.lge.crawlego.project.DataOnInputInfo_16': node_dataon_16,
	'com.lge.crawlego.project.EpgOnLogInfo_16': node_etc_16,
	'com.lge.crawlego.project.AppendDataInfo_16': node_append_16,
	'com.lge.crawlego.project.CodingDataInfo_16': node_coding_16,
	'com.lge.crawlego.project.ColumnFilterInfo_16': node_column_16,
	'com.lge.crawlego.project.ColumnRenameInfo_16': node_rename_16,
	'com.lge.crawlego.project.DerivedProcessInfo_16': node_derived_16,
	'com.lge.crawlego.project.DistinctDataInfo_16': node_distinct_16,
	'com.lge.crawlego.project.GroupingCountInfo_16': node_groupcount_16,
	'com.lge.crawlego.project.GroupingSelectInfo_16': node_groupselect_16,
	'com.lge.crawlego.project.MergeDataInfo_16': node_merge_16,
	'com.lge.crawlego.project.MergeIntoInfo_16': node_mergeinto_16,
	'com.lge.crawlego.project.SelectRowInfo_16': node_select_16,
	'com.lge.crawlego.project.SeparatorInfo_16': node_separate_16,
	'com.lge.crawlego.project.PairSeparatorInfo_16': node_separate_16,
	'com.lge.crawlego.project.SortColumnInfo_16': node_sort_16,
	'com.lge.crawlego.project.GroupingValueInfo_16': node_groupvalue_16,
	'com.lge.crawlego.project.ImageDownUpInfo_16': node_image_16,
	'com.lge.crawlego.project.GnSchdFilterInfo_16': node_etc_16,
	'com.lge.crawlego.project.DBTransactionInfo_16': node_trxn_16,
	'com.lge.crawlego.project.DBInputProcessInfo_16': node_dbinsert_16,
	'com.lge.crawlego.project.GroupingCompareInfo_16': node_compare_16,
	'com.lge.crawlego.project.GoStopInfo_16': node_gostop_16,
	'com.lge.crawlego.project.ReplaceValueInfo_16': node_replace_16,
	'com.lge.crawlego.project.DataLoadingInfo_16': node_loading_16,
	'com.lge.crawlego.project.DataOnLoadingInfo_16': node_dataon_16,
	'com.lge.crawlego.project.DataOnInsertInfo_16': node_dbinsert_16,
	'com.lge.crawlego.project.FileOutputInfo_16': node_fileout_16,
	'com.lge.crawlego.project.DirectLoadingInfo_16': node_loading_16,
	'com.lge.crawlego.project.FileSepOutputInfo_16': node_sepout_16,
	'com.lge.crawlego.project.S3OutputInfo_16': node_s3_16,
	'com.lge.prometheus.extension.RunChartNodeInfo_16': node_runchart_16,
	'com.lge.prometheus.extension.LiveWatchNodeInfo_16': node_runchart_16,

	'favorite': circle_red,
	'input': circle_blue,
	'processing': circle_yellow,
	'chart': circle_green,
	'output': circle_purple,
	'etc': circle_black,
};


const IB = {
	getNodeImage: (type, small) => {
		if( istrue(small) ) {
			type += '_16';
			return isvalid(nodeImageMap[type]) ? nodeImageMap[type] : nodeImageMap['default_16'];
		}

		return isvalid(nodeImageMap[type]) ? nodeImageMap[type] : nodeImageMap['default'];
	},

	getCatagoryImage: (type) => {
		return isvalid(nodeImageMap[type]) ? nodeImageMap[type] : nodeImageMap['etc'];
	}
};


export default IB;
export { IB };
