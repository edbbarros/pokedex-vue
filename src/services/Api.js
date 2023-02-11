import axios from "axios";

const getPokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export default getPokemonApi;
