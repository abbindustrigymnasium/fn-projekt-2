<template>
  <div class="min-h-screen mb-5">
    <div class="text-4xl mb-10">
      <h1>Vi är basgrupp 2</h1>
    </div>
    <div class="flex justify-evenly bg-white">
      <AboutCard
        v-for="person in people"
        :key="person.id"
        :name="`${person.name}`"
        :desc="`${person.desc}`"
        :src="`${person.src}`"
      />
    </div>
  </div>
</template>

<script>
import AboutCard from '@/components/AboutCard.vue'

export default {
  components: {
    AboutCard
  },
  data () {
    return {
      people: [
        { id: 1, name: 'Pingvin 1', desc: 'En liten gullig pingvin som har hjälpt till med det här projektet', src: 'https://images.bonnier.cloud/files/ill/production/2021/06/24131727/Pingvin-p%C3%A5-strand.jpg' },
        { id: 1, name: 'Pingvin 2', desc: 'En liten gullig pingvin som har hjälpt till med det här projektet', src: 'https://images.bonnier.cloud/files/ill/production/2021/06/24131727/Pingvin-p%C3%A5-strand.jpg' },
        { id: 1, name: 'Pingvin 3', desc: 'En liten gullig pingvin som har hjälpt till med det här projektet', src: 'https://images.bonnier.cloud/files/ill/production/2021/06/24131727/Pingvin-p%C3%A5-strand.jpg' },
        { id: 1, name: 'Pingvin 4', desc: 'En liten gullig pingvin som har hjälpt till med det här projektet', src: 'https://images.bonnier.cloud/files/ill/production/2021/06/24131727/Pingvin-p%C3%A5-strand.jpg' },
        { id: 1, name: 'Pingvin 5', desc: 'En liten gullig pingvin som har hjälpt till med det här projektet', src: 'https://images.bonnier.cloud/files/ill/production/2021/06/24131727/Pingvin-p%C3%A5-strand.jpg' },
      ]
    }
  }
}
</script>
