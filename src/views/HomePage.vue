<script setup>
import { ref } from 'vue';

import TheHero from '@/components/TheHero.vue';
import HomepageAbout from '../components/HomepageAbout.vue';
import HomeProjectsGrid from '../components/HomeProjectsGrid.vue';

const HomepageProjectGrid = ref(['HomepageProjectGrid']);
const HomepageAboutSection = ref(['HomepageAboutSection']);
</script>

<template>
    <div>
        <TheHero />
        <HomeProjectsGrid :id="HomepageProjectGrid" />
        <HomepageAbout :id="HomepageAboutSection" />
    </div>
</template>

<style scoped></style>
