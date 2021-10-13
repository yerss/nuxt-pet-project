<template>
  <div>
    <p class="content__text">{{ content }}</p>
    <button @click="refresh">refresh</button>
    <div>
      Computed: {{date}}
    </div>
<!--    <p v-if="$fetchState.pending">Loading....</p>-->
  </div>
</template>

<script>
export default {
  head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // layout: 'blog',
  // // OR
  // layout (context) {
  //   return 'blog'
  // }
  name: 'Test',
  data () {
    return {}
  },
  asyncData(context) {
  /*
    we use context for get some information
    of can get {params} like this from context
    in constructor asyncData
  */
    return {
      content: `Created at: ${new Date()}`
    }
  },
  computed: {
    date() {
      return new Date()
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  methods: {
    refresh() {
      /*
        Method refresh refresh data only in asyncData, fetch
        other computed, from api in created, beforeMount, mounted
        is not working
      */
      this.$nuxt.refresh()
    }
  }
}
</script>

<style lang='scss' scoped>
.content {
  &__text {
    color: red;
  }
}
</style>
