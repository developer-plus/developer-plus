import { ISSUES_URL } from '../constants'

interface FetchTodoListForm {
  state?: string
  labels?: string
}

export const fetchTodoList = async (form: FetchTodoListForm = {}) => {
  const { state = 'all', labels = 'ToDo' } = form
  const url = `${ISSUES_URL}?state=${state}&labels=${labels}`
  return fetch(url)
}
