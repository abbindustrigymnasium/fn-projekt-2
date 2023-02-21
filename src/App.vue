<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div class="justify-end">
        <router-link id="signButton" to="/signin">Sign In</router-link>
      </div>
    </div>
  </div>
  <router-view></router-view>
  <footer class="bg-themeblue-200 text-white p-6">
    <div class="container mx-auto">
      <router-link to="/" class>Home </router-link> |
      <router-link to="/about"> About Us </router-link> |
      <router-link to="/compare">Jämför </router-link> |
      <router-link to="/toplist">Top 10 </router-link>
    </div>
    <p class="text-center mt-2">Copyright &copy; Basgrupp 2 2023</p>
  </footer>
</template>

<script>
// import Karusell from '@/components/Karusell.vue'

export default {
  components: {
    // Karusell
  }
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #5772be;
}

#signButton{
  padding: 20px;
  display: flex;
  justify-content: right;
}
</style>
