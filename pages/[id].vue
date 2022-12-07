<template>
  <div>
    <Head>
    <Title>{{ story.title}}</Title>
    <Meta name="description" content="product.description" /> 
  </Head>
    <StoryDetails :story="story" />
    <button class="btn">
        <NuxtLink to="/">Back to home</NuxtLink>
    </button>
  </div>
</template>
<script setup>
      definePageMeta({
        layout: "stories"
      })
      const { id } = useRoute().params
      
      const uri = 'https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty'

      const { data: story } = await useFetch(uri, { key:id }) 

      if(!story.value) {
        throw createError({ statusCode: 404, statusMessage: 'Story not found!', fatal: true })
      }

</script>
