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
    header {
        /* background-color: red; */
        height: 100vh;
    }

    .navbBar {
        padding: 0px;
        display: flex;
        background: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0));
    }

    .navBar__content {
        width: 100%;
        padding: 2rem;
        margin: 0px;
    }

    .logo {
        height: 8px;
    }

    .about {
        font-size: 14px;
        font-weight: bolder;
        padding: 2px 10px;
        margin: 0;
    }

    .about:hover {
        color: white;
        background-color: #41ecc700;
    }
}
</style>
