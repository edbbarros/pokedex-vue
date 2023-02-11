<script>
import CardComponent from "../components/CardComponent.vue";
import getPokemonApi from "../services/Api";

export default {
  components: { CardComponent },

  data() {
    return {
      pokemonname: "",
      pokemon: {},
      props: {
        pokemon: {},
        pokemonaname: String,
      },
    };
  },
  methods: {
    async getPokemon() {
      try {
        const response = await getPokemonApi.get(`${this.pokemonname}`);
        this.pokemon = response.data;
      } catch (error) {
        console.error(error);
      }
      console.log(JSON.stringify(this.pokemon.sprites.front_default));
    },
  },
};
</script>

<template>
  <section class="container">
    <main>
      <img class="imgPokeball" src="../assets/pokeball.svg" alt="" />
      <h1 class="title">Find Pokemon</h1>

      <div class="form1">
        <input
          class="inputText"
          type="text"
          v-model="pokemonname"
          placeholder="Search by name"
        />

        <button class="button" @click="getPokemon()">
          <img class="icon" src="../assets/search.svg" alt="" />
        </button>
      </div>

      <router-link :to="`/about/${this.pokemonname}`">
        <CardComponent>
          <template v-slot:card-content>
            <img
              class="imgPokemon"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`"
              :alt="this.pokemon.name"
              v-bind="$props"
            />
          </template>
          <template v-slot:content>
            <ul>
              <li v-bind="$props">Pokemon Name: {{ this.pokemon.name }}</li>
              <li>Pokemon height: {{ this.pokemon.height }}</li>
            </ul>
          </template>
        </CardComponent>
      </router-link>
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
.imgPokeball {
  height: 20rem;
}
.title {
  font-weight: 700;
  font-size: 2.5rem;
  color: #f8d030;
  text-shadow: #6890f0 1px -1px 2px, #6890f0 -1px 1px 2px, #6890f0 1px 1px 2px,
    #6890f0 -1px -1px 2px;
}
.form1 {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  border: 2px solid;
  border-radius: 3rem;
  width: 30vw;
  padding: 1rem;
  background-color: #ffffff;
}
.inputText {
  border: none;
  width: 100vw;
  background: #fff;
  font-size: 1.5rem;
  height: 2rem;
  &:focus {
    outline: none;
  }
}
.button {
  border: none;
  background: #fff;
  cursor: pointer;
}
.icon {
  height: 1.5rem;
}

.imgPokemon {
  height: 13em;
}
</style>
