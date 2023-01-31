<template>
  <div class="h-screen">
    <div class="text-4xl mb-10">
      <h1>Vi är basgrupp 2</h1>
    </div>
    <div class="flex justify-evenly bg-white">
      <AboutCard
        name="Pingvin 1"
        desc="En liten gullig pingvin som har hjälpt till med det här projektet"
      />
      <AboutCard
        name="Pingvin 2"
        desc="En liten gullig pingvin som har hjälpt till med det här projektet"
      />
      <AboutCard
        name="Pingvin 3"
        desc="En liten gullig pingvin som har hjälpt till med det här projektet"
      />
      <AboutCard
        name="Pingvin 4"
        desc="En liten gullig pingvin som har hjälpt till med det här projektet"
      />
      <AboutCard
        name="Pingvin 5"
        desc="En liten gullig pingvin som har hjälpt till med det här projektet"
      />
    </div>
  </div>
</template>

<script>
import AboutCard from '@/components/AboutCard.vue'

export default {
  components: {
    AboutCard
  }
}
</script>
