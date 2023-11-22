<script setup>
    import HeroBgVideo from '@/components/HeroBgVideo.vue'
    import SocialLinks from '@/components/SocialLinks.vue'
</script>

<template>
    <div w-screen h-screen>

        <!-- NAVBAR -->
        <nav w-full>
            <section class="wrapper flex flex-row items-center justify-between mx-40 py-6">

                <!-- LOGO -->
                <RouterLink to="/">
                    <img h-3 src="@/assets/img/BRNK_LOGO_WHT_PNG_NOBG.png" alt="png/logo">
                </RouterLink>

                <!-- SOCIAL MEDIA -->
                <SocialLinks />
            </section>
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
</style>