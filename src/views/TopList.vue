<template>
    <div class="country-list">
      <h2>Top 10 Energy Consumers</h2>
      <ol>
        <li v-for="(country, index) in sortedCountries.slice(0, 10)" :key="country.id" class="country-item">
          <span class="country-rank">{{ index + 1 }}.</span>
          <span class="country-name">{{ country.name }}</span>
          <span class="country-energy">{{ country.energy_cons }} kWh</span>
        </li>
      </ol>
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
          this.countries = response.data.filter((country) => country.year === 2021);
        })
        .catch(error => {
          console.error(error);
        });
    },
    computed: {
      sortedCountries() {
        const sorted = [...this.countries];
        sorted.sort((a, b) => b.energy_cons - a.energy_cons);
        return sorted;
      }
    }
  }
  </script>
  
  <style>
  .country-list {
    font-family: Arial, sans-serif;
    margin: 1rem;
  }
  
  .country-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .country-rank {
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 1rem;
  }
  
  .country-name {
    flex: 1;
    margin-right: 1rem;
  }
  
  .country-energy {
    font-size: 1.2rem;
    font-weight: bold;
  }
  </style>
  