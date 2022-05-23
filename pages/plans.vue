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
const todoStore = ref({})
const todoPlans = ref([])
const tabs = ['Pending', 'Processing', 'Done']
const pageSaver = ref([1, 1, 1])
const tabIndex = ref(0)
const currentPageIndex = ref(0)
const isNoMoreValue = ref([false, false, false])

const fetchData = async (labels, type) => {
  const { data: todoList } = await useFetch('/api/plans', {
    params: {
      state: 'all',
      labels,
      page: pageSaver.value[type],
      per_page: PAGE_SIZE
    } as FetchTodoListParams
  })
  if (todoList && todoList.value && todoList.value.length > 0) {
    if (!todoStore.value[type])
      todoStore.value[type] = []
    const todoStoreLength = todoStore.value[type].length
    // 新 todo 和旧 todo 数组去重
    todoStore.value[type].splice(0, todoStoreLength, ...unique([...todoStore.value[type], ...todoList.value]))
    // 判断去重前后的个数是否一致，如果一致则暴力认为没有更新的数据了
    if (todoStore.value[type].length === todoStoreLength)
      isNoMoreValue.value[type] = true
    // 根据当前的个数设置下一次请求第几页
    pageSaver.value[type] = Math.ceil(todoStore.value[type].length / PAGE_SIZE) < 1 ? 1 : Math.ceil(todoStore.value[type].length / PAGE_SIZE) + 1
  }
  else {
    isNoMoreValue.value[type] = true
  }
}

function unique(arr) {
  const newObj = {}
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!newObj[arr[i].number]) {
      newObj[arr[i].number] = true
      newArr.push(arr[i])
    }
  }
  return newArr
}

const handleTabChange = (index) => {
  if (currentPageIndex.value === index)
    return
  currentPageIndex.value = index === -1 ? 0 : index
  todoPlans.value = todoStore.value[index === -1 ? 0 : index]
}

const resetStatus = () => {
  isNoMoreValue.value.splice(0, 3, ...[false, false, false])
  pageSaver.value.splice(0, 3, ...[1, 1, 1])
}

const doFetch = async () => {
  resetStatus()
  fetchData(tabs[0], 0).then(() => { handleTabChange(-1) })
  fetchData(tabs[1], 1)
  fetchData(tabs[2], 2)
}
doFetch()

const setTab = (index) => {
  tabIndex.value = Number(index)
  handleTabChange(index)
}

const queryMoreTodo = () => {
  fetchData(tabs[currentPageIndex.value], currentPageIndex.value)
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
          <ul class="todo-list my-4">
            <li v-for="todo in todoPlans" :key="todo.number" class="my-4">
              <todo-item v-bind="todo" />
            </li>
          </ul>
        </section>
      </article>
    </main>

    <div class="mt-36px text-center opacity-70">
      <p v-if="isNoMoreValue[currentPageIndex]">
        没有更多了...
      </p>
      <p v-else class="cursor-pointer" @click="queryMoreTodo">
        加载更多...
      </p>
    </div>
  </page-wrapper>
</template>

