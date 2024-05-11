<script setup>
import TheHero from '@/components/TheHero.vue';
import HomepageAbout from '../components/HomepageAbout.vue';
import HomeProjectsGrid from '../components/HomeProjectsGrid.vue';
</script>

<template>
    <div>
        <header>
            <TheHero />
        </header>
        <main>
            <HomepageAbout />
            <HomeProjectsGrid />
        </main>
    </div>
</template>

<style scoped></style>
