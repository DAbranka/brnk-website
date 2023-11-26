<script setup>
    import SocialLinks from '@/components/SocialLinks.vue'
    import AboutTextEng from './AboutTextEng.vue';
    import AboutTextFr from './AboutTextFr.vue';
    import { ref } from 'vue'

    const currentLanguage = ref('eng'); // default language

    const setLanguage = (lang) => {
        currentLanguage.value = lang;
    }
</script>

<template>
    <div flex flex-row w-full h-full>

        <!-- Photo -->
        <section class="rounded-3 w-full h-full flex justify-center items-center overflow-hidden">
            <img class="w-full object-cover" src="@/assets/img/selfportrait.png" alt="Photo">
        </section>

        <!-- Text -->
        <section w-full flex flex-col justify-between>

            <!-- Language switch -->
            <article flex justify-end pr-5 pt-5>
                <p @click="setLanguage('fr')" cursor-pointer :class="{ active: currentLanguage === 'fr' }">
                    FR
                </p>
                <p>
                    -
                </p>
                <p @click="setLanguage('eng')" cursor-pointer :class="{ active: currentLanguage === 'eng' }">
                    ENG
                </p>
            </article>
            
            <!-- DYNAMIC COMPONENT -->
            <component :is="currentLanguage === 'eng' ? AboutTextEng : AboutTextFr"></component>
            
            <!-- SOCIAL MEDIA -->
            <SocialLinks pr-5 />
        </section>

    </div>
</template>

<style scoped>
    p {
        font-family: sans-serif;
        font-size: 16px;
        margin-bottom: 1rem;
        color: #e2e2e2ee;
        padding: 0 2px;
        font-weight: 600;
    }
    .active {
        color: #41ecc7; /* Change this to the color you want */
    }
</style>

