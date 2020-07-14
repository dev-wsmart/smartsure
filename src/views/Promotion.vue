<template>
  <div class="promotion">
    <Banner/>
    <PromotionContent/>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import PromotionContent from '@/components/Promotion.vue'

export default {
  name: 'Promotion',
  components: {
    'Banner' : Banner,
    'PromotionContent' : PromotionContent
  }
}
</script>
