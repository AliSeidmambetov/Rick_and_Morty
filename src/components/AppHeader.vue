<template>
  <section class="hero__Wrapper-sc-1h2eool-0 lgTwHp">
    <h1 class="hero__Title-sc-1h2eool-1 jiKqlM">The Rick and Morty API</h1>
<!--    <div class="hero-image">-->
<!--      <svg width="378" height="376" viewBox="0 0 378 376" fill="none">-->
<!--        <path d=""></path>-->
<!--      </svg>-->
<!--    </div>-->
    <div class="filters">
      <input v-model="localFilters.name" placeholder="Filter by name" />
      <select v-model="localFilters.status">
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <span class="apply" @click="emitApplyFilters">Apply</span>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'AppHeader',
  props: {
    filters: Object
  },
  data () {
    return {
      localFilters: { ...this.filters }
    }
  },
  methods: {
    emitApplyFilters () {
      this.$emit('update:filters', this.localFilters)
    }
  }
}
</script>

<style scoped>
.hero__Wrapper-sc-1h2eool-0 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 2em;
  color: #070707;
  background-color: rgb(245, 245, 245);
  height: 300px;
}

.hero__Title-sc-1h2eool-1 {
  font-size: 5.625rem;
  margin: 0;
  color: rgb(32, 35, 41);
  border: none;
  font-weight: 900;
  z-index: 1;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

.filters {
  display: flex;
  justify-content: center;
}

span {
  margin: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 700;
  border: 1px solid rgb(255, 152, 0);
  background: transparent;
  color: rgb(51, 51, 51);
  transition: all 0.1s ease 0s;
  cursor: pointer;
}

.apply:hover {
  background-color: orange;
}

.filters input,
.filters select,
.filters button {
  margin: 0 1em;
  padding: 0.5em;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
