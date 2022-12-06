<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img alt="product img" class="mx-auto my-7"> </div>
                <div class="p-7">
                <h2 class="text-4x1 my-7">{{ story.title }}</h2>
                <p><strong>Date: </strong>{{ new Date(story.time*1000).getDate()}}/{{ new Date(story.time*1000).getMonth()+1}}/{{ new Date(story.time*1000).getFullYear() }}</p>  
                <p>{{ story.by }}</p>
                <p>Comments {{ story.descendants }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Story description:</h3>
                 <p>{{ story.text }}</p>
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

