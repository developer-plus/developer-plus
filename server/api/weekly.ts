import type { IWeeklyData } from '~~/types'

const weeklyDataList: IWeeklyData[] = [
  {
    title: '第 5 期 ： iconfont 回来了',
    time: '2022-06-13',
    link: 'https://github.com/developer-plus/weekly/blob/main/docs/issue-5.md'
  },
  {
    title: '第 4 期 ： developer-plus 公众号上线了',
    time: '2022-06-06',
    link: 'https://github.com/developer-plus/weekly/blob/main/docs/issue-4.md'
  },
  {
    title: '第 3 期 ： 六周年快乐',
    time: '2022-05-30',
    link: 'https://github.com/developer-plus/weekly/blob/main/docs/issue-3.md'
  },
  {
    title: '第 2 期 ： developer-plus 官网上线了',
    time: '2022-05-23',
    link: 'https://github.com/developer-plus/weekly/blob/main/docs/issue-2.md'
  },
  {
    title: '第 1 期 ： 梦开始的地方',
    time: '2022-05-16',
    link: 'https://github.com/developer-plus/weekly/blob/main/docs/issue-1.md'
  }
]

export default defineEventHandler<{ data: IWeeklyData[] }>(() => ({
  data: weeklyDataList
}))
