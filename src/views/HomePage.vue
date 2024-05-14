<script setup>
import TheHero from '@/components/TheHero.vue';
import HomepageAbout from '../components/HomepageAbout.vue';
import HomeProjectsGrid from '../components/HomeProjectsGrid.vue';
</script>

<template>
    <div>
        <TheHero />
        <HomepageAbout />
        <HomeProjectsGrid :id="HomepageProjectGrid" />
    </div>
</template>

<style scoped></style>
