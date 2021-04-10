// 定义防抖动函数
export function debounce(fanc,delay){
  let timer = null
  // 返回一个立即执行函数
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fanc.apply(this,args)
    },delay)
  }
}

// 将时间戳转换为常见日期格式

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
// 时间格式化
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}
