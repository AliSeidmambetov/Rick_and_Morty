<template>
  <div id="app">
    <AppHeader :filters="filters" @update:filters="updateFilters" />
    <div class="character-list">
      <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="page === 1">Previous</button>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getCharacters } from './services/api'
import CharacterCard from './components/CharacterCard.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    CharacterCard,
    AppHeader
  },
  setup () {
    const characters = ref([])
    const page = ref(1)
    const filters = ref({
      name: '',
      status: ''
    })

    const fetchCharacters = async () => {
      try {
        const data = await getCharacters(page.value, filters.value)
        characters.value = data.results
      } catch (error) {
        console.error('Failed to fetch characters', error)
      }
    }

    const updateFilters = (newFilters) => {
      filters.value = newFilters
      applyFilters()
    }

    const applyFilters = () => {
      page.value = 1
      fetchCharacters()
    }

    const nextPage = () => {
      page.value += 1
      fetchCharacters()
    }

    const prevPage = () => {
      if (page.value > 1) {
        page.value -= 1
        fetchCharacters()
      }
    }

    onMounted(fetchCharacters)

    return {
      characters,
      page,
      filters,
      updateFilters,
      applyFilters,
      nextPage,
      prevPage
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  background-color: #1e272e;
  color: white;
}

.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 6.0rem 0;
}

.pagination {
  margin-top: 2em;
}

.pagination button {
  margin: 0 0.5em;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: none;
  background-color: #f39c12;
  color: white;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
</style>
