interface News {
  title: string
  link: string
  time: string
}

const withPrefix = (s: string) => `https://github.com/developer-plus/${s}`

export default defineEventHandler<News[]>(() => [
  {
    title: '周刊 - 第 6 期 ： 一个轻量的 canvas 库',
    time: '2022-06-20',
    link: withPrefix('weekly/blob/main/docs/issue-6.md')
  },
  {
    title: '周刊 - 第 5 期 ： iconfont 回来了。',
    time: '2022-06-13',
    link: withPrefix('weekly/blob/main/docs/issue-5.md')
  },
  {
    title: '周刊 - 第 4 期 ： developer-plus 公众号上线了。',
    time: '2022-06-06',
    link: withPrefix('weekly/blob/main/docs/issue-4.md')
  }
])
