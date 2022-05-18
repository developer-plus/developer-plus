import { ISSUES_URL, defaultPageSize } from '../constants'

export interface FetchTodoListForm {
  assignee?: string
  state?: string
  labels?: string
  perPage?: number
  page?: number
}

export const fetchTodoList = async (form: FetchTodoListForm = {}) => {
  const { assignee = 'none', state = 'all', labels = 'ToDo', perPage = defaultPageSize, page = 1 } = form
  const url = `${ISSUES_URL}?assignee=${assignee}&state=${state}&labels=${labels}&per_page=${perPage}&page=${page}`
  return fetch(url)
}
