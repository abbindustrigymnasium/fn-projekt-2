<template>
  <div>
    <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="10000">
      <Slide
        v-for="slide in slides"
        :key="slide.id"
        class="pb-4 2xl:h-SHeight3 md:h-SHeight2 h-SHeight1 z-10"
      >
        <div
          class="p-4 w-full h-full relative flex justify-center content-center"
        >
          <img
            :src="`${slide.src}`"
            class="w-full h-full object-cover filter brightness-50"
          />
          <div
            class="
              absolute
              text-4xl text-white
              px-1
              md:px-4
              self-center
              w-3/4
              md:w-2/3
            "
          >
            <p class="text-2xl md:text-4xl font-medium">
              {{ slide.title }}
            </p>
            <p class="text-sm md:text-xl mt-2">{{ slide.text }}</p>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation class="text-white hover:text-white" />
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
        { id: 1, title: 'Lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo in leo tempus efficitur sed sed felis. Aenean consequat lacus nec tincidunt iaculis. Sed nulla nisl, mollis at mi fermentum, sodales iaculis risus. Integer lectus leo, molestie at tincidunt a, dignissim quis elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', src: 'https://images.unsplash.com/photo-1610028290816-5d937a395a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' },
        { id: 2, title: 'Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut orci mi. Ut congue risus nec facilisis dictum. Suspendisse potenti. Suspendisse tincidunt leo nulla, varius iaculis lorem vehicula pellentesque. Nulla facilisi. Aenean nec faucibus nulla. Suspendisse erat mi, egestas quis tortor laoreet, consequat posuere tellus. Aenean finibus viverra arcu, in.', src: 'https://images.unsplash.com/photo-1531558506007-fe311a2f4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80' },
        { id: 3, title: 'Lipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium, metus in vestibulum sollicitudin, sem est cursus augue, in semper justo orci in massa. Mauris velit lorem, tempor in nisl vel, venenatis placerat lectus. Sed commodo diam a lacus hendrerit accumsan. Vivamus tellus ipsum, varius.', src: 'https://images.unsplash.com/photo-1558597879-04d6dfc5216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { id: 4, title: 'Shmipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas lectus ullamcorper dictum lobortis. Sed nec dui rhoncus, imperdiet ante vel, sagittis risus. Curabitur et porta felis. Nunc sit amet felis ut eros rutrum lobortis. Ut ultricies rhoncus neque, vel malesuada elit porta sit amet. Praesent eget egestas lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ac ante interdum, gravida tellus eget.', src: 'https://images.unsplash.com/photo-1566543042578-5db95b961375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
        { id: 5, title: 'Klipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat felis sed sollicitudin egestas. Duis a tincidunt eros. Integer lacinia aliquam purus. Duis at odio libero. Proin diam nisi, commodo non velit at, accumsan commodo dui. Aliquam vulputate facilisis pharetra. Suspendisse lobortis.', src: 'https://images.unsplash.com/photo-1604420929906-190b6ed3cd1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' },
        { id: 6, title: 'Blablipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante metus, vehicula vel lectus et, consectetur mollis dui. Ut nec tincidunt nisl. Nullam condimentum eleifend consectetur. Curabitur blandit risus turpis, vitae elementum ex viverra eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce.', src: 'https://images.unsplash.com/photo-1627332314956-f5f597d72d11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
      ]
    }
  }
}
</script>
