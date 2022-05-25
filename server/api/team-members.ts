import type { ITeamMember } from '~~/types'

const teamMembers: ITeamMember[] = [
  {
    name: 'Hongbusi',
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    tag: 'Creator',
    address: 'Hangzhou, China',
    link: 'https://hongbusi.github.io',
    githubLink: 'https://github.com/Hongbusi',
    twitterLink: 'https://twitter.com/Hongbusi'
  },
  {
    name: 'TickHeart',
    avatar: 'https://avatars.githubusercontent.com/u/66043405?v=4',
    tag: 'Core',
    address: 'Hebei, China',
    githubLink: 'https://github.com/TickHeart'
  },
  {
    name: 'alexzhang1030',
    avatar: 'https://avatars.githubusercontent.com/u/49969959?v=4',
    tag: 'Core',
    address: 'Beijing, China',
    githubLink: 'https://github.com/alexzhang1030',
    twitterLink: 'https://twitter.com/AlanBro23'
  },
  {
    name: 'zgsgs',
    avatar: 'https://avatars.githubusercontent.com/u/22882957?v=4',
    tag: 'Core',
    address: 'Shanghai, China',
    githubLink: 'https://github.com/zgsgs'
  },
  {
    name: 'RainyNight9',
    avatar: 'https://avatars.githubusercontent.com/u/20129035?v=4',
    tag: 'Core',
    address: 'Beijing, China',
    link: 'https://RainyNight9.github.io',
    githubLink: 'https://github.com/RainyNight9'
  },
  {
    name: 'Crush',
    avatar: 'https://avatars.githubusercontent.com/u/53544980?v=4',
    tag: 'Core',
    address: 'Hangzhou, China',
    githubLink: 'https://github.com/CoderCrush'
  },
  {
    name: 'chenfan',
    avatar: 'https://avatars.githubusercontent.com/u/83797583?v=4',
    tag: 'Core',
    address: 'Guangzhou, China',
    githubLink: 'https://github.com/chenfan0'
  },
  {
    name: 'Hankai Xia',
    avatar: 'https://avatars.githubusercontent.com/u/8510146?v=4',
    tag: 'Core',
    address: 'Shanghai, China',
    githubLink: 'https://github.com/masterX89'
  },
  {
    name: 'Lo',
    avatar: 'https://avatars.githubusercontent.com/u/50254496?v=4',
    tag: 'Core',
    address: 'Wuxi, China',
    githubLink: 'https://github.com/LoTwT'
  },
  {
    name: 'chris-zhu',
    tag: 'Core',
    address: 'Chengdu, China',
    link: 'http://zyob.top',
    githubLink: 'https://github.com/chris-zhu'
  },
  {
    name: 'luckept',
    tag: 'Core',
    avatar: 'https://avatars.githubusercontent.com/u/83466315?v=4',
    address: 'Chengdu, China',
    githubLink: 'https://github.com/luckept',
    twitterLink: 'https://twitter.com/coderLuckept'
  }
]

export default defineEventHandler(() => {
  return teamMembers
})
