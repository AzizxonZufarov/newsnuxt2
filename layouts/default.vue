<template>
    <div>
<header class="shadow-sm bg-white">
  <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Home</NuxtLink>

  </nav>
</header>
    <div class="container mx-auto p-4">
        <slot />
    </div>
    </div>
</template>
<style scoped>
  .router-link-exact-active{
    color:#12b488;
  }
</style>
