<script></script>

<template>
  <main>
    <img class="imgPokeball" src="../assets/pokeball.svg" alt="" />
    <h1 class="title">Find Pokemon</h1>
    <div class="form1">
      <input class="inputText" type="text" />
      <button class="button">
        <img class="icon" src="../assets/search.svg" alt="" />
      </button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff6f6;
  gap: 1rem;
}
.imgPokeball {
  height: 20rem;
}
.title {
  font-weight: 700;
  font-size: 2.5rem;
}
.form1 {
  display: flex;
  justify-content: space-between;
  border: 2px solid;
  border-radius: 3px;
  width: 25vw;
  padding: 1rem;
}
.inputText {
  border: none;
  width: 100vw;
  background: none;
  font-size: 1.5rem;
  height: 2rem;
  &:focus {
    outline: none;
  }
}
.button {
  border: none;
  background: none;
  cursor: pointer;
}
.icon {
  height: 1.5rem;
}
</style>
