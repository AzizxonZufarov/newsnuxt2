<template>
<div>
  <button @click="reNew" class="btn"> Force update </button>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="s in stories" :key="story">
      <StoryCard :story="s"/>
    </div>
  </div> 
</div>
</template>


  <script>  
  definePageMeta({
    layout: "stories"
  })

export default {
  data () {
    return {
      err: '',
      stories: [],
      interval:null,
    }
  },
  methods: {
    async reNew() {
        await $fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
          .then((response) => {
            let results = response.slice(0, 10)

            results.forEach(id => {
            $fetch('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty')
                .then((response) => {
                    this.stories.push(response)
                })
                .catch(err=> {
                  this.err = err
                })
            })
            
          }) 
      }
  },
  mounted() {
    this.reNew()
  },
  created(){
    this.interval = setInterval(() =>{
      this.mounted()},5000)
  },
  destroyed(){
    clearInterval(this.interval)
  }
  
}
</script>

<style scoped>
  .router-link-exact-active{
    color:#12b488;
  }
</style>
