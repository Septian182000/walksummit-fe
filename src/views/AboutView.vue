<script setup>
import { ref } from "@vue/reactivity";
import { Greeting } from "../api/hello";

const nama = ref("hello");
(async () => {
  let response = await Greeting();
  nama.value = response.name;
})();
</script>

<template>
  <div class="about">
    <h1>{{ nama }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
