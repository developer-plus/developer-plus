interface Project {
  name: string
  link: string
  description: string
}

const withPrefix = (s: string) => `https://github.com/developer-plus/${s}`

export default defineEventHandler<Project[]>(() => [
  {
    name: 'developer-plus',
    link: withPrefix('developer-plus'),
    description: 'developer-plus 官网。'
  },
  {
    name: 'amcss',
    link: withPrefix('amcss'),
    description: 'A minimalistic atomic css framework.'
  },
  {
    name: 'mini-unocss',
    link: withPrefix('mini-unocss'),
    description: '一个即时按需的原子 CSS 引擎，unocss 的 mini 版本。'
  },
  {
    name: 'vue-hbs-admin',
    link: withPrefix('vue-hbs-admin'),
    description: '为后台管理系统提供现成的开箱解决方案及丰富的示例，提高开发效率。'
  }
])
