<template>
  <div class="character-card">
    <img :src="character.image" alt="Character image" />
    <div class="character-info">
      <h2>{{ character.name }}</h2>
      <p><strong>{{ character.status }}</strong> - {{ character.species }}</p>
      <p><strong>Last known location:</strong> {{ character.location.name }}</p>
      <p><strong>First seen in:</strong> {{ character.origin.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.character-card {
  display: flex;
  width: 600px;
  height: 220px;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 6px -1px, rgba(0, 0, 0, 0.06) 0 2px 4px -1px;
}

.character-card img {
  height: 100%;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
}

.character-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 0.75rem;
}

.character-info h2 {
  margin: 0;
  font-size: 1.2em;
}

.character-info p {
  margin: 0.5em 0;
}

.character-info p strong {
  color: #f39c12;
}
</style>
