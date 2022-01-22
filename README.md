# toolBox

一个集成常用函数或不常用函数的插件库，我会集成一些常见的函数，自己的函数，期待它的变大

<p align="center">
  <a href="https://npmcharts.com/compare/@lixianbin1/toolbox?minimal=true"><img src="https://img.shields.io/npm/dm/@lixianbin1/toolbox.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@lixianbin1/toolbox"><img src="https://img.shields.io/npm/v/@lixianbin1/toolbox.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@lixianbin1/toolbox"><img src="https://img.shields.io/npm/l/@lixianbin1/toolbox.svg?sanitize=true" alt="License"></a>
</p>

[En](./README_en.md) 

### 文档

文档 ：https://lixianbin1.github.io/toolBox/

[更新日志](./log/README_zh-cn.md)

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

## 介绍

`master` 分支作为主分支，项目的文档和介绍都会放在里面；`package`分支则用于包的编辑和维护；`gh-pages`则用于项目文档的展示工作；

- master

文档通过 `vuepress` 进行生成； docs 文件夹是 `vuepress` 的各项配置和文档文件；

#### 命令

```
yarn docs:dev 启动vuepress文档服务器

yarn docs:build 打包文档

yarn push 集成打包命令:打包并推送到Github
```
