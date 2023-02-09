<template>
  <div>
    <div class="mb-16">
      <Karusell />
    </div>
    <div class="flex row mt-28">
      <div class="h-96 mr-10 ml-10">
        <h1 class="text-xl mb-5">Rubrik</h1>
        <div class="flex row jutify-evenly">
        <div class="flex justify-between row text-left mb-20">
          <div class="w-1/2 flex flex-col">
            <p class=" mx-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. A diam maecenas sed enim ut sem viverra aliquet. Semper eget duis at tellus. Fames ac turpis egestas sed tempus
            urna et pharetra. Vel turpis nunc eget lorem dolor sed viverra. Eu ultrices vitae auctor eu augue ut lectus arcu
            bibendum. Ac auctor augue mauris augue neque gravida in. Consequat id porta nibh venenatis cras sed felis. Sagittis orci
            a scelerisque purus semper eget duis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. In massa tempor
            nec feugiat nisl pretium fusce id velit.</p>
            <p class="mx-3 mt-2">
            Vulputate ut pharetra sit amet aliquam id. Eget magna fermentum iaculis eu non diam. Dictum varius duis at consectetur
            lorem donec massa sapien faucibus. Ultrices mi tempus imperdiet nulla. Sem et tortor consequat id.
            </p>
          </div>
      <div class="w-1/2 flex flex-col place-items-center">
        <p class=" mx-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna
          aliqua. A diam maecenas sed enim ut sem viverra aliquet. Semper eget duis at tellus. Fames ac turpis egestas sed
          tempus
          urna et pharetra. Vel turpis nunc eget lorem dolor sed viverra. Eu ultrices vitae auctor eu augue ut lectus arcu
          bibendum. Ac auctor augue mauris augue neque gravida in. Consequat id porta nibh venenatis cras sed felis. Sagittis
          orci
          a scelerisque purus semper eget duis.</p>
        <p class="mx-2 mt-2">
          Vulputate ut pharetra sit amet aliquam id. Eget magna fermentum iaculis eu non diam. Dictum varius duis at
          consectetur
          lorem donec massa sapien faucibus. Ultrices mi tempus imperdiet nulla. Sem et tortor consequat id. 
        </p>
        <div class="flex row w-full justify-center space-x-10">
        <router-link to="/compare" class="h-8 w-1/4 bg-themeblue-200 p-1 text-white rounded-full transform hover:scale-105 transition duration-500 ease-in-out hover:bg-themeblue-100 flex place-content-center mt-6">Jämför</router-link>
        <router-link to="/top10"
          class="h-8 w-1/4 bg-themeblue-200 text-white p-1 rounded-full transform hover:scale-105 transition duration-500 ease-in-out hover:bg-themeblue-100 flex place-content-center mt-6">Top 10</router-link>
      </div>
      </div>
      </div>
      </div>
        
      
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
