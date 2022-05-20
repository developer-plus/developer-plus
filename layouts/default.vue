<template>
  <main class="flex px-10 mx-auto min-w-1400px max-w-1500px">
    <nav-bar />

    <div class="flex-1 flex justify-center">
      <div class="mx-32px pb-48px w-700px">
        <banner />
        <slot />
      </div>
    </div>

    <sidebar />
  </main>
</template>
