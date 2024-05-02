<script setup>
import { RouterView } from 'vue-router';
import HomePage from './views/HomePage.vue';
</script>

<template>
    <div>
        <HomePage />
    </div>
    <RouterView />
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: sans-serif;
    background-color: #f0f0f0;
}
</style>
