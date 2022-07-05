import type { IWeeklyData } from '~~/types'

const weeklyDataList: IWeeklyData[] = [
  {
    title: '第 8 期 ： Vue2.7 尝鲜，代号 “Naruto”',
    time: '2022-07-04',
    link: 'https://github.com/developer-plus/weekly/blob/main/docs/weekly-8.md'
  },
  {
    title: '第 7 期 ： Facebook 标志的故事',
    time: '2022-06-27',
    link: 'https://github.com/developer-plus/weekly/blob/main/docs/issue-7.md'
  },
  {
    title: '第 6 期 ： 一个轻量的 canvas 库',
    time: '2022-06-20',
    link: 'https://github.com/developer-plus/weekly/blob/main/docs/issue-6.md'
  },
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
