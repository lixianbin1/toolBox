---
sidebar: auto
---
# API

## Basic function

### Deep clone

#### deepClone(source)

source: Complex objects that need to be copied can be objects or arrays

Deep copy, which copies the specified complex object, is to prevent data exception caused by the same memory address of data

```
const oldObj
const newObj=deepClone(oldObj)
```

## Functional function

### Anti chattering and throttling

#### prevent(fun,time)

fun:Functions to be executed time:time interval

Anti shake function, in the set time, if it is triggered again, it will time again. This is to prevent malicious multiple triggers.
```
prevent(()=>{
    console.log('look!')
},100)
```

#### throttle(fun,time)

fun:Functions to be executed time:time interval

Throttling function can only be executed once in the set time, which is to prevent multiple triggers.
```
throttle(()=>{
    console.log('look!')
},100)
```

### format conversion

#### newDate(time)

time:Data that can be formatted by time

Convert time output to common time format for output, such as: 2020-10-08 02:02

```
const oldTime='2020/10/10 17:30' // or 1602268200000
const newTime=newDate(oldTime)
```
#### toMoney(num)

num:It needs to be numbers

Transfer function; Converts a number to a 3-digit string separated by commas

```
const money=toMoney(24535412)
```

## Uncommon functions

### close window

#### closeWin()

Close function: close the current browser window

```
closeWin()
```