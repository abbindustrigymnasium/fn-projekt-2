<template>
    <div>
      <h2>Country List</h2>
      <ul>
        <li v-for="country in countries" :key="country.id">
          {{ country.name }}
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
          this.countries = response.data.filter((country)=> country.year === 2020)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  </script>
  