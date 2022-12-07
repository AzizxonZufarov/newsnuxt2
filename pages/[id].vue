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

<script >

  definePageMeta({
    layout: "stories"
  })
export default {
  
  data () {
    return {
      id: 0,
      uri: 'https://hacker-news.firebaseio.com/v0/item/'+ this.id +'.json?print=pretty',
      story: {},
      err: '',
      _story: {},
      comments: [],
    }
  },
  methods: {
    async mounted() {
      
      this.id = useRoute().params

      this.story = await useFetch(uri, { key: this.id })
      console.log(this.story)
      if(!this.story.value) {
        throw createError({ statusCode: 404, statusMessage: 'Story not found!', fatal: true })
      }

        await $fetch('https://hacker-news.firebaseio.com/v0/'+ id +'.json?print=pretty')
          .then((response) => { 
            this._story = this.response
            this._story.comments = []

            this._story.kids.forEach(id => {
            $fetch('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty')
                .then((response) => {
                    this.comments.push(response)
                    console.log(this.comments)
                })
                .catch(err=> {
                  this.err = err
                })
            })
          })

    }
  }  
}
</script>
