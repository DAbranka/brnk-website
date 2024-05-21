<script setup>
import { RouterView } from 'vue-router';
import TheNavBar from './components/TheNavBar.vue';
import HomePage from './views/HomePage.vue';
import TheFooter from './components/TheFooter.vue';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
import { ref } from 'vue';

// * Scroll to Homepage Project Grid
const ScrollToHGP = () => {
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
    window.scrollTo({
        top: document.getElementById('HomepageProjectGrid').offsetTop,
        behavior: 'smooth'
    });
};

// * Scroll to Homepage About Section
const ScrollToHAS = () => {
    window.scrollTo({
        top: document.getElementById('HomepageAboutSection').offsetTop,
        behavior: 'smooth'
    });
};

// * Scroll to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// * Show scroll to top button
const showScrollToTopBtn = ref(false);

// * Show scroll to top button when scrolling down
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

// * Hide navbar on scroll down and show on scroll up
const lastScrollTop = ref(0);
let navbar;

onMounted(() => {
    // * Get the navbar
    navbar = document.getElementById('navbar');
    console.log('the navbar: ', navbar);
});

// * Hide navbar on scroll down and show on scroll up
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
                z-20
            >
                <TheNavBar @ScrollToHGP="ScrollToHGP" @ScrollToHAS="ScrollToHAS" />
            </nav>
        </header>

        <main>
            <HomePage />

            <!-- Scroll back up to top button -->
            <div class="scrollToTopBtn" flex justify-end py-12 fixed bottom-0 right-0 left-0 z-2>
                <button
                    v-show="showScrollToTopBtn"
                    @click="scrollToTop"
                    bg-prime
                    w18
                    h18
                    cursor-pointer
                    border-none
                    p-2
                    mr-15
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
    scroll-padding-top: var(--navbar-height, 3rem);
}

#navbar {
    transition: top 0.3s ease-in-out 0.1s;
}

/* CSS FOR PHONE SCREEN */
@media screen and (max-width: 600px) {
    .scrollToTopBtn {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .scrollToTopBtn button {
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2.8rem;
    }
}
</style>
