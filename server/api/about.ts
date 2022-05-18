import type { IContributor, IMember } from '~~/types'

export const coreMembers: IMember[] = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    position: '发起人',
    sign: '心若不动，风又奈何',
    github: 'https://github.com/Hongbusi'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/49969959?v=4',
    name: 'alexzhang1030',
    position: '核心成员',
    sign: '心若不动，风又奈何',
    github: ''
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/66043405?v=4',
    name: 'TickHeart',
    position: '核心成员',
    sign: '心若不动，风又奈何',
    github: ''
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/20129035?v=4',
    name: 'RainyNight9',
    position: '核心成员',
    sign: '心若不动，风又奈何',
    github: ''
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/22882957?v=4',
    name: 'zgsgs',
    position: '核心成员',
    sign: '心若不动，风又奈何',
    github: ''
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/53544980?v=4',
    name: 'CoderCrush',
    position: '核心成员',
    sign: '心若不动，风又奈何',
    github: ''
  }
]

export const contributor: IContributor[] = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    github: 'https://github.com/Hongbusi'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    github: 'https://github.com/Hongbusi'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    github: 'https://github.com/Hongbusi'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    github: 'https://github.com/Hongbusi'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    github: 'https://github.com/Hongbusi'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    github: 'https://github.com/Hongbusi'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    github: 'https://github.com/Hongbusi'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    github: 'https://github.com/Hongbusi'
  }
]

export default defineEventHandler<{
  coreMembers: IMember[]
  contributor: IContributor[]
}>(() => ({
  coreMembers,
  contributor
}))
