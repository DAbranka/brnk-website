<script setup>
import HeroBgVideo from '@/components/HeroBgVideo.vue'
</script>

<template>
    <div w-screen h-screen>

        <!-- NAVBAR -->
        <nav w-full>
            <div class="wrapper flex flex-row items-center justify-between mx-40 py-6">
                <!-- LOGO -->
            <section>
                <div>
                    <img h-3 src="@/assets/img/BRNK_LOGO_WHT_PNG_NOBG.png" alt="png/logo">
                </div>
            </section>

            <!-- SOCIAL MEDIA -->
            <section>
                <ul list-none flex items-center invert opacity-80 >
                    <li scale-50>
                        <img src="@/assets/img/icons/instagram.svg" alt="svg/instagram">
                    </li>
                    <li scale-50>
                        <img src="@/assets/img/icons/twitter.svg" alt="svg/twitter">
                    </li>
                    <li scale-50>
                        <img src="@/assets/img/icons/youtube.svg" alt="svg/youtube">
                    </li>
                    <li scale-90>
                        <img src="@/assets/img/icons/github.svg" alt="svg/github">
                    </li>
                    <li scale-50>
                        <img src="@/assets/img/icons/linkedin.svg" alt="svg/linkedin">
                    </li>
                </ul>
            </section>
            </div>
        </nav>

        <!-- BG VIDEO -->
        <section>
            <HeroBgVideo absolute top-0 left-0 class="-z-10" />
        </section>

        <!-- SKILLS -->
        <section w-full h-full flex items-end absolute top-0 left-0 class="-z-10">
            <article pb-9 w-full h-18 flex justify-center>
                <ul flex flex-row justify-around w-full list-none>
                    <li>3D ARTIST</li>
                    <li>WEB DEVELOPER</li>
                    <li>PHOTOGRAPHER</li>
                    <li>GRAPHIC DESIGNER</li>
                    <li>MOTION DESIGNER</li>
                </ul>
            </article>
        </section>
    </div>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
    *{
        color: white;
    }
    li{
        
        font-family:monospace;
        font-size: 2rem;
        color: #bbbbbbd4;
    }
</style>