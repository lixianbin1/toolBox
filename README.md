A integrate common functions or unusual function plug-in Libraries，a toolbox that belongs to me
一个集成常用函数或不常用函数的插件库，一个属于我的工具箱

## toolBox

I will integrate some common functions, my own functions, and expect them to become bigger
我会集成一些常见的函数，自己的函数，期待它的变大

### installation 安装

```sh
yarn add @lixianbin1/toolbox  # npm install @lixianbin1/toolbox
```

### Getting started 使用

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

### Document 文档

Document ：https://lixianbin1.github.io/toolBox/