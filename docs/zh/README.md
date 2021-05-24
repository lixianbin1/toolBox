---
home: true
heroImage: /img/logo01.png
heroText: toolbox
tagline: 一个用于集成常用函数或不常用的函数插件库
actionText: 快速上手 →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2021-present Evan You
---

### 简单使用

```sh
npm install @lixianbin1/toolbox
```

```javascript
import { deepClone } from '@lixianbin1/toolbox'
// 深拷贝
let obj = { name: "名字", ace: "16" }
let copy = deepClone( obj )
```