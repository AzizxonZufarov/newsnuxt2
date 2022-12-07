<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-5">
                <div class="p-12">
                <h2 class="text-4x1 my-7"><strong>Title:</strong> {{ story.title }}</h2>
                <p class="text-4x1 my-7"><strong>Date: </strong>{{ new Date(story.time*1000).getDate()}}/{{ new Date(story.time*1000).getMonth()+1}}/{{ new Date(story.time*1000).getFullYear() }}</p>  
                <p class="text-4x1 my-7"><strong>Author: </strong>{{ story.by }}</p>
                <p class="text-4x1 my-7"><strong>Comments: </strong>{{ story.descendants }}</p>
                <button class="btn flex">
                    <NuxtLink :to="`${ story.url }`">See more...</NuxtLink>
                </button>
            </div>
        </div>
    </div>
</template>



<script setup>

  const { story } = defineProps(['story']) 

</script>
<style scoped>
    img {
        max-width: 400px;
    }
</style>

