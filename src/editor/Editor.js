import React from 'react';
import PropTypes from 'prop-types';

import './Editor.css';
import GalleryView from './GalleryView.js';
import ScriptView from './ScriptView.js';
import Workspace from './Workspace.js';



class Editor extends React.Component {
	static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

  }

  render () {
  	const { width, height } = this.props;
  	const leftWidth = 300, bottomHeight = 250;

  	return (
      <div className="editor" style={{ width, height }}>
        <div className="leftPane" style={{ flexBasis: leftWidth }}>
        	<GalleryView />
        </div>
        <div className="rightPane" style={{ flexBasis: (width - leftWidth) }}>
        	<div className="mainPane" style={{ flexBasis: (height - bottomHeight) }}>
        		<Workspace />
        	</div>
        	<div className="bottomPane" style={{ flexBasis: bottomHeight }}>
        		<ScriptView />
        	</div>
        </div>
      </div>
    );
  }
}

export default Editor;
export { Editor };
