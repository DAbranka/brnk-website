<script setup>
import HeroBgVideo from '@/components/HeroBgVideo.vue'
import SocialLinks from '@/components/SocialLinks.vue'
</script>

<template>
    <header class="w-screen h-screen">

        <!-- NAVBAR -->
        <nav class="w-full">
            <section class="wrapper flex flex-row items-center justify-between mx-40 py-6">

                <!-- LOGO -->
                <RouterLink to="/">
                    <img class="h-3 opacity-70" src="@/assets/img/BRNK_LOGO_WHT_PNG_NOBG.png" alt="png/logo">
                </RouterLink>

                <!-- SOCIAL MEDIA -->
                <SocialLinks />
            </section>
        </nav>

        <!-- BG VIDEO -->
        <section>
            <HeroBgVideo />
        </section>

        <!-- Sub title -->
        <section class="w-full flex items-end absolute top-0 h-full -z-10">
            <div flex items-center w-full px-40>
                <h2 class="w-30rem text-4xl font-bold py-10">
                    DIGITAL CREATOR & WEB DEVELOPER
                </h2>
                <!-- put a white line in tailwindcss -->
                <div w-full>
                    <hr class="border-1 border-slate-500">
                </div>
            </div>
        </section>
    </header>
</template>


<style scoped>
* {
    color: white;
}

h2 {
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 300;
    opacity: 70%;
}
</style>