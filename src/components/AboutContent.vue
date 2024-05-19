<script setup>
import AboutTextEng from './AboutTextEng.vue';
import AboutTextFr from './AboutTextFr.vue';
import HomeAboutVideoVue from './HomeAboutVideo.vue';
import { ref } from 'vue';

const currentLanguage = ref('eng'); // default language

// const setLanguage = (lang) => {
//     currentLanguage.value = lang;
// };
</script>

<template>
    <div bg-black>
        <div class="wrap" h-screen flex flex-row bg-black>
            <!-- Video -->
            <section class="wrap__photoSection flex items-center justify-center w-full h-full">
                <div class="wrap__photoContainer w-[800px] h-[800px] overflow-hidden rounded-5">
                    <HomeAboutVideoVue />
                </div>
            </section>

            <!-- Text -->
            <section class="wrap__text" w-full flex flex-col>
                <!-- Language switch -->
                <!-- <article flex justify-end pr-5 pt-5>
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
            </article> -->

                <!-- DYNAMIC COMPONENT -->
                <component
                    class="aboutTxt_content"
                    h-full
                    flex
                    items-center
                    :is="currentLanguage === 'eng' ? AboutTextEng : AboutTextFr"
                ></component>
            </section>
        </div>
    </div>
</template>

<style scoped>
p {
    font-size: 14px;
    margin-bottom: 1rem;
    color: #ebebeb;
    padding: 0 2px;
    font-weight: 600;
}
.active {
    color: #f1f875; /* Change this to the color you want */
}

/* CSS FOR PHONE SCREEN */
@media screen and (max-width: 600px) {
    p {
        font-size: 16px;
        font-weight: 900;
    }

    article {
        padding-top: 1rem;
    }

    .aboutTxt_content {
        display: block;
        padding-top: 8rem;
    }

    .wrap__text {
        z-index: 1;
    }

    .wrap {
        position: relative;
        height: 400px;
        overflow: hidden;
        border-radius: 0 0 20px 20px;
    }

    .wrap__photoSection {
        width: 100vw;
        transform: scale(2);
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 30%;
    }
    .wrap__photoContainer {
        width: 400px;
        height: 400px;
    }
}

/* CSS FOR LAPTOP SCREEN */
@media screen and (min-width: 600px) and (max-width: 1600px) {
    .wrap {
        flex-direction: row;
    }

    .wrap__photoSection {
        width: 100%;
        height: auto;
    }

    .wrap__photoContainer {
        width: 100%;
        height: auto;
        max-width: 620px;
        max-height: 620px;
    }
}
</style>
