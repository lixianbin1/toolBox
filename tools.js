/*
  name: prevent
  remarks: throttle(fun,time)  fun:需要执行的函数 time:节流的时间间隔
  author: lixianbin1
  update: 2022/04/26
*/
var isThro=true
export function throttle(fun,time){
  if(isThro){
    isThro=false
    setTimeout(function(){
      isThro=true
    },time)
    fun()
  }
}

/*
  name: prevent
  remarks: prevent(fun,time) fun:需要执行的函数 time:抖动的时间间隔
  author: lixianbin1
  update: 2022/04/26
*/
var isPrev=true,setTime
var setTimeFun=(time)=>{
  clearTimeout(setTime)
  setTime=setTimeout(()=>{
    isPrev=true
  },time)
}
export function prevent(fun,time){
  if(isPrev){
    isPrev=false
    setTimeFun(time)
    fun()
  }else{
    setTimeFun(time)
  }
}


/*
  name: toMoney
  remarks: 处理数据格式，将数字转换为 以3位数字并以逗号为间隔的字符串，符合人民币风格
  author: lixianbin1
  update: 2022/04/26
*/
export function toMoney(num){
  return parseFloat(num).toLocaleString();
}

/*
  name: timestampToTime
  remarks: 处理时间格式，根据后台规则，查询数据的时间需要时分秒，给予起始时间和结束时间，
  author: lixianbin1
  update: 2022/04/26
*/
export function timestampToTime(timestamp, type=1) {
  try{
    var date = new Date(timestamp);
    var Y = date.getFullYear() + "-";
    var M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";
    var D = date.getDate();
    if (type == 1) {
      return Y + M + D + " 00:00:00";
    } else {
      return Y + M + D + " 23:59:59";
    }
  }catch(err){
    console.error('Illegal parameter!')
  }
}


//时间相关

/*
  name: newDate
  remarks: 格式当前数据，生成符合中国的时间显示格式
  author: lixianbin1
  update: 2022/04/26
*/
export function newDate(time){
  var a= new Date();
  if(time){a=new Date(time)}
  var y=a.getFullYear();
  var m=a.getMonth()+1;
  var d=a.getDate();
  var h=a.getHours();
  var f=a.getMinutes();
  h<10?h="0"+h:h=h;
  f<10?f="0"+f:f=f;
  return y+"-"+m+"-"+d+" "+h+":"+f
}

/*
  name: getTimes
  remarks: 获取时分秒，时间字符串
  author: lixianbin1
  update: 2022/04/26
*/
export function getTimes(type=":"){
  var a= new Date();
  var h=a.getHours();
  var f=a.getMinutes();
  var s=a.getSeconds();
  h<10?h="0"+h:h=h;
  f<10?f="0"+f:f=f;
  s<10?s="0"+s:s=s;
  return h+type+f+type+s+""
}

/*
  name: getTime
  remarks: 获取时分，时间字符串
  author: lixianbin1
  update: 2022/04/26
*/
export function getTime(type=":"){
  var a= new Date();
  var h=a.getHours();
  var f=a.getMinutes();
  h<10?h="0"+h:h=h;
  f<10?f="0"+f:f=f;
  return h+type+f+""
}

/*
  name: getDay
  remarks: 获取年月日，时间字符串
  author: lixianbin1
  update: 2022/04/26
*/
export function getDay(type="-"){
  var a= new Date();
  var y=a.getFullYear();
  var m=a.getMonth()+1;
  var d=a.getDate();
  m<10?m="0"+m:m=m;
  d<10?d="0"+d:d=d;
  if(type){
    return y+type+m+type+d+""
  }
  return y+type+m+type+d+""
}

/*
  name: getDate
  remarks: 获取年月日时分秒，时间字符串
  author: lixianbin1
  update: 2022/04/26
*/
export function getDate(){
  var a= new Date();
  var y=a.getFullYear();
  var m=a.getMonth()+1;
  var d=a.getDate();
  var h=a.getHours();
  var f=a.getMinutes();
  var s=a.getSeconds();
  m<10?m="0"+m:m=m;
  d<10?d="0"+d:d=d;
  h<10?h="0"+h:h=h;
  f<10?f="0"+f:f=f;
  s<10?s="0"+s:s=s;
  return y+"-"+m+"-"+d+" "+h+":"+f+":"+s
}

/*
  name: manyYear
  remarks: 获取两个时间相隔多少年
  author: lixianbin1
  update: 2022/04/26
*/
export function manyYear(time1,time2){ //获取两个时间相隔多少年
  try{
    if (time1 && time2) {
      let c =
        (new Date(time2).getTime() - new Date(time1).getTime()) / 1000 / 60 / 60 / 24;
      let d=0
      while(c>1461){
        c-=1461
        d+=4
      }
      while(c>365){
        c-=365
        d+=1
      }
      return d
    }
  }catch(err){
    console.error('Illegal parameter!')
  }
}

/*
  name: manyMonth
  remarks: 获取两个时间相隔多少月
  author: lixianbin1
  update: 2022/04/26
*/
export function manyMonth(time1,time2){
  try{
    if (time1 && time2) {
      let c =
        (new Date(time2).getTime() - new Date(time1).getTime()) / 1000 / 60 / 60 / 24;
      let d=0
      while(c>1461){
        c-=1461
        d+=48
      }
      while(c>365){
        c-=365
        d+=12
      }
      while(c>30){
        c-=30
        d+=1
      }
      return d
    }
  }catch(err){
    console.error('Illegal parameter!')
  }
}

/*
  name: manyDay
  remarks: 获取两个时间相隔多少天
  author: lixianbin1
  update: 2022/04/26
*/
export function manyDay(time1,time2){
  try{
    if (time1 && time2) {
      let c =
        (new Date(time2).getTime() - new Date(time1).getTime()) / 1000 / 60 / 60 / 24;
      return c
    }
  }catch(err){
    console.error('Illegal parameter!')
  }
}

/*
  name: leapyear
  remarks: 计算是否是闰年
  author: lixianbin1
  update: 2022/04/26
*/
export function leapyear(year){
  if(new String(year).length==4){
    let a=year%100
    if(a>0){
      let b=year%4
      if(b>0){
        return false
      }else{
        return true
      }
    }else{
      let c=year%400
      if(c>0){
        return false
      }else{
        return true
      }
    }
  }else{
    console.error('Illegal parameter!')
  }
}

/*
  name: closeWin
  remarks: 关闭当前浏览器的窗口
  author: lixianbin1
  update: 2022/04/26
*/
export function closeWin(){
  window.opener=null;
  window.open('','_self');
  window.close();
}

/*
  name: deepClone
  remarks: 深拷贝，拷贝对象，且分配不同的内存地址；deepClone(source) source:被拷贝的复杂对象
  author: lixianbin1
  update: 2022/04/26
*/
export function deepClone(source){
  var targetObj = source.constructor === Array ? [] : {};
  for(let keys in source){
    if(source.hasOwnProperty(keys)){
      if(source[keys] && typeof source[keys] === 'object'){
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      }else{
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}

/*
  name: doLoop
  remarks: 防止用户通过浏览器打开控制台进行断点调试
  author: lixianbin1
  update: 2022/04/26
*/
export function doLoop(){
  let a="((function() { var callbacks = [],timeLimit = 50,open = false;setInterval(loop, 1);return {addListener: function(fn) {callbacks.push(fn);},cancleListenr: function(fn) {callbacks = callbacks.filter(function(v) {return v !== fn;});}}function loop() {var startTime = new Date();`+`d`+`e`+`b`+`u`+`g`+`g`+`e`+`r`+`;if (new Date() - startTime > timeLimit) {if (!open) {callbacks.forEach(function(fn) {fn.call(null);});}open = true;window.stop();window.location.reload();} else {open = false;}}})()).addListener(function() {window.location.reload();});"
  eval(a)
}

export default {
  closeWin,
  deepClone,
  doLoop,
  getTimes,
  getTime,
  getDay,
  getDate,
  prevent,
  throttle,
  timestampToTime,
  toMoney,
  newDate,
}