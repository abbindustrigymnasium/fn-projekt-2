<template>
  <div>
    <div class="mb-16">
      <Karusell />
    </div>
    <div class="flex row mt-28">
      <div class="h-96 mr-10 ml-10 w-1/2">
        <h1 class="text-xl mb-3">OHELGA NAAAAAATT</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Lacinia at quis risus sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Elementum
        pulvinar etiam non quam lacus suspendisse. Mauris pharetra et ultrices neque ornare aenean euismod. Neque gravida in
        fermentum et. Amet massa vitae tortor condimentum lacinia quis vel. Eu consequat ac felis donec et. Aliquam id diam
        maecenas ultricies mi eget mauris. Quis risus sed vulputate odio. Eu tincidunt tortor aliquam nulla facilisi cras.
        Nullam non nisi est sit amet. Egestas integer eget aliquet nibh. Ut faucibus pulvinar elementum integer enim.</p>
        <div class="flex row justify-center my-7">
        <router-link to="/cities" class="h-12 w-32 bg-themeblue-200 text-white rounded-full p-1 mr-16 transform hover:scale-105 transition duration-500 ease-in-out hover:bg-themeblue-100">Jämför</router-link>
        <router-link to="/about" class="h-12 w-32 bg-themeblue-200 text-white rounded-full p-1 ml-16 transform hover:scale-105 transition duration-500 ease-in-out hover:bg-themeblue-100">About us</router-link>
        </div>  
      </div>
      <div class=" mr-5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sLgf6bCvUFxwQ_5TnXxSDeK-5dug_kP5Nw&usqp=CAU" alt="" class="w-96 h-96">
      </div>
    </div>
  </div>
</template>

<script>
import Karusell from '@/components/Karusell.vue'
export default {
  name: 'Home',
  components: {

    Karusell
  }
}
</script>
