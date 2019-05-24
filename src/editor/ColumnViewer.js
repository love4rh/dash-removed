import React from 'react';
import PropTypes from 'prop-types';

import { isvalid } from '../common/tool.js';

import './Editor.css';


/**
 * 노드의 컬럼 목록을 보여주기 위한 콤포넌트
 */
class ColumnViewer extends React.Component {
	static propTypes = {
    height: PropTypes.number.isRequired,
    node: PropTypes.object,
    // width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    const node = props.node;

    this.state = {
      columns: isvalid(node) && isvalid(node.property) && isvalid(node.property.columns) ? node.property.columns : [],
    };
  }

  render () {
    const { height } = this.props;
    const { columns } = this.state;

    return (
      <div>
        <div className="paneTitle">Columns</div>
        <div className="columnViewMain" style={{ height:height - 25 }}>
          { columns.map((o, idx) => {
              return (
                <div key={`colviewer-${idx}`} className="columnViewItem">
                  {o.name}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ColumnViewer;
export { ColumnViewer };
