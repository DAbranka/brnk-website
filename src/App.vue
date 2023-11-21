<script setup>
import {RouterView } from 'vue-router'
import TheHero from './components/The-Hero.vue';
</script>

<template>
  <div>
    <section>
    <h1>HALLO</h1>
      <TheHero />
    </section>
  </div>
  <RouterView />
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
