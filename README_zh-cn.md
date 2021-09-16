# toolBox

一个集成常用函数或不常用函数的插件库，我会集成一些常见的函数，自己的函数，期待它的变大

<p align="center">
  <a href="https://npmcharts.com/compare/@lixianbin1/toolbox?minimal=true"><img src="https://img.shields.io/npm/dm/@lixianbin1/toolbox.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@lixianbin1/toolbox"><img src="https://img.shields.io/npm/v/@lixianbin1/toolbox.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@lixianbin1/toolbox"><img src="https://img.shields.io/npm/l/@lixianbin1/toolbox.svg?sanitize=true" alt="License"></a>
</p>

[En](./README.md)

### 文档

Document ：https://lixianbin1.github.io/toolBox/

### 安装

```sh
yarn add @lixianbin1/toolbox  # npm install @lixianbin1/toolbox
```

### 使用

```js
import { deepClone } from "@lixianbin1/toolbox"
let obj={
  name:"myme",
  children:{
    name:"jack"
  },
}
let newObj=deepClone(obj)
```