<script lang="ts" setup>
import { PAGE_SIZE } from '~~/constants'
import type { FetchTodoListParams } from '~~/types'

const pageOptions = {
  title: '开发计划',
  subtitle: 'Plans',
  description: '任务发布与领取',
  btnLink: 'https://github.com/developer-plus/plans/issues/new/choose',
  btnText: '新增计划',
  githubLink: 'https://github.com/developer-plus/plans'
}

const params: FetchTodoListParams = reactive({
  page: 1,
  per_page: PAGE_SIZE,
  assignee: 'none',
  state: 'closed',
  labels: 'ToDo'
})

const { data: todoList, pending, refresh } = await useFetch('/api/plans', { params })

const isPrev = computed(() => {
  return params.page <= 1
})
const isNext = computed(() => {
  return todoList.value.length < PAGE_SIZE
})

async function perPage() {
  params.page -= 1
  refresh()
}
async function nextPage() {
  params.page += 1
  refresh()
}

const tabs = ['Pending', 'Processing', 'Done']
const tabIndex = ref(0)
const setTab = (index) => {
  tabIndex.value = Number(index)
  switch (index) {
    case 0:
      params.assignee = 'none'
      refresh()
      break
    case 1:
      params.assignee = '*'
      refresh()
      break
    case 2:
      params.assignee = '*'
      params.state = 'closed'
      params.labels = 'Finish'
      refresh()
      break
    default:
      refresh()
      break
  }
}
</script>

<template>
  <page-wrapper v-bind="pageOptions">
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
  </page-wrapper>
</template>
