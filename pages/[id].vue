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

  const { data: comments} = []



  if(!this.story.value) {
    throw createError({ statusCode: 404, statusMessage: 'Story not found!', fatal: true })
  }

    this.story.kids.forEach(id => {
      $fetch('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty')
          .then((response) => {
              this.comments.push(response)
              console.log(this.comments)
          })
          .catch(err=> {q
            this.err = err
          })
      })
  console.log(this.comments)
</script>