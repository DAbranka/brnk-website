<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'

import HeroBgVideo from '@/components/HeroBgVideo.vue'
import MobileHeroBgVideo from '@/components/MobileHeroBgVideo.vue'
import AboutCard from '@/components/AboutCard.vue'
import WorkInProgress from './WorkInProgress.vue'

const showAboutCard = ref(false)

const windowWidth = ref(window.innerWidth)
const updateWidth = () => {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
})

const currentComponent = computed(() => (windowWidth.value <= 600 ? MobileHeroBgVideo : HeroBgVideo))
</script>

<template>
    <header>

        <!-- NAVBAR -->
        <nav class="navbBar w-full pt-6">
            <section class="navBar__content wrapper flex flex-row items-center justify-between mx-40 py-6">

                <!-- LOGO -->
                <RouterLink to="/">
                    <img class="logo h-3 opacity-70" src="@/assets/img/BRNK_LOGO_WHT_PNG_NOBG.png" alt="png/logo">
                </RouterLink>

                <!-- About -->
                <RouterLink no-underline  @click.prevent="showAboutCard.value = true" to="/about">
                    <p class="about text-2xl opacity-70">ABOUT</p>
                </RouterLink>
            </section>
        </nav>

        <section>
            <!-- <WorkInProgress /> -->
        </section>

        <!-- BG VIDEO -->
        <section>
            <component :is="currentComponent"></component>
        </section>

        <!-- Sub title -->
        <section class="subTitle w-full flex items-end absolute top-0 h-full -z-10">
            <div class="subTitle__content" flex items-center w-full px-40>
                <p class="w-20rem py-10">
                    DIGITAL CREATOR
                </p>
                <!-- put a white line in tailwindcss -->
                <div id="hr-wrap" w-full>
                    <hr class="border-1">
                </div>
                <p w-20rem flex justify-end>
                    WEB DEVELOPER
                </p>
            </div>
        </section>

        <!-- About Card -->
        <AboutCard v-if="showAboutCard.value" :onClose="() => showAboutCard.value = false" />
    </header>
</template>


<style scoped>

p {
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 300;
    opacity: 70%;
    color: white;
}

.about {
    color: #41ecc7;
    border: 1px solid white;
    padding: 5px 20px;
    font-weight: 600;
}

.about:hover {
    color: rgb(0, 0, 0);
    background-color: #41ecc7;
    border: 1px solid #41ecc7;
}

@keyframes border-color-change {
    0% { border-color: rgb(16, 160, 200)}
    100% { border-color: #41ecc7; }
}

hr {
    border-width: 1px;
    border-style: solid;
    animation: border-color-change 3s infinite alternate linear;
}

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
        /* background-color: blue; */
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

    .subTitle__content{
        padding-left: 40px;
        padding-right: 40px;
        margin-bottom: 0.5rem;
    }
    .subTitle__content p {
        font-size: 18px;
        font-weight: bold;
        padding-top: 0px;
        padding-bottom: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .subTitle__content p:nth-child(3) {
        display: flex;
        justify-content: flex-end;
        text-align: right;
    }

    hr {
        border-width: 1px;
        border-style: solid;
        width: 20%;
    }

    #hr-wrap{
        display: none;
    }
}
</style>
