<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import gsap from 'gsap';

import HeroBgVideo from '@/components/HeroBgVideo.vue';
import MobileHeroBgVideo from '@/components/MobileHeroBgVideo.vue';

// * Parralax effect composable function
import Rellax from 'rellax';
let rellax;

const windowWidth = ref(window.innerWidth);
const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', updateWidth);

    // * Parralax effect
    rellax = new Rellax('.rellax', {
        speed: -7,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

    // ----------------------------------------------//
    // * Counter effect
    const startLoader = () => {
        const counter = document.querySelector('.preLoader__counter');
        let count = 0;
        /**
         * * Starts a counter interval that increments the count variable by 1 every 50 milliseconds until it reaches 100.
         * * Updates the content of the counter element with the current count.
         * * Stops the counter interval when the count reaches 100.
         */
        let counterInterval = setInterval(() => {
            if (count < 100) {
                count++;
                counter.textContent = count;
            } else {
                clearInterval(counterInterval);
            }
        }, 25);
    };
    startLoader();

    // * GSAP Video Fade Out animation
    gsap.to('.preLoader__vdo', {
        duration: 0.25,
        delay: 4,
        opacity: 0,
    });

    // * GSAP PreLoader Hide animation
    gsap.to('.preLoader', {
        duration: 1,
        delay: 4.3,
        top: '-150%',
        ease: 'power2.inOut'
    });

    // ----------------------------------------------//
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);

    // * Parralax effect
    if (rellax) {
        rellax.destroy();
    }
});

const currentComponent = computed(() =>
    windowWidth.value <= 600 ? MobileHeroBgVideo : HeroBgVideo
);
</script>

<template>
    <!-- PreLoader Overlay -->
    <div class="preLoader" overflow-hidden>
        <div class="preLoader__content" flex justify-center overflow-hidden>
            <!-- PreLoader Counter -->
            <!-- <div class="preLoader__counterContent" flex>
                <div class="preLoader__counter" text-9xl flex>
                    <p>0</p>
                </div>
                <div class="preLoader__percent" text-9xl flex>
                    <p>%</p>
                </div>
            </div> -->

            <!-- PreLoader Video -->
            <section class="preLoader__vdo">
                <video autoplay muted loop>
                    <source
                        src="@/assets/video/BRNK_LOGO_PreLoader_Animation.mp4"
                        type="video/mp4"
                    />
                </video>
            </section>
        </div>
    </div>
    <div class="heroWrap">
        <!-- HERO TEXT -->
        <section class="hero-text">
            <article class="hero-text__content px-[19rem] py-[10rem]">
                <h1 class="hero-text__title text-8xl font-900">
                    Hey there, I'm a passionate 3D artist and motion designer based in Liège,
                    Belgium.
                </h1>
            </article>
        </section>
        <!-- BG VIDEO -->
        <section class="heroBgVideo">
            <component class="rellax" :is="currentComponent"></component>
        </section>
    </div>
</template>

<style scoped>
.heroBgVideo {
    overflow: hidden;
}

.preLoader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.preLoader__content {
    width: 40%;
}

.preLoader__vdo {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.preLoader__vdo video {
    width: 100%;
}

.preLoader__counterContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.preLoader__counter,
.preLoader__percent {
    color: rgb(51, 51, 51);
    font-size: 36vw;
}

/* CSS FOR PHONE SCREEN */
@media (max-width: 600px) {
    .heroWrap {
        position: relative;
        overflow: hidden;
        background: #000;
    }

    .heroBgVideo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 50%;
    }

    .hero-text {
        padding: 15rem 0;
        position: relative;
        z-index: 10;
    }

    .hero-text__content {
        padding: 0 2rem 0 2rem; /* top right bottom left */
        z-index: 10;
    }
    .hero-text__content h1 {
        color: white;
        font-size: 2.5rem;
        font-weight: 300;
        text-align: center;
    }

    .preLoader__content {
        width: 80%;
    }
}

/* CSS FOR LAPTOP SCREEN */
@media (min-width: 600px) and (max-width: 1600px) {
    h1 {
        font-size: 4.5rem;
    }

    .hero-text__content {
        padding: 10rem 15rem;
    }
}
</style>
