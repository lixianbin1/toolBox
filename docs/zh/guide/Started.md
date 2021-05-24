# 快速上手

本文会为你快速介绍一下toolbox 的应用过程

### toolbox 的使用

1：安装 toolbox

```sh
yarn add @lixianbin1/toolbox # npm install @lixianbin1/toolbox
```

2：在项目中引用 toolbox

```javascript
import toolbox from '@lixianbin1/toolbox'

// 深拷贝
let obj = { name: "名字", ace: "16" }
let copy = toolbox.deepClone( obj )
```

之后你就可以尽情在页面中享受toolbox 带来的多函数应用；