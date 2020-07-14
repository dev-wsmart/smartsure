<template>
  <div class="product">
    <Banner/>
    <ProductContent/>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import ProductContent from '@/components/Product.vue'

export default {
  name: 'Product',
  components: {
    'Banner' : Banner,
    'ProductContent' : ProductContent
  }
}
</script>
