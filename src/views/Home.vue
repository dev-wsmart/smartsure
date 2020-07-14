<template>
  <div class="home">
    <Banner/>
    <HomeContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import HomeContent from '@/components/Home.vue'

export default {
  name: 'Home',
  components: {
    'Banner' : Banner,
    'HomeContent' : HomeContent
  }
}
</script>
