<script setup>
import AboutTextEng from './AboutTextEng.vue';
import AboutTextFr from './AboutTextFr.vue';
import HomeAboutVideoVue from './HomeAboutVideo.vue';
import { ref } from 'vue';

const currentLanguage = ref('eng'); // default language

const setLanguage = (lang) => {
    currentLanguage.value = lang;
};
</script>

<template>
    <div class="wrap" h-screen flex flex-row bg-black>
        <!-- Video -->
        <section class="wrap__photoSection flex items-center justify-center w-full h-full">
            <div class="wrap__photoContainer w-[800px] h-[800px] overflow-hidden rounded-5">
                <!-- <img
          class="object-cover w-full"
          src="@/assets/img/selfportrait.jpg"
          alt="Photo"
        /> -->
                <HomeAboutVideoVue />
            </div>
        </section>

        <!-- Text -->
        <section class="wrap__text" w-full flex flex-col>
            <!-- Language switch -->
            <article flex justify-end pr-5 pt-5>
                <p
                    @click="setLanguage('eng')"
                    cursor-pointer
                    :class="{ active: currentLanguage === 'eng' }"
                >
                    ENG
                </p>
                <p>-</p>
                <p
                    @click="setLanguage('fr')"
                    cursor-pointer
                    :class="{ active: currentLanguage === 'fr' }"
                >
                    FR
                </p>
            </article>

            <!-- DYNAMIC COMPONENT -->
            <component
                h-full
                flex
                items-center
                :is="currentLanguage === 'eng' ? AboutTextEng : AboutTextFr"
            ></component>
        </section>
    </div>
</template>

<style scoped>
p {
    font-family: sans-serif;
    font-size: 14px;
    margin-bottom: 1rem;
    color: #e2e2e2ee;
    padding: 0 2px;
    font-weight: 600;
}
.active {
    color: #ffe601; /* Change this to the color you want */
}

@media screen and (max-width: 600px) {
    p {
        font-size: 12px;
    }

    article {
        padding: 0 1.25rem;
    }

    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .wrap__photoSection {
        width: 100%;
    }
    .wrap__photoContainer {
        width: 140px;
        height: 140px;
    }

    .wrap__photoContainer img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
}
</style>
