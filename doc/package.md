# Open Library

## react

## sematic-ui-react --> not used
https://react.semantic-ui.com




## monaco editor
https://www.npmjs.com/package/react-monaco-editor
https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditorconstructionoptions.html
https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages

### Interface for Theme Definition
https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandalonethemedata.html

built-in theme sample
https://github.com/Microsoft/vscode/blob/master/src/vs/editor/standalone/common/themes.ts#L13

npm install monaco-editor
npm install monaco-editor-webpack-plugin  --> (참조하는 라이브러리 일괄 설치를 위하여) yarn 권장
npm install react-monaco-editor

wepack.config.js 파일에 다음 추가 (./node_modules/react-scripts/config/webpack.config.js)
(패키지 추가하면 없어지므로 다시 추가해야 함.)
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
yarn add @blueprintjs/core react react-dom mobx mobx-react monaco-editor monaco-editor-webpack-plugin @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators

copy folders -- normalize.css, @blueprintjs to public

yarn upgrade


## mobX
https://velog.io/@velopert/MobX-2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-MobX-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-oejltas52z


# Annotaion-style 사용




npm install --save @babel/polyfill

yarn add @blueprintjs/core react react-dom mobx mobx-react monaco-editor monaco-editor-webpack-plugin @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators

yarn add @babel/preset-react
yarn add babel-preset-mobx
