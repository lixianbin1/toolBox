# method

## Basic functions

### Time related

#### getTimes()

Get the current time (hours, minutes and seconds), time format HH:MM:SS

```js
import {getTimes} from "@lixianbin1/toolbox";
...
const newTimes = getTimes()
```

#### getTime()

Get the current time (hours and minutes), time format HH:MM

```js
import {getTime} from "@lixianbin1/toolbox";
...
const newTime = getTime()
```

#### getDay(str)

str: The time format is used for special circumstances of the request; the default is `-`

Get the current time (year, month, day), time format YY-MM-DD

```js
import {getDay} from "@lixianbin1/toolbox";
...
const newDay = getDay()
```

#### getDate()

Get the current time (year, month, day, hour, minute, and second), time format YY-MM-DD HH:MM:SS

```js
import {getDate} from "@lixianbin1/toolbox";
...
const newDate = getDate()
```

#### New date (time)

time: data that can be formatted by time

Convert time output, convert to common time format for output, such as: 2020-10-08 02:02

```js
import {newDate} from "@lixianbin1/toolbox";
...
const oldTime='2020/10/10 17:30' // or 1602268200000
const newTime=newDate(oldTime)
```

## Functional function

### Deep Clone

#### deepClone (source code)

Source: The complex object that needs to be copied, which can be an object or an array

Deep copy, copy the specified simulation object, this is to prevent data abnormalities caused by the same memory address of the data

```js
Import {deepClone} from "@lixianbin1/toolbox";
...
const oldObj={name:"myname"}
const newObj=deepClone(oldObj)
```

### Anti-shake throttling

#### Prevent (fun, time)

fun: the function to be executed time: the time interval of anti-shake

The anti-shake function, during the set period of time, if triggered again, the time counts. This is to prevent malicious multiple triggers.
```js
Import from "@lixianbin1/toolbox" {block};
...
Prevent(()=>{
    console.log('Look!')
},100)
```

#### Throttle (fun, time)

fun: the function to be executed time: the time interval for throttling

The throttling function is only allowed to be executed once within the set validity period. This is to prevent multiple occurrences.
```js
Import {throttle} from "@lixianbin1/toolbox";
...
Throttle(()=>{
    console.log('Look!')
},100)
```

### Money format conversion

#### toMoney(num)

num: needs to be a number

Conversion function; convert the number into a string with 3 digits and small intervals and omit the guess after the number point

```js
Import from "@lixianbin1/toolbox" {toMoney };
...
const money=toMoney(24535412.123122) //24,535,412.123
```

### close the window

#### closeWin()

Close function: close the current browser window

```js
import {closeWin} from "@lixianbin1/toolbox";
...
Close win()
```