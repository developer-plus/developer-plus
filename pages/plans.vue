<script lang="ts" setup>
import { fetchTodoList } from '~~/api'
import type { TodoItem } from '~~/types'

const tabs = ['Pending', 'Processing', 'Done']
const tabIndex = ref(0)
const setTab = (index) => {
  tabIndex.value = Number(index)
}

const todoList = ref<TodoItem[]>([])
onMounted(async () => {
  const result = await fetchTodoList().then(r => r.json())
  todoList.value = result
})
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
          <ul class="tab-wrapper flex flex-row justify-between rounded-md bg-light-500">
            <li v-for="(tab, index) in tabs" :key="index" class="tab-item" :class="{ 'tab-item--active': tabIndex === index }" @click="setTab(index)">
              {{ tab }}
            </li>
          </ul>
        </section>
        <section>
          <ul class="todo-list my-4">
            <li v-for="todo in todoList" :key="todo.number" class="todo-item my-4">
              <todo-item :number="todo.number" :title="todo.title" :time="todo.updated_at" :url="todo.html_url" :locked="todo.locked" :state="todo.state" />
            </li>
          </ul>
        </section>
      </article>
    </main>

    <footer class="absolute right-10 bottom-4">
      <div class="flex flex-row justify-end items-center gap-2">
        <button class="btn">
          上一页
        </button>
        <button class="btn">
          下一页
        </button>
      </div>
    </footer>
  </div>
</template>
