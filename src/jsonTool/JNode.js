/**
 * 
 */
class JNode {
  constructor(name, parent) {
    this._name = name;
    this._parent = parent;
    this._children = [];
    this._childrenMap = {};
    this._columns = {}; // name --> idx
    this._data = []; // record. this._data[0]는 컬럼명

    if( parent ) {
      parent.addChild(this);
    }
  }

  print = (intent) => {
    console.log(intent + this._name, this.hasData() ? this._data : '');
    for(let i = 0; i < this._children.length; ++i) {
      this._children[i].print(intent + '  ');
    }
  }

  getName = () => {
    return this._name;
  }

  getPath = () => {
    return (this._parent ? this._parent.getPath() : '') +  '/' + this.getName();
  }

  addChild = (node) => {
    if( node.getName() in this._childrenMap ) {
      // already added
    } else {
      this._children.push(node);
      this._childrenMap[node.getName()] = node;
    }
  }

  hasChild = (name) => {
    return name in this._childrenMap;
  }

  getChild = (name) => {
    return this._childrenMap[name];
  }

  hasData = () => {
    return this._data.length > 0;
  }

  rowCount = () => {
    return this._data.length - 1;
  }

  addValue = (key, value) => {
    if( this._data.length === 0 ) {
      this._data[0] = [];
    }

    let colIdx;

    if( key in this._columns ) {
      colIdx = this._columns[key];
    } else {
      colIdx = this._data[0].length;
      this._columns[key] = colIdx;
      this._data[0].push(key);
    }

    let rowIdx = this._data.length - 1;

    if( typeof this._data[rowIdx][colIdx] !== 'undefined' ) {
      rowIdx += 1; // 한 레코드가 모두 찬 경우임. (확인필요)
      this._data[rowIdx] = [];
    }

    this._data[rowIdx][colIdx] = value;
  }


  // DataSource interfaces...
  getTitle = () => {
    return this.getPath();
  }

  getColumnCount = () => {
    return this.hasData() ? this._data[0].length : 0;
  }

  getColumnName = (col) => {
    return this.hasData() ? this._data[0][col] : `col${col}`;
  }

  getColumnType = (col) => {
    if( this.hasData() ) {
      return typeof this._data[1][col] === 'number' ? 'number' : 'string';
    }

    return 'string';
  }

  getRowCount = () => {
    return this.rowCount();
  }

  getRowHeight = () => {
    return 30;
  }

  getCellValue = (col, row) => {
    return this._data[row + 1][col];
  }

  // eslint-disable-next-line
  isValid = (begin, end) => {
    return true;
  }
}

export default JNode;
export { JNode };
