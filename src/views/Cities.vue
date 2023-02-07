<template>
  <div class="flex justify-center min-h-screen text-4xl px-2 py-20 m-4">
    <router-link
      to="/compare"
      class="
        bg-themeyellow-100
        rounded-full
        w-104
        h-104
        p-4
        flex
        justify-center
        items-center
        border-r-8 border-b-8 border-themeyellow-200
        mx-16
        transform
        hover:scale-110
        transition
        duration-500
        ease-in-out
      "
      >Jämför städer</router-link
    >
    <router-link
      to="/top10"
      class="
        bg-themeyellow-100
        rounded-full
        w-104
        h-104
        p-4
        flex
        justify-center
        items-center
        border-r-8 border-b-8 border-themeyellow-200
        mx-16
        transform
        hover:scale-110
        transition
        duration-500
        ease-in-out
      "
      >Top 10</router-link
    >
  </div>
</template>