<template>
  <div class="item_container">
    <itemContainer father-component="item"></itemContainer>
  </div>
</template>

<script>
import itemContainer from '@/components/itemContainer'

export default {
  components: {
    itemContainer
  }
}
</script>

<style lang="less" scoped>
body{
  background: url(../../images/1-1.jpg) no-repeat;
}
</style>