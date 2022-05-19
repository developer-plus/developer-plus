<template>
  <main class="flex px-10 mx-auto w-1500px">
    <nav-bar />

    <div class="flex-1 flex justify-center">
      <div class="mx-32px w-700px">
        <banner />
        <slot />
      </div>
    </div>

    <sidebar />
  </main>
</template>
