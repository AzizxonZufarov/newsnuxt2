<template>
<div>
  <button @click="refreshData" class="btn"> Force update </button><br/>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="s in stories" :key="s">
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
  /**/
  data () {
    return {
      err: '',
      auxarray: [],
      stories: [],
    }
  },
  methods: {
    refresh() {
      stories = []
      this.reNew()
    },
    async reNew() {
        await $fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
          .then((response) => { 
            let results = response.slice(0, 10/*0*/) 

            results.forEach(id => {
            $fetch('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty')
                .then((response) => {
                    this.stories.push(response)
                })
                .then(() => {
                  this.stories.sort(function(a, b) { return b.time - a.time})
                  //console.log(this.stories)
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
    /*setInterval(() => {
            alert()
      stories = []
      this.reNew()
      }, 60000)*/
  }
  
}

</script>

<style scoped>
  .router-link-exact-active{
    color:#12b488;
  }
</style>
