# Open Library

## react

## sematic-ui-react
https://react.semantic-ui.com




## monaco editor
https://www.npmjs.com/package/react-monaco-editor
https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditorconstructionoptions.html
https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages

npm install monaco-editor
npm install monaco-editor-webpack-plugin  --> (참조하는 라이브러리 일괄 설치를 위하여) yarn 권장
npm install react-monaco-editor

wepack.config.js 파일에 다음 추가 (./node_modules/react-scripts/config/webpack.config.js)
```
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

...

module.exports = {
  plugins: [
  	...
    new MonacoWebpackPlugin(),
    ...
  ]
}
```


npm install --save @babel/polyfill


## blueprint
https://blueprintjs.com/docs/#blueprint/getting-started
yarn add @blueprintjs/core react react-dom

copy folders -- normalize.css, @blueprintjs to public

