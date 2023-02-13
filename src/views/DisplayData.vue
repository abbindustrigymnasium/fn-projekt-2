<template>
    <div>
      <h2>Country List</h2>
      <ul>
        <li v-for="country in countries" :key="country.id">
          {{ country.name }} + {{ country.energy_cons }} + {{ country.year }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        countries: []
        
      };
    },
    mounted() {
      axios.get('http://localhost:3000/api/country-population')
        .then(response => {
          this.countries = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  </script>
  