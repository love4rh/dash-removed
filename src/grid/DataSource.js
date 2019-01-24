import {nvl} from '../common/tool.js';



class DataSource {
	constructor (props) {
		this.props = props;
		this.colCount = props.columnCount;
		this.rowCount = props.rowCount;
	}

	getTitle = () => {
		return this.props.title;
	}

	getColumnCount = () => {
		return this.colCount;
	}

	getColumnName = (col) => {
		return 'Column' + col;
	}

	getColumnType = (col) => {
		return 'string';
	}

	getRowCount = () => {
		return this.rowCount;
	}

	getRowHeight = () => {
		return nvl(this.props.rowHeight, 30);
	}

	getCellValue = (col, row) => {
		return 'C' + col + 'R' + row;
	}
}

export default DataSource;
export { DataSource };
