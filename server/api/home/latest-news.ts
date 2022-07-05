interface News {
  title: string
  link: string
  time: string
}

const withPrefix = (s: string) => `https://github.com/developer-plus/${s}`

export default defineEventHandler<News[]>(() => [
  {
    title: '周刊 - 第 8 期 ：Vue2.7 尝鲜，代号 “Naruto”。',
    time: '2022-06-13',
    link: withPrefix('weekly/blob/main/docs/weekly-8.md')
  },
  {
    title: '周刊 - 第 7 期 ： Facebook 标志的故事。',
    time: '2022-06-27',
    link: withPrefix('weekly/blob/main/docs/issue-7.md')
  },
  {
    title: '周刊 - 第 6 期 ： 一个轻量的 canvas 库',
    time: '2022-06-20',
    link: withPrefix('weekly/blob/main/docs/issue-6.md')
  }
])
