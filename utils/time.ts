/**
 * @description: 把时间戳转为文字描述
 * @access: public
 * @param timestamp 时间戳
 * @return {*}
 */
export function timeFormat(timestamp) {
  const mistiming = Math.round((Date.now() - timestamp) / 1000)
  const unitArr = ['年', '个月', '周', '天', '小时', '分钟', '秒']
  const baseNumberArr = [31536000, 2592000, 604800, 86400, 3600, 60, 1]
  for (let i = 0; i < baseNumberArr.length; i++) {
    const result = Math.floor(mistiming / baseNumberArr[i])
    if (result !== 0)
      return `${result + unitArr[i]}前`
  }
}
