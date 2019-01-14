
class DataSource {
	constructor (props) {
		this.colCount = props.columnCount;
		this.rowCount = props.rowCount;

		this.colWidth = [];
		for(let i = 0; i < this.colCount; ++i) {
			this.colWidth.push( Math.min(200, Math.max(50, i * 20)) );
		}
	}

	getTitle = () => {
		return this.props.title;
	}

	getHeadColumnWidth = () => {
		return 100;
	}

	getColumnCount = () => {
		return this.colCount;
	}

	getColumnWidth = (col) => {
		return this.colWidth[col];
	}

	setColumnWidth = (col, width) => {
		this.colWidth[col] = width;
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
		return 40;
	}

	getCellValue = (col, row) => {
		return 'C' + col + 'R' + row;
	}
}

export default DataSource;
export { DataSource };
