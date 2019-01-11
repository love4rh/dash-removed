import React, { Component } from 'react';
// import css from './FileListItem.less';



class FileListItem extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    //
  }

  componentWillUnmount () {
    //
  }

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <div>
        { data.name }
      </div>
    );
  }
}

export default FileListItem;
export { FileListItem };
