// 节流函数； throttle(fun,time)  fun:需要执行的函数 time:节流的时间间隔
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

// 防抖函数： prevent(fun,time) fun:需要执行的函数 time:抖动的时间间隔
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

// 转换函数；将数字转换为 以3位数字并以逗号为间隔的字符串
export function toMoney(num){
  return parseFloat(num).toLocaleString();
}

// 处理时间格式，起始和结束
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
export function getTimes(type=":"){ //获取时分秒
  var a= new Date();
  var h=a.getHours();
  var f=a.getMinutes();
  var s=a.getSeconds();
  h<10?h="0"+h:h=h;
  f<10?f="0"+f:f=f;
  s<10?s="0"+s:s=s;
  return h+type+f+type+s+""
}
export function getTime(type=":"){ //获取时分
  var a= new Date();
  var h=a.getHours();
  var f=a.getMinutes();
  h<10?h="0"+h:h=h;
  f<10?f="0"+f:f=f;
  return h+type+f+""
}
export function getDay(type="-"){ //获取年月日
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
export function getDate(){ //获取年月日时分秒
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
export function manyMonth(time1,time2){ //获取两个时间相隔多少月
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
export function manyDay(time1,time2){ //获取两个时间相隔多少天
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

export function leapyear(year){ //计算是否是闰年
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

// 关闭函数：关闭当前窗口
export function closeWin(){
  window.opener=null;
  window.open('','_self');
  window.close();
}

// 深拷贝函数：deepClone(source) source:被拷贝的复杂对象
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

//反编译函数：防止用户通过断点调试
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