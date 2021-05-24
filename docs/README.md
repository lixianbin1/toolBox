---
home: true
heroImage: /img/logo01.png
heroText: toolbox
tagline: A integrate common functions or unusual function plug-in Libraries
actionText: Get started quickly →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2021-present Evan You
---

### 简单使用

```sh
npm install @lixianbin1/toolbox
```

```javascript
import { deepClone } from '@lixianbin1/toolbox'
// Deep copy
let obj = { name: "name", ace: "16" }
let copy = deepClone( obj )
```