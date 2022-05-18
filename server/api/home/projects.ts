interface Project {
  name: string
  link: string
  description: string
}

const withPrefix = (s: string) => `https://github.com/developer-plus/${s}`

export default defineEventHandler<Project[]>(() => [
  {
    name: 'mini-unocss',
    link: withPrefix('mini-unocss'),
    description: '一个即时按需的原子 CSS 引擎，unocss 的 mini 版本。'
  },
  {
    name: 'resume',
    link: withPrefix('resume'),
    description: '一个开源免费的简历生成器。'
  },
  {
    name: 'vue-hbs-admin',
    link: withPrefix('vue-hbs-admin'),
    description: '为后台管理系统提供现成的开箱解决方案及丰富的示例，提高开发效率。'
  },
  {
    name: 'starter-nuxt3',
    link: withPrefix('starter-nuxt3'),
    description: '一个 Nuxt3 + unocss + TypeScript 的起手模板，由 developer-plus 创建。'
  }
])
