<script setup>
import TheHero from '@/components/TheHero.vue';
import TheNavBar from '../components/TheNavBar.vue';
import HomepageAbout from '../components/HomepageAbout.vue';
</script>

<template>
    <div>
        <header>
            <nav><TheNavBar /></nav>
            <TheHero />
        </header>
        <main>
            <HomepageAbout />
        </main>
    </div>
</template>

<style scoped></style>
