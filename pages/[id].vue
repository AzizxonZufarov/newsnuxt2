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

        <div class="card">
        <div class="grid grid-cols-2 gap-5" v-for="comment in comments" :key="comment.id">
                <div class="p-12">
                <p class="text-4x1 my-7"><strong>Author: </strong>{{ comment.by }}</p>
                <p class="text-4x1 my-7"><strong>Comments: </strong>{{ comment.text }}</p>
                <p class="text-4x1 my-7"><strong>Date: </strong>{{ new Date(comment.time*1000).getDate()}}/{{ new Date(comment.time*1000).getMonth()+1}}/{{ new Date(comment.time*1000).getFullYear() }}</p>  

            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "stories"
  })

 const { id } = useRoute().params

 const uri = 'https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty'

  const { data: story } = await useFetch(uri, { key:id })

  const comments = []

  const subcomments = []

  const err = ''

  
  story.value.kids.forEach(id => {
    $fetch('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty')
        .then((response) => {

            comments.push(response)
            console.log(comments)

            comments.kids.forEach(id => {
              $fetch('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty')
                  .then((response) => {
                      subcomments.push(response)
                      console.log(subcomments)
                  })
            })
        })
        .catch(err=> {
          err.value = err
        })
  })
  




</script>