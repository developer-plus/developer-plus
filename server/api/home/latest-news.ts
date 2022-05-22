interface News {
  title: string
  link: string
  time: string
}

const withPrefix = (s: string) => `https://github.com/developer-plus/${s}`

export default defineEventHandler<News[]>(() => [
  {
    title: 'developer-plus 官网发布了～',
    link: withPrefix('developer-plus'),
    time: '2022-05-23'
  },
  {
    title: 'mini-unocss 更名为 amcss，目前已进入开发阶段。',
    link: withPrefix('amcss'),
    time: '2022-05-21'
  },
  {
    title: '周刊 - 第 1 期：梦开始的地方。',
    link: withPrefix('weekly/blob/main/docs/issue-1.md'),
    time: '2022-05-16'
  }
])
