export interface TodoItem {
  number: number
  updated_at: string
  title: string
  locked: boolean
  html_url: string
  state: 'open' | 'closed' | 'all'
}
