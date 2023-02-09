<template>
  <div class="h-screen flex items-center flex flex-col">
    <h1 class="my-4 text-2xl">Välj städer</h1>
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
    </span>
    <input
      placeholder="Sök..."
      class="flex items-center bg-truegray-200 w-4/5 h-10 my-4 px-10 rounded-lg"
      v-model="input"
      type="text"
    />

    <div
      class="
        w-11/12
        md:w-4/5
        h-2/3
        grid grid-cols-3
        gap-2
        md:gap-4
        bg-truegray-100
        p-2
        md:p-4
        auto-rows-min
        overflow-auto
        rounded-lg
      "
    >
      <button
        v-for="city in filteredList()"
        :key="city"
        class="
          text-white
          sm:text-lg
          md:text-2xl
          flex
          items-center
          justify-center
          bg-themeblue-100
          rounded-2xl
          h-20
          focus:ring-4
          hover:bg-themeblue-200
        "
      >
        {{ city }}
      </button>
      <div class="item error" v-if="input && !filteredList().length"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
let input = ref("")
const cities = [
  'Västerås', 'Stockholm', 'Eskilstuna', 'Örebro', 'Göteborg', 'Lund', 'Jönköping', 'Uppsala', 'Malmö', 'Köping', 'Norrköping', 'Borås', 'Hjo', 'Nyköping', 'Falköping', 'Söderköping', 'Gävle', 'Växsjö', 'Kalmar'
]

function filteredList () {
  return cities.filter((city) =>
    city.toLowerCase().includes(input.value.toLowerCase())
  )
}
</script>

<style>
</style>