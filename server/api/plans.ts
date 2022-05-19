import { PAGE_SIZE } from './../../constants/index'
import type { TodoItem } from '~~/types'

interface Assignee {
  avatar_url: string
  login: string
}

interface Response {
  number: number
  updated_at: string
  title: string
  locked: boolean
  html_url: string
  state: 'all' | 'open' | 'closed'
  assignee: Assignee | null
}

const ISSUES_URL = 'https://api.github.com/repos/developer-plus/plans/issues'

export default defineEventHandler(async (event) => {
  const { assignee = 'none', page = 1, per_page = PAGE_SIZE, state = 'all', labels = 'ToDo' } = useQuery(event)
  const params = { assignee, page, per_page, state, labels }
  const response: Response[] = await $fetch(ISSUES_URL, { params })
  const _response: TodoItem[] = response.map((todo) => {
    const {
      number,
      updated_at: time,
      title,
      locked,
      html_url: url,
      state,
      assignee
    } = todo

    return {
      number,
      time,
      title,
      locked,
      state,
      url,
      avatar: assignee && assignee.avatar_url,
      name: assignee && assignee.login
    }
  })
  return _response
})
