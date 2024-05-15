<script setup>
import { RouterView } from 'vue-router';
import TheNavBar from './components/TheNavBar.vue';
import HomePage from './views/HomePage.vue';
import TheFooter from './components/TheFooter.vue';

const ScrollToHGP = () => {
    window.scrollTo({
        top: document.getElementById('HomepageProjectGrid').offsetTop,
        behavior: 'smooth'
    });
};

const ScrollToHAS = () => {
    window.scrollTo({
        top: document.getElementById('HomepageAboutSection').offsetTop,
        behavior: 'smooth'
    });
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<template>
    <div>
        <header>
            <nav><TheNavBar @ScrollToHGP="ScrollToHGP" @ScrollToHAS="ScrollToHAS" /></nav>
        </header>

        <main>
            <HomePage />
            <!-- Scroll back up to top button -->
            <div flex justify-end>
                <button
                    @click="scrollToTop"
                    class="scrollToTopBtn"
                    w18
                    h18
                    cursor-pointer
                    border-none
                    bg-amber
                    rounded-10
                    p-3
                    m-5
                >
                    <svg fill="none" viewBox="0 0 24 24" rounded-3>
                        <path
                            d="M 12 7 L 5 17, M 12 7 L 19 17"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke="black"
                            stroke-width="4"
                            fill="none"
                        />
                    </svg>
                </button>
            </div>
        </main>

        <footer>
            <TheFooter />
        </footer>
    </div>
    <RouterView />
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body,
html {
    font-family: sans-serif;
    background-color: #ededed;
    scroll-behavior: smooth;
}
</style>
