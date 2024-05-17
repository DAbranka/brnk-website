<script setup>
import { RouterView } from 'vue-router';
import TheNavBar from './components/TheNavBar.vue';
import HomePage from './views/HomePage.vue';
import TheFooter from './components/TheFooter.vue';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
import { ref } from 'vue';

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

const showScrollToTopBtn = ref(false);

const handleScroll = () => {
    if (window.scrollY > 100) {
        showScrollToTopBtn.value = true;
    } else {
        showScrollToTopBtn.value = false;
    }
};
window.addEventListener('scroll', handleScroll);

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const lastScrollTop = ref(0);
let navbar;

onMounted(() => {
    navbar = document.getElementById('navbar');
    console.log('the navbar: ', navbar);
});

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop.value) {
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop.value = scrollTop;
});
</script>

<template>
    <div>
        <header>
            <nav
                id="navbar"
                :class="{ hidden: isScrollingDown }"
                bg-white
                fixed
                left-0
                top-0
                right-0
                z-10
            >
                <TheNavBar @ScrollToHGP="ScrollToHGP" @ScrollToHAS="ScrollToHAS" />
            </nav>
        </header>

        <main>
            <HomePage />
            
            <!-- Scroll back up to top button -->
            <div flex justify-end py-12 fixed bottom-0 right-0 left-0>
                <button
                    v-show="showScrollToTopBtn"
                    @click="scrollToTop"
                    class="scrollToTopBtn"
                    bg-prime
                    w18
                    h18
                    cursor-pointer
                    border-none
                    rounded-10
                    p-2
                    mr-15
                    opacity-95
                >
                    <svg fill="none" viewBox="0 0 24 24" rounded-3>
                        <path
                            d="M 12 7 L 5 17, M 12 7 L 19 17"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke="black"
                            stroke-width="2"
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
    background-color: #ebebeb;
    scroll-behavior: smooth;
}

#navbar {
    transition: top 0.3s ease-in-out 0.1s;
}

.scrollToTopBtn {
    transition: all 0.3s ease-in-out 0.3s;
}
</style>
