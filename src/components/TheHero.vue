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
    <div class="heroWrap">
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
        <section class="heroBgVideo">
            <component :is="currentComponent"></component>
        </section>
    </div>
</template>

<style scoped>
/* CSS FOR PHONE SCREEN */
@media (max-width: 600px) {
    .heroWrap {
        position: relative;
        overflow: hidden;
        background: #000;
    }

    .heroBgVideo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        opacity: 50%;
    }

    .hero-text {
        padding: 15rem 0;
        position: relative;
        z-index: 10;
    }

    .hero-text__content {
        padding: 0 2rem 0 2rem; /* top right bottom left */
        z-index: 10;
    }
    .hero-text__content h1 {
        color: white;
        font-size: 2.5rem;
        font-weight: 300;
        text-align: center;
    }
}

/* CSS FOR LAPTOP SCREEN */
@media (min-width: 600px) and (max-width: 1600px) {
    h1 {
        font-size: 4rem;
    }
}
</style>
