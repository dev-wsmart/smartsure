<template>
  <div class="news">
    <Banner/>
    <NewsContent/>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import NewsContent from '@/components/News.vue'

export default {
  name: 'News',
  components: {
    'Banner' : Banner,
    'NewsContent' : NewsContent
  }
}
</script>
