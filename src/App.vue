<script setup>
import {RouterView } from 'vue-router'
import TheHero from './components/The-Hero.vue';
</script>

<template>
  <div>
    <section>
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
