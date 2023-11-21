<script setup>
import HeroBgVideo from '@/components/HeroBgVideo.vue'
</script>

<template>
    <div>
        <nav>
        </nav>
        <section>
            <HeroBgVideo absolute top-0 left-0 class="-z-10" />
        </section>
        <section w-screen h-screen flex justify-center items-end>
            <h2 w-max mb-70>
                DIGITAL CREATOR & WEB DEVELOPER
            </h2>
        </section>
    </div>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
    *{
        color: white;
    }
    h2 {
        
        font-family: Merriweather, sans;
        font-size: 2rem;
        color: #BBBBBB;
    }
</style>