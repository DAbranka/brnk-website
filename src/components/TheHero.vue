<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

import HeroBgVideo from '@/components/HeroBgVideo.vue';
import MobileHeroBgVideo from '@/components/MobileHeroBgVideo.vue';

const windowWidth = ref(window.innerWidth);
const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});

const currentComponent = computed(() =>
    windowWidth.value <= 600 ? MobileHeroBgVideo : HeroBgVideo
);
</script>

<template>
    <div>
        <!-- HERO TEXT -->
        <section class="hero-text">
            <article class="hero-text__content px-[19rem] py-[10rem]">
                <h1 class="hero-text__title text-8xl font-900">
                    Hey there, I'm a passionate 3D artist and motion designer based in Liège,
                    Belgium.
                </h1>
            </article>
        </section>
        <!-- BG VIDEO -->
        <section>
            <component :is="currentComponent"></component>
        </section>
    </div>
</template>

<style scoped>
/* RESPONSIVE */
@media (max-width: 600px) {
    /* CSS for mobile screens */

    h1 {
        font-size: 2rem;
    }

    .hero-text__content {
        padding: 0;
    }
}

@media (min-width: 600px) and (max-width: 1600px) {
    h1 {
        font-size: 4rem;
    }
}
</style>
