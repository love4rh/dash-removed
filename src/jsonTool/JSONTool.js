import { JNode } from './JNode.js';


/**
 *
 */
export const JSONTool = {
  traverse: (obj, parent) => {
    if( Array.isArray(obj) ) {
      for(let i = 0; i < obj.length; ++i) {
        JSONTool.traverse(obj[i], parent);
      }
    } else {
      for(let k in obj) {
        const v = obj[k];
        if( typeof v === 'object' || Array.isArray(v) ) {
          let cnode = parent.getChild(k);
          if( !cnode ) {
            cnode = new JNode(k, parent);
          }
          JSONTool.traverse(v, cnode);
        } else {
          parent.addValue(k, v);
        }
      }
    }
  },

  analyze: (jsonText, cb) => {
    let returnCode = 0;
    let rootNode = null;

    try {
      rootNode = new JNode('root');
      JSONTool.traverse(JSON.parse(jsonText), rootNode);
      // rootNode.print('');
    } catch( ex ) {
      returnCode = -1;
      console.log('Analyze', ex);
    }

    if( cb ) {
      cb({ returnCode, rootNode });
    }
  }
};
