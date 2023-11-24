<script setup>
    import SocialLinks from '@/components/SocialLinks.vue'
</script>

<template>
    <div flex flex-row w-full h-full>

        <!-- Photo -->
        <section class="rounded-3 bg-red w-full h-full flex justify-center items-center overflow-hidden">
            <img class="w-full object-cover" src="@/assets/img/selfportrait.png" alt="Photo">
        </section>

        <section w-full flex flex-col justify-between>
            <!-- TEXT -->
            <article p-10 mt-3xl text-white>
                <p>
                    David Abranka known as BRNK® is a digital creator and web developer based in Liège, Belgium.
                </p>

                <p>
                    He is a self-taught artist who has been creating digital content since 2013.
                </p>

                <p>
                    His work is inspired by the cyberpunk genre and the aesthetics of the 80s and 90s.
                </p>

                <p>
                    He is also a passionate web developer and has been creating websites since 2022. He is currently working on a number of 3D projects as well as his own clothing brand.
                </p>
            </article>
            
            <!-- SOCIAL MEDIA -->
            <SocialLinks />
        </section>

    </div>
</template>


<style scoped>
    p {
        font-family: sans-serif;
        font-size: 16px;
        margin-bottom: 1rem;
        color: #e2e2e2ee;
    }
</style>