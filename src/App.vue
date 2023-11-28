<script setup>
import { RouterView } from 'vue-router'
import HomePage from './views/HomePage.vue';
</script>

<template>
  <div>
    <HomePage />
  </div>
  <RouterView />
</template>

<style>

body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: #0f0f0f;
}
</style>
