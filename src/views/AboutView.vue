<script>
import CardComponent from "../components/CardComponent.vue";

export default {
  components: { CardComponent },
  data() {
    return {
      pokemonname: String,
      pokemon: {},
    };
  },
};
</script>

<template>
  <section class="container">
    <main>
      <div class="about">
        <CardComponent>
          <template v-slot:card-content>
            <img
              class="imgPokemon"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`"
              :alt="this.pokemon.name"
            />
          </template>
          <template v-slot:content>
            <ul>
              <li>Pokemon Name: { pokemonname }</li>
              <li>Pokemon height: {{ this.pokemon.height }}</li>
            </ul>
          </template>
        </CardComponent>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
}

main {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 12rem;
  border-radius: 2rem;
  gap: 1rem;
}
</style>
