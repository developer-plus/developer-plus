import type { ITeamMember } from '~~/types'

const teamMembers: ITeamMember[] = [
  {
    name: 'Hongbusi',
    avatar: 'https://www.github.com/Hongbusi.png',
    tag: 'Creator',
    address: 'Hangzhou, China',
    link: 'https://hongbusi.github.io',
    githubLink: 'https://github.com/Hongbusi',
    twitterLink: 'https://twitter.com/Hongbusi'
  },
  {
    name: 'TickHeart',
    avatar: 'https://www.github.com/TickHeart.png',
    tag: 'Core',
    address: 'Hangzhou, China',
    link: 'https://hongbusi.github.io',
    githubLink: 'https://github.com/TickHeart',
    twitterLink: 'https://twitter.com/Hongbusi'
  },
  {
    name: 'alexzhang1030',
    avatar: 'https://www.github.com/alexzhang1030.png',
    tag: 'Core',
    address: 'Hangzhou, China',
    link: 'https://hongbusi.github.io',
    githubLink: 'https://github.com/alexzhang1030',
    twitterLink: 'https://twitter.com/Hongbusi'
  },
  {
    name: 'chris-zhu',
    avatar: 'https://www.github.com/chris-zhu.png',
    tag: 'Core',
    address: 'Chengdu, China',
    link: 'http://zyob.top',
    githubLink: 'https://github.com/chris-zhu',
    twitterLink: ''
  }
]

export default defineEventHandler(() => {
  return teamMembers
})
