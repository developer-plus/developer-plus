<script lang="ts" setup>
import type { FetchTodoListForm } from '~~/api'
import { fetchTodoList } from '~~/api'
import { defaultPageSize } from '~~/api/constants'
import type { TodoItem } from '~~/types'

const tabs = ['Pending', 'Processing', 'Done']
const tabIndex = ref(0)
const setTab = (index) => {
  tabIndex.value = Number(index)
  switch (index) {
    case 0:
      getTodoList({ assignee: 'none' })
      break
    case 1:
      getTodoList({ assignee: '*' })
      break
    case 2:
      getTodoList({ state: 'closed' })
      break
    default:
      getTodoList()
      break
  }
}

const todoList = ref<TodoItem[]>([])
async function getTodoList(data: FetchTodoListForm = {}) {
  const { assignee = '*', page = 1, state = 'all' } = data
  const form = {
    assignee,
    page,
    state
  }
  const result = await fetchTodoList(form).then(r => r.json())
  if (Array.isArray(result)) {
    const _result = result.map((todo) => {
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
    todoList.value = _result
  }
}

onMounted(async () => {
  await getTodoList()
})

const page = ref(1)
const isPrev = computed(() => {
  return page.value <= 1
})
const isNext = computed(() => {
  return todoList.value.length < defaultPageSize
})
async function perPage() {
  page.value -= 1

  await getTodoList({ page: page.value })
}
async function nextPage() {
  page.value += 1

  await getTodoList({ page: page.value })
}
</script>

<template>
  <div class="plans">
    <header class="my-10">
      <span class="title text-2xl mr-2">开发计划</span>
      <span class="sub-title text-base text-gray-400">Plans</span>
    </header>

    <main>
      <article>
        <section>
          <div class="flex space-x-1 rounded-xl p-1 bg-blue-300/20 dark:bg-blue-500/20">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              class="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 dark:text-blue-500 dark:hover:text-blue-800 ring-white ring-opacity-60 ring-offset-2 ring-offset-light-blue-500 ring-offset-sky-300 focus:outline-none focus:ring-2"
              :class="[
                tabIndex === index
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.4] hover:text-blue-500'
              ]"
              @click="setTab(index)"
            >
              {{ tab }}
            </button>
          </div>
        </section>
        <section>
          <ul class="todo-list my-4">
            <li v-for="todo in todoList" :key="todo.number" class="my-4">
              <todo-item v-bind="todo" />
            </li>
          </ul>
        </section>
      </article>
    </main>

    <footer>
      <div class="flex flex-row justify-end items-center gap-2">
        <button class="btn-primary" :class="{ 'cursor-not-allowed': isPrev }" :disabled="isPrev" @click="perPage">
          上一页
        </button>
        <button class="btn-primary" :class="{ 'cursor-not-allowed': isNext }" :disabled="isNext" @click="nextPage">
          下一页
        </button>
      </div>
    </footer>
  </div>
</template>
