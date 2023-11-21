<script setup>
import { RouterView } from 'vue-router'
import TheHero from '@/components/TheHero.vue';
</script>

<template>
  <div>
    <TheHero />
  </div>
  <RouterView />
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
