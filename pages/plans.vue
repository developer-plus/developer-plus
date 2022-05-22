<script lang="ts" setup>
import { PAGE_SIZE } from '~/constants'
import type { FetchTodoListParams } from '~/types'

const pageOptions = {
  title: '开发计划',
  subtitle: 'Plans',
  description: 'developer-plus 待办事项列表。',
  btnLink: 'https://github.com/developer-plus/plans/issues/new/choose',
  btnText: '新增计划',
  githubLink: 'https://github.com/developer-plus/plans'
}

const params: FetchTodoListParams = reactive({
  page: 1,
  per_page: PAGE_SIZE,
  state: 'all',
  labels: 'Pending'
})

const { data: todoList, pending, refresh } = await useFetch('/api/plans', { params })

const tabs = ['Pending', 'Processing', 'Done']
const tabIndex = ref(0)

const setTab = (index) => {
  tabIndex.value = Number(index)
  switch (index) {
    case 0:
      params.labels = 'Pending'
      refresh()
      break
    case 1:
      params.labels = 'Processing'
      refresh()
      break
    case 2:
      params.labels = 'Done'
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
    <main class="relative">
      <article>
        <section>
          <div class="flex space-x-1 p-1 bg-primary">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              class="w-full rounded py-2.5 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2 ring-offset-light-blue-500 ring-offset-sky-300"
              :class="{ 'bg-white shadow dark:bg-gray-200/20': tabIndex === index }"
              @click="setTab(index)"
            >
              {{ tab }}
            </button>
          </div>
        </section>
        <section>
          <ul v-if="!pending" class="todo-list my-4">
            <li v-for="todo in todoList" :key="todo.number" class="my-4">
              <todo-item v-bind="todo" />
            </li>
          </ul>
        </section>
      </article>
    </main>

    <div class="mt-36px text-center opacity-70">
      <p v-if="pending">
        正在疯狂加载中...
      </p>
      <p v-else>
        没有更多了...
      </p>
    </div>
  </page-wrapper>
</template>
