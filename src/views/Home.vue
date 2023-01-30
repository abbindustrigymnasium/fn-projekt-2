<template>
  <div>
    <div class="home">
      <img class="justify-center" alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
    </div>
  <Karusell />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Karusell from '@/components/Karusell.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Karusell
  }
}
</script>
