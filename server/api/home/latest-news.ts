interface News {
  title: string
  link: string
  time: string
}

const withPrefix = (s: string) => `https://github.com/developer-plus/${s}`

export default defineEventHandler<News[]>(() => [
  {
    title: '周刊 - 第 9 期',
    time: '2022-07-11',
    link: withPrefix('weekly/blob/main/docs/weekly-9.md')
  },
  {
    title: '周刊 - 第 8 期 ：Vue2.7 尝鲜，代号 “Naruto”。',
    time: '2022-07-04',
    link: withPrefix('weekly/blob/main/docs/weekly-8.md')
  },
  {
    title: '周刊 - 第 7 期 ： Facebook 标志的故事。',
    time: '2022-06-27',
    link: withPrefix('weekly/blob/main/docs/issue-7.md')
  }
])
