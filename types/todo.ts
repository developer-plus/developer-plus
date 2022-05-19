export interface FetchTodoListParams {
  assignee?: string
  state?: string
  labels?: string
  per_page?: number
  page?: number
}

export interface TodoItem {
  number: number
  time: string
  title: string
  locked: boolean
  state: 'open' | 'closed' | 'all'
  url: string
  avatar?: string
  name?: string
}
