<script setup>
    import SocialLinks from '@/components/SocialLinks.vue'
</script>

<template>
    <div>
        <!-- SOCIAL MEDIA -->
        <!-- <SocialLinks /> -->

        <!-- ABOUT PAGE -->
        <section class="aboutSection" w-full h-full absolute top-0 left-0 flex justify-center items-center>
            <div rounded-2xl flex justify-center items-center>
                <article class="aboutCard flex flex-col justify-center items-center">
                    <p class="text-4xl text-white">BRNK</p>
                    <p class="text-4xl text-white">WEB DEVELOPER</p>
                </article>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .aboutSection {
        background-color: #00000071;
    }

    .aboutCard {
    border-radius: 20px;
    padding: 20px;
    width: 800px;
    height: 600px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(10px);
    background-color: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.303);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

    .aboutCard p {
        font-family: sans-serif;
        font-size: 16px;
        font-weight: bolder;
        opacity: 70%;
    }
</style>