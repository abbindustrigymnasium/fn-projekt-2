<template>
  <div>
    <Karusell />
    <div class="h-96 p-20">
      <p>Hej jag heter bengt</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Karusell from '@/components/Karusell.vue'
export default {
  name: 'Home',
  components: {

    Karusell
  }
}
</script>
