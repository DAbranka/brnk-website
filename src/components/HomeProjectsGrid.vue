<script setup>
import { useProjectsImg } from '@/composables/useProjectsImg';

const { projects } = useProjectsImg();

const getImageClasses = (project) => {
    const classes = [];
    if (project.width > 600) {
        classes.push('wide');
    }
    if (project.height > 600) {
        classes.push('tall');
    }
    if (project.width > 600 && project.height > 600) {
        classes.push('big');
    }
    return classes;
};
</script>

<template>
    <div>
        <!-- Projects Section Categories -->
        <section>
            <!-- LATEST WORKS TITLE -->
            <div class="latestWorkTitle" pt-5>
                <div class="latestWorkTitle--slide">
                    <p text-18rem font-700 uppercase whitespace-nowrap>Latest Work•</p>
                </div>
                <div class="latestWorkTitle--slide">
                    <p text-18rem font-700 uppercase whitespace-nowrap>Latest Work•</p>
                </div>
            </div>
        </section>

        <!-- Projects Grid Section -->
        <section class="projectSection">
            <section class="projectSection--grid" my-5 px-15>
                <RouterLink to="/" v-for="project in projects" :key="project.id" :class="getImageClasses(project)" class="projectSection__cardsWrap">
                    <div class="projectSection__cardTitle" w-full h-full px-6xl  text-white font-bold flex items-center justify-center>
                        <p text-center>{{ project.name }}</p>
                    </div>
                    <img :src="project.image" alt="Image" @contextmenu.prevent/>
                </RouterLink>
            </section>
        </section>
    </div>
</template>

<style scoped>
.projectSection {
    padding: 0 0 6rem 0;
}

/* CARDS GRID */
.projectSection--grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 1rem;
    grid-auto-rows: 600px;
    grid-auto-flow: dense;
}

.projectSection--grid .wide {
    grid-column: span 2;
}

.projectSection--grid .tall {
    grid-row: span 2;
}

.projectSection--grid .big {
    grid-column: span 1;
    grid-row: span 1;
}

.projectSection--grid img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
    border-radius: 20px;
}

/* CARDS WRAP */
.projectSection__cardsWrap {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.projectSection__cardsWrap:hover{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.projectSection__cardsWrap img {
    display: block;
    transform: scale(1.15);
    z-index: -1;
    opacity: 1; /* Default opacity for cards */
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; /* Smooth transition on hover and hover-out */
}

.projectSection__cardsWrap:hover img {
    transform: scale(1);
}

.projectSection__cardsWrap:active{
        transform: scale(0.9);
        transition: transform 0.3s ease-in-out;
    }

/* CARDS TITLE */
.projectSection__cardTitle p {
    font-size: 4.5rem;
}

.projectSection__cardTitle{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 1;
    /* pointer-events: none; */
}

.projectSection__cardTitle:hover{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 1;
}

/* LATEST WORK TITLE */
.latestWorkTitle {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}
.latestWorkTitle--slide {
    display: flex;
    flex-direction: row;
    animation: slide 10s linear infinite;
}
@keyframes slide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

/* CSS FOR PHONE SCREEN */
@media screen and (max-width: 600px) {
    .projectSection {
        padding: 0 0 2rem 0;
    }
    .projectSection--grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-auto-rows: 350px;
        justify-content: center;
        justify-items: center;
        margin: 0 auto;
    }

    .projectSection--grid img,
    video {
        width: calc(100vw - 2em);
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        vertical-align: middle;
        object-fit: cover;
        overflow: hidden;
        border-radius: 20px;
}

    /* CARDS WRAP */
    .projectSection__cardsWrap{
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
        transition: 0.3s ease-in-out;
    }

    .projectSection__cardsWrap:hover{
        transform: translateY(0);
        transition: 0.3s ease-in-out;
    }

    .projectSection__cardsWrap img {
        transform: scale(1);
}

    .projectSection__cardsWrap:active{
        transform: scale(0.9);
        transition: 0.3s ease-in-out;
    }

    /* CARDS TITLE */
    .projectSection__cardTitle {
        opacity: 1;
        transition: none;
        padding: 0;
        display: flex;
        align-items: flex-end;
    }

    .projectSection__cardTitle:hover {
        background: none;
    }

    .projectSection__cardTitle p {
        display: flex;
        align-items: end;
        justify-content: center;
        width: 100%;
        height: 50%;
        font-size: 2.3rem;
        padding: 0 1rem 1.3rem 1rem;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.976));
    }

    /* LATEST WORK TITLE */
    .latestWorkTitle {
        padding: 0.5rem 0 ;
    }

    .latestWorkTitle--slide p {
        font-size: 7rem;
        font-weight: 900;
    }
}

/* CSS FOR LAPTOP SCREEN */
@media screen and (min-width: 600px) and (max-width: 1600px) {
    .projectSection--grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-auto-rows: 450px;
        justify-content: center;
        margin: 0 auto;
    }

    .projectSection__cardTitle {
        padding: 1rem 0;
    }

    .projectSection__cardTitle p {
        font-size: 3.5rem;
    }
}
</style>
style