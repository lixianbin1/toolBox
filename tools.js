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


// 时间格式：将时间的格式转换为标准格式输出。
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
    if(Object.prototype.hasOwnProperty.call(source,keys)){
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

export default {throttle,prevent,toMoney,newDate,closeWin,deepClone}