<template>
  <div class="flex row justify-center h-screen text-4xl px-2 m-2">
    <div class="w-3/4 h-5/6 flex row justify-around space-x-4">
      <router-link
        to="/compare"
        class="
          bg-truegray-900
          w-3/5
          min-h-full
          flex
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
          class="object-cover w-full h-full opacity-60"
          src="https://images.unsplash.com/photo-1541394995283-1c41007f098c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <div class="text-white text-left px-4 absolute inset-x-0 bottom-1/4">
          <p class="font-medium">Världens länder</p>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mauris ipsum, placerat ac leo sed, imperdiet vulputate tellus.
          </p>
        </div>
      </router-link>
      <router-link
        to="/top10"
        class="
          bg-truegray-900
          w-3/5
          min-h-full
          flex
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
          class="object-cover w-full h-full opacity-60"
          src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80"
        />
        <div class="text-white text-left px-4 absolute inset-x-0 bottom-1/4">
          <p class="font-medium">Top 10</p>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mauris ipsum, placerat ac leo sed, imperdiet vulputate tellus.
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>