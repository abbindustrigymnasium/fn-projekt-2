<template>
  <div class="w-full h-full flex flex-col space-y-4 px-20 mb-10">
    <router-link
      to="/compare"
      class="
        bg-truegray-900
        w-full
        h-full
        flex-row
        justify-center
        items-center
        transform
        hover:scale-105
        transition
        duration-500
        ease-in-out
        relative
      "
      ><img
        class="object-cover h-SHeight1 md:h-SHeight2 min-w-full opacity-60"
        src="https://images.unsplash.com/photo-1541394995283-1c41007f098c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <div class="text-white text-left px-4 absolute inset-x-0 bottom-1/4">
        <p class="font-medium text-3xl">Världens länder</p>
        <p class="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris
          ipsum, placerat ac leo sed, imperdiet vulputate tellus.
        </p>
      </div>
    </router-link>
    <router-link
      to="/toplist"
      class="
        bg-truegray-900
        w-full
        h-full
        flex-row
        justify-center
        items-center
        transform
        hover:scale-105
        transition
        duration-500
        ease-in-out
        relative
      "
      ><img
        class="object-cover h-SHeight1 md:h-SHeight2 min-w-full opacity-60"
        src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80"
      />
      <div class="text-white text-left px-4 absolute inset-x-0 bottom-1/4">
        <p class="font-medium text-3xl">Top 10</p>
        <p class="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris
          ipsum, placerat ac leo sed, imperdiet vulputate tellus.
        </p>
      </div>
    </router-link>
  </div>
</template>