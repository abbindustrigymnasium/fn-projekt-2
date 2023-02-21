<template>
  <div class="h-96 w-72">
    <img
      class="object-cover object-right h-full"
      src="https://images.bonnier.cloud/files/ill/production/2021/06/24131727/Pingvin-p%C3%A5-strand.jpg"
      alt=""
    />
    <div class="w-full h-48 bg-themeblue-100 mt-2 text-white p-4">
      <h1 class="text-2xl mb-2">{{ name }}</h1>
      <p class="text-lg">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'desc'],
  setup () {

  },
}
</script>
