# method

## 基础函数

### 时间相关

#### getTimes()

获取当前时间(时分秒)，时间格式 HH:MM:SS

```js
import { getTimes } from "@lixianbin1/toolbox";
...
const newTimes = getTimes()
```

#### getTime()

获取当前时间(时分)，时间格式 HH:MM

```js
import { getTime } from "@lixianbin1/toolbox";
...
const newTime = getTime()
```

#### getDay(str)

str:时间格式用于分隔的特殊字段;默认是 `-`

获取当前时间(年月日)，时间格式 YY-MM-DD

```js
import { getDay } from "@lixianbin1/toolbox";
...
const newDay = getDay()
```

#### getDate()

获取当前时间(年月日时分秒)，时间格式 YY-MM-DD HH:MM:SS

```js
import { getDate } from "@lixianbin1/toolbox";
...
const newDate = getDate()
```

#### newDate(time)

time:可以被时间格式化的数据

转换时间输出，转换成常见的时间格式进行输出，如：2020-10-08 02:02

```js
import { newDate } from "@lixianbin1/toolbox";
...
const oldTime='2020/10/10 17:30' // or 1602268200000
const newTime=newDate(oldTime)
```

## 功能性函数

### 深度克隆

#### deepClone(source)

source:需要拷贝的复杂对象，可以是对象或者数组

深拷贝，拷贝指定的复杂对象，这是为了防止数据的内存地址一样导致的数据异常

```js
import { deepClone } from "@lixianbin1/toolbox";
...
const oldObj={name:"myname"}
const newObj=deepClone(oldObj)
```

### 防抖节流

#### prevent(fun,time)

fun:需要执行的函数 time:防抖的时间间隔

防抖函数，在设定的时间内，如果再次触发，则会重新计时。这是为了防止恶意多次触发。
```js
import { prevent } from "@lixianbin1/toolbox";
...
prevent(()=>{
    console.log('look!')
},100)
```

#### throttle(fun,time)

fun:需要执行的函数 time:节流的时间间隔

节流函数，在设定的时间内仅允许执行一次，这是为了防止多次触发。
```js
import { throttle } from "@lixianbin1/toolbox";
...
throttle(()=>{
    console.log('look!')
},100)
```

### 金钱格式转换

#### toMoney(num)

num:需要是数字

转换函数；将数字转换为 以3位数字并以逗号为间隔的字符串并省略小数点后三位

```js
import { toMoney } from "@lixianbin1/toolbox";
...
const money=toMoney(24535412.123122)   //24,535,412.123
```

### 关闭窗口

#### closeWin()

关闭函数：关闭当前浏览器窗口窗口

```js
import { closeWin } from "@lixianbin1/toolbox";
...
closeWin()
```