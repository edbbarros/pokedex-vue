<template>
  <div class="card-component">
    <div class="card-image">
      <slot name="card-content"></slot>
    </div>
    <div class="card-body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
};
</script>

<style>
.card-component {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: aqua;
  border: 1px solid red;
  width: 15vw;
  height: 30vh;
}
</style>
