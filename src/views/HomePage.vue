<script setup>
import TheHero from '@/components/TheHero.vue';
import TheNavBar from '../components/TheNavBar.vue';
import HomepageAbout from '../components/HomepageAbout.vue';
import HomeProjectsGrid from '../components/HomeProjectsGrid.vue';
import TheFooter from '../components/TheFooter.vue';
</script>

<template>
    <div>
        <header>
            <nav><TheNavBar /></nav>
            <TheHero />
        </header>
        <main>
            <HomepageAbout />
            <HomeProjectsGrid />
        </main>
        <footer>
            <TheFooter />
        </footer>
    </div>
</template>

<style scoped></style>
