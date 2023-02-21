<template>
  <div>
    <div class="mb-16">
      <Karusell />
    </div>
    <HomeText />
    <CompT10 />
  </div>
</template>

<script>
import Karusell from '@/components/Karusell.vue'
import HomeText from '@/components/HomeText.vue'
import CompT10 from '@/components/CompareOrTop10.vue'

export default {
  name: 'Home',
  components: {
    Karusell,
    HomeText,
    CompT10
  }
}
</script>
