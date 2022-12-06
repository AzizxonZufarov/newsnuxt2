<template>
    <div>
        <h2>{{ story.time}}</h2>
        <!--<div class="card text-center">
            <h2><strong>Title: </strong>{{story.title}}</h2>  
            <p><strong>Score: </strong>{{story.score}}</p>  
            <p><strong>Author: </strong>{{story.by}}</p>  
            <p><strong>Date: </strong>{{ new Date(story.time*1000).getDate()}}/{{ new Date(story.time*1000).getMonth()+1}}/{{ new Date(story.time*1000).getFullYear() }}</p>  
            <NuxtLink :to="`/${story.id}`">
            <p class="btn my-4">View details</p> </NuxtLink>
        </div>-->
    </div>
</template>


<script setup>
    const { story } = defineProps(['story']) 
</script>

<style scoped>
    .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>