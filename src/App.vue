<script setup>
import { RouterView } from 'vue-router';
import TheNavBar from './components/TheNavBar.vue';
import HomePage from './views/HomePage.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
    <div>
        <header>
            <nav><TheNavBar /></nav>
        </header>
        <main>
            <HomePage />
        </main>
        <footer>
            <TheFooter />
        </footer>
    </div>
    <RouterView />
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body,
html {
    font-family: sans-serif;
    background-color: #ededed;
    scroll-behavior: smooth;
}
</style>
