import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import MonacoEditor from 'react-monaco-editor';

import { isvalid, makeid } from '../common/tool.js';

import './Editor.css';


@inject('appData')
@observer
class ScriptEditor extends React.Component {
  static propTypes = {
    handleValueChange: PropTypes.func.isRequired,
    node: PropTypes.object,
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
  }

  constructor (props) {
    super(props);

    this.state = { code: '', editOn: false };
  }

  onValueChange = (id, data) => {
    // console.log('onInputChange', idx, ev, data);
    this.props.handleValueChange(id, data);
  }

  editorDidMount = (editor, monaco) => {
    editor.focus();
  }

  editorWillMount = (monaco) => {
    // console.log(monaco, monaco.languages.getLanguages());

    // Register a new language
    monaco.languages.register({ id: 'mySpecialLanguage' });

    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider('mySpecialLanguage', {
      tokenizer: {
        root: [
          [/\[error.*/, "custom-error"],
          [/\[notice.*/, "custom-notice"],
          [/\[info.*/, "custom-info"],
          [/\[[a-zA-Z 0-9:]+\]/, "custom-date"],
        ]
      }
    });

    // Define a new theme that contains only rules that match this language
    monaco.editor.defineTheme('myCoolTheme', {
      base: 'vs-dark',
      inherit: false,
      rules: [
        { token: '', foreground: 'D4D4D4' }, // <- default
        { token: 'custom-info', foreground: '808080' },
        { token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold' },
        { token: 'custom-notice', foreground: 'FFA500' },
        { token: 'custom-date', foreground: '008800' },
      ]
    });

    // Register a completion item provider for the new language
    monaco.languages.registerCompletionItemProvider('mySpecialLanguage', {
      provideCompletionItems: () => {
        let suggestions = [{
          label: 'simpleText',
          kind: monaco.languages.CompletionItemKind.Text,
          documentation: 'description here',
          insertText: 'simpleText'
        }, {
          label: 'testing',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'testing(${1:condition})'
        }, {
          label: 'ifelse',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: [
            'if (${1:condition}) {',
            '\t$0',
            '} else {',
            '\t',
            '}'
          ].join('\n'),
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'If-Else Statement'
        }];

        return { suggestions: suggestions };
      }
    });
  }

  onChange = (newValue, e) => {
    // console.log('onChange', newValue, e);
  }

  render () {
    const { height, width, appData } = this.props;
    const { code, editOn } = this.state;

    const options = {
      selectOnLineNumbers: true,
      minimap: {enabled: false},
      roundedSelection: false,
      readOnly: !editOn,
      cursorStyle: 'line',
      automaticLayout: true,
      // suggestOnTriggerCharacters: true,
      // suggestSelection: 'recentlyUsedByPrefix'
    };

    // javascript vs-dark
    // language="mySpecialLanguage"
    // theme="myCoolTheme"

    const node = appData.getActiveNode();

    return (
      <div key={'edit-' + (node === null ? 'null' : node.id)}>
        <div className="paneTitle">Script</div>
        <MonacoEditor
          width={'100%'}
          height={height - 45}
          language="xml"
          theme="vs-dark"
          value={node === null ? '' : decodeURIComponent(node.script)}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
          editorWillMount={this.editorWillMount}
        />
      </div>
    );
  }
}

export default ScriptEditor;
export { ScriptEditor };
