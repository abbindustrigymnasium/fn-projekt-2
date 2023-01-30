<template>
  <div class="flex justify-evenly">
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
</template>

<script>
import AboutCard from '@/components/AboutCard.vue'

export default {
  components: {
    AboutCard
  }
}
</script>
