import React from 'react';
// import PropTypes from 'prop-types';
import {MultiSelector} from '../component/MultiSelector.js';



class SampleFrame extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      code: '',
      optionList: ['CONTENTS_ID', 'PGM_GR_ID', 'SER_ID', 'SEASON_ID', 'SEASON_NO', 'REAL_EPSD_NO', 'PGM_TTL', 'SUB_TTL', 'PGM_EXPLN', 'DATA_LANG', 'MAKE_DATE', 'PPLR_ST', 'MAKE_CNTRY', 'CP_GENRE_CODE', 'CP_GENRE_NAME', 'LG_GENRE_CODE', 'LG_GENRE_NAME', 'LG_GENRE_CODE2', 'LG_GENRE_NAME2', 'GENRE_IMG_CODE', 'GENRE_IMG_SEQ', 'GENRE_IMG_INFO', 'PGM_IMG_INFO', 'USE_FLAG', 'LG_AGE_CODE', 'CP_AGE_CODE', 'PGM_TYPE', 'ROOT_ID', 'MAKE_COM', 'AUD_QLTY', 'AUD_LANG', 'I_ID__ES', 'xumoImg', 'width', 'height', 'I_ID__FR', 'I_ID__DE', 'I_ID__IT', 'idx', 'sizeCode'],
      selectedList: ['SUB_TTL', 'SEASON_ID', 'SEASON_NO', 'REAL_EPSD_NO', 'PGM_TTL'],
    }
  }

  render () {
    const {selectedList, optionList} = this.state;

    return (
      <div>
        <div style={{ 'width':'550px' }} >
          <div>DUMMY</div>
          <MultiSelector selectedList={selectedList} optionList={optionList} />
          <div>DUMMY</div>
        </div>
      </div>
    );
  }
}

export default SampleFrame;
export { SampleFrame };

