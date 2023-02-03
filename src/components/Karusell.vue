<template>
  <div>
    <Carousel
      :wrap-around="true"
      :breakpoints="breakpoints"
      :autoplay="5000"
    >
      <Slide
        v-for="slide in slides"
        :key="slide.id"
        class="pb-4 2xl:h-SHeight3 md:h-SHeight2 h-SHeight1"
      >
        <div class="p-4 w-full h-full">
          <!-- <h3>{{ slide.title }}</h3>
          <p>{{ slide.content }}</p> -->
          <img :src="`${slide.src}`" class="w-full h-full object-cover" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'



export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data () {
    return {
      slides: [
        { id: 1, title: 'Myrkotte', content: 'Beskrivning 1', src: 'https://i.natgeofe.com/k/880b23a6-d3a5-46e1-a60f-2dfbf9208377/pangolin_main_16x9.jpg' },
        { id: 2, title: 'Röd panda', content: 'Beskrivning 2', src: 'https://myanimals.com/sv/wp-content/uploads/2020/12/rod-panda.jpg' },
        { id: 3, title: 'Valross', content: 'Beskrivning 3', src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Noaa-walrus22.jpg' },
        { id: 4, title: 'Isbjörn', content: 'Beskrivning 4', src: 'https://tidningensyre.se/wp-content/uploads/2018/05/18cb7db26d38eeec35243c3eced685d1.jpg' },
        { id: 5, title: 'Esel', content: 'Beskrivning 5', src: 'https://images.rsa-sachsen.de/files/2021-08/GettyImages-585282190.jpg?rect=445%2C0%2C3559%2C2670&fit=crop&crop=faces&w=500&h=375&dpr=3&fm=webp' },
      ]
    }
  }
}
</script>