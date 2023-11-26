<script setup>
import HeroBgVideo from '@/components/HeroBgVideo.vue'
import AboutCard from '@/components/AboutCard.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const showAboutCard = ref(false)

</script>

<template>
    <header>

        <!-- NAVBAR -->
        <nav class="navbBar w-full pt-6">
            <section class="navBar__content wrapper flex flex-row items-center justify-between mx-40 py-6">

                <!-- LOGO -->
                <RouterLink to="/">
                    <img class="h-3 opacity-70" src="@/assets/img/BRNK_LOGO_WHT_PNG_NOBG.png" alt="png/logo">
                </RouterLink>

                <!-- About -->
                <RouterLink no-underline  @click.prevent="showAboutCard.value = true" to="/about">
                    <p class="about text-2xl opacity-70">ABOUT</p>
                </RouterLink>
            </section>
        </nav>

        <!-- BG VIDEO -->
        <section>
            <!-- <HeroBgVideo /> -->
        </section>

        <!-- Sub title -->
        <section class="subTitle w-full flex items-end absolute top-0 h-full -z-10">
            <div class="subTitle__content" flex items-center w-full px-40>
                <p class="w-20rem text-4xl py-10">
                    DIGITAL CREATOR
                </p>
                <!-- put a white line in tailwindcss -->
                <div w-full>
                    <hr class="border-1">
                </div>
                <p w-20rem flex justify-end text-4xl>
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
    color: white;
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
    0% { border-color: rgb(15, 244, 233)}
    100% { border-color: #41ecc7; }
}

hr {
    border-width: 1px;
    border-style: solid;
    animation: border-color-change 5s infinite alternate linear;
}

@media (max-width: 600px) {
    /* CSS for mobile screens */
    header {
        /* background-color: red; */
    }

    .navbBar {
        padding: 0px;
    }

    .navBar__content {
        padding: 0px;
        margin: 0px;
    }

    .about {
        font-size: 12px;
        padding: 0;
        margin: 0;
    }
    .subTitle {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
    }
    .subTitle__content{
        padding: 0;
    }
    .subTitle__content p {
        font-size: 12px;
        padding: 0;
        margin: 0;
    }
}
</style>
