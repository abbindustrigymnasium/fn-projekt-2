<template>
  <div>
    <Carousel
      :wrap-around="true"
      :breakpoints="breakpoints"
      :autoplay="10000"
    >
      <Slide
        v-for="slide in slides"
        :key="slide.id"
        class="pb-4 2xl:h-SHeight3 md:h-SHeight2 h-SHeight1 z-10"
      >
        <div class="p-4 w-full h-full relative flex justify-center content-center">
          <img :src="`${slide.src}`" class="w-full h-full object-cover filter brightness-50" />
          <p class="absolute text-4xl text-white px-16 self-center">
            {{ slide.text }}
          </p>
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
        { id: 1, title: 'Myrkotte', text: 'Folk tror att jag är en kotte', src: 'https://i.natgeofe.com/k/880b23a6-d3a5-46e1-a60f-2dfbf9208377/pangolin_main_16x9.jpg' },
        { id: 2, title: 'Röd panda', text: 'Jag råkade ramla ned i falurödfärg', src: 'https://myanimals.com/sv/wp-content/uploads/2020/12/rod-panda.jpg' },
        { id: 3, title: 'Valross', text: 'Jag är en blandning av elefant, val och säl', src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Noaa-walrus22.jpg' },
        { id: 4, title: 'Isbjörn', text: 'Isbjörn gillar att laga mat', src: 'https://tidningensyre.se/wp-content/uploads/2018/05/18cb7db26d38eeec35243c3eced685d1.jpg' },
        { id: 5, title: 'Esel', text: 'Är jag en åsna?', src: 'https://images.rsa-sachsen.de/files/2021-08/GettyImages-585282190.jpg?rect=445%2C0%2C3559%2C2670&fit=crop&crop=faces&w=500&h=375&dpr=3&fm=webp' },
        { id: 6, title: 'Stad', text: 'Stad Stad Stad Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam phasellus vestibulum.', src: 'https://usercontent.one/wp/www.arkitekturupproret.se/wp-content/uploads/2017/02/HUVUDBILD-650x325.jpg' },
        { id: 7, title: 'Stad', text: '', src:"https://media.tenor.com/lASY8qJLPaAAAAAC/angry-black-cat-meme.gif" },
      ]
    }
  }
}
</script>