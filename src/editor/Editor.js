import React from 'react';
import PropTypes from 'prop-types';

import GalleryView from './GalleryView.js';
import ScriptView from './ScriptView.js';
import Workspace from './Workspace.js';

import './Editor.css';

import { appOpt } from '../common/appSetting.js';



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

  	const
  		wsHeight = height - bottomHeight,
  		wsWidth = width - leftWidth
  	;

  	return (
      <div className="editor" style={{ width, height }}>
        <div className="leftPane" style={{ flexBasis:leftWidth }}>
        	<GalleryView galleryList={appOpt.getGalleryList()} />
        </div>
        <div className="rightPane" style={{ flexBasis:wsWidth }}>
        	<div className="mainPane" style={{ flexBasis:wsHeight }}>
        		<Workspace width={wsWidth} height={wsHeight} />
        	</div>
        	<div className="bottomPane" style={{ flexBasis:bottomHeight }}>
        		<ScriptView />
        	</div>
        </div>
      </div>
    );
  }
}

export default Editor;
export { Editor };