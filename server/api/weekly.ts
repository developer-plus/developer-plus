import type { IWeeklyData } from '~~/types'

export default defineEventHandler<{ data: IWeeklyData[] }>(() => ({
  data: [3, 2, 1].map(i => ({
    id: i,
    title: `第${i}期标题`,
    time: `2022-05-1${i + 5}`,
    link: `link${i}`
  }))
}))
