<template>
  <div class="h-screen flex items-center flex flex-col">
    <h1 class="my-4 text-2xl">Välj länder</h1>
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
    </span>
    <input placeholder="Sök..." class="flex items-center bg-truegray-200 w-4/5 h-10 my-4 px-10 rounded-lg" v-model="input"
      type="text" />

    <div class="
          w-full
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
        ">
      <label v-for="city in filteredList()" :key="city" class="
            text-white
            flex
            items-center
            justify-center
            bg-themeblue-100
            rounded-2xl
            h-28
            grid grid-cols-3
          ">
        <input type="checkbox" class="
              form-tick
              h-4
              w-4
              md:h-6 md:w-6
              mx-2
              md:mx-4
              border border-gray-300
              rounded-md
              checked:bg-blue-600 checked:border-transparent
              focus:outline-none
            " />
        <p class="sm:text-md md:text-2xl">{{ city.name }}</p>
      </label>
      <div class="item error" v-if="input && !filteredList().length"></div>
    </div>
    <!-- <button
      class="
        text-white text-md
        md:text-xl
        flex
        items-center
        justify-center
        my-4
        bg-themeblue-100
        active:bg-themeblue-200
        focus:ring-4
        rounded-2xl
        h-20
        w-1/3
      "
    >
      Bekräfta
    </button> -->
  </div>
</template>

<script setup>
import { ref, reactive, onMounted} from 'vue';
import axios from 'axios';

let input = ref("")

const cities = reactive({
  countries: []
});

const fetchCountries = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/country-population');
    const countriesData = response.data.filter((country) => country.year === 2021);
    cities.countries = countriesData.map((country) => ({ name: country.name }));
  } catch (error) {
    console.error(error);
  }
};


function filteredList(){
  // console.log(cities.countries.name)
  return cities.countries.filter((city) =>
  city.name.toLowerCase().startsWith(input.value.toLowerCase())
  )
}

onMounted(fetchCountries);
</script>

<style></style>