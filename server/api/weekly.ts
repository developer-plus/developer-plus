import type { IWeeklyData } from '~~/types'

const weeklyDataList: IWeeklyData[] = [{
  title: '第 1 期 ： 梦开始的地方',
  time: '2022-05-16',
  link: 'https://github.com/developer-plus/weekly/blob/main/docs/issue-1.md'
}]

export default defineEventHandler<{ data: IWeeklyData[] }>(() => ({
  data: weeklyDataList
}))
