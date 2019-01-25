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
		if( col === 1)
			return 'number';
		else if( col === 2 )
			return 'datetime';

		return 'string';
	}

	getRowCount = () => {
		return this.rowCount;
	}

	getRowHeight = () => {
		return nvl(this.props.rowHeight, 30);
	}

	getCellValue = (col, row) => {
		if( col === 1 ) {
			return (row - 10) * 999 + Math.floor(Math.random() * 100) / 100;
		} else if( col === 2 ) {
			return new Date();
		}

		return 'C' + col + 'R' + row;
	}
}

export default DataSource;
export { DataSource };
