// 获取时间范围对象，time为时间（默认为当前时间），haveTime为需要具体时间，表示是否需要补全时分秒
// type为时间类型，默认为'd'：当天 ；'w'：本周 ； 'lw'：上周 ；'m'：本月 ；'lm'：上月
export function getRangeDayObject(time = new Date(), type = 'd', haveTime = false) {
  // 时间范围对象
  const timeObj = {
    startTime: null,
    endTime: null
  }

  // 获取时间各个参数
  const dateTime = new Date(time)
  const theYear = dateTime.getFullYear()
  const theMonth = dateTime.getMonth()
  const theDay = dateTime.getDate()
  const theWeek = dateTime.getDay()

  // 根据类型不同，返回不同的日期区间（周是从一到日）
  switch (type) {
    case 'w':
      // 当前周起止日期
      timeObj.startTime = dateFormat(new Date(theYear, theMonth, theDay - theWeek + 1))
      timeObj.endTime = dateFormat(new Date(theYear, theMonth, theDay + (7 - theWeek)))
      break
    case 'lw':
      // 上一周起止日期
      timeObj.startTime = dateFormat(new Date(theYear, theMonth, theDay - theWeek - 6))
      timeObj.endTime = dateFormat(new Date(theYear, theMonth, theDay - theWeek))
      break
    case 'm':
      // 当前月起止日期
      timeObj.startTime = dateFormat(new Date(theYear, theMonth, 1))
      timeObj.endTime = dateFormat(new Date(theYear, theMonth + 1, 0))
      break
    case 'lm':
      // 上个月起止日期
      timeObj.startTime = dateFormat(new Date(theYear, theMonth - 1, 1))
      timeObj.endTime = dateFormat(new Date(theYear, theMonth, 0))
      break
    default:
      // 默认返回今日
      timeObj.startTime = dateFormat(dateTime)
      timeObj.endTime = dateFormat(dateTime)
  }

  // 如果是需要补全时分秒，则进行拼接补全时间
  if (haveTime) {
    timeObj.startTime = timeObj.startTime + ' 00:00:00'
    timeObj.endTime = timeObj.endTime + ' 23:59:59'
  }

  return timeObj
}