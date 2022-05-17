<template>
  <main class="flex px-10 mx-auto w-1500px">
    <div class="sticky top-0 w-80px h-screen border-r border-gray-200 bg-green">
      nav
    </div>

    <div class="flex-1 flex justify-center bg-red">
      <div class="mx-32px max-w-700px bg-white">
        <slot />
      </div>
    </div>

    <div class="px-32px w-380px min-h-screen border-l border-gray-200 bg-yellow">
      developer-plus
      <dark-toggle />
    </div>
  </main>
</template>
