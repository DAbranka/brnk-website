<script setup>
import { useProjectsImg } from '@/composables/useProjectsImg';
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import mediumZoom from 'medium-zoom';

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

// * State Management for Project Details
const showDetailCard = ref(false);
const selectedProject = ref(null);
const showFullscreenImage = ref(false);
const selectedImage = ref(null);
const isZoomedIn = ref(false);
const selectedIndex = ref(0);
const selectedProjectIndex = ref(0);



// * Function to show project details
const showDetails = (project) => {
    showDetailCard.value = true;
    selectedProjectIndex.value = showDetailCard.value ? projects.value.findIndex((p) => p.id === project.id) : 0;
    selectedProject.value = project;
    document.body.classList.add('no-scroll'); // Disable body scroll
};

// * Function to close project details
const closeDetails = () => {
    showDetailCard.value = false;
    selectedProject.value = null;
    document.body.classList.remove('no-scroll'); // Enable body scroll
};

// * Open and close fullscreen image
const openFullscreenImage = (image) => {
    selectedImage.value = image;
    showFullscreenImage.value = true;
    document.body.classList.add('no-scroll'); // Disable body scroll
};

const closeFullscreenImage = () => {
    showFullscreenImage.value = false;
    selectedImage.value = null;
    isZoomedIn.value = false;
};

// * Toggle zoom
const toggleZoom = () => {
    isZoomedIn.value = !isZoomedIn.value;
};

/**
 *  * Function to show the next image in the selected project.
 */
const showNextImage = () => {
    if (selectedIndex.value < selectedProject.value.image.length - 1) {
        selectedIndex.value++;
        selectedImage.value = selectedProject.value.image[selectedIndex.value];
    }
};

/**
 *  * Function to show the previous image in the selected project.
 */
const showPrevImage = () => {
    if (selectedIndex.value > 0) {
        selectedIndex.value--;
        selectedImage.value = selectedProject.value.image[selectedIndex.value];
    }
};

// * Function to show the next project in the projects array.
const showNextProject = () => {
    if (selectedProjectIndex.value < projects.value.length - 1) {
        selectedProjectIndex.value++;
        selectedProject.value = projects.value[selectedProjectIndex.value];
    };
}

// * Function to show the previous project in the projects array.
const showPrevProject = () => {
    if (selectedProjectIndex.value > 0) {
        selectedProjectIndex.value--;
        selectedProject.value = projects.value[selectedProjectIndex.value];
    }
};

// * Handle keyboard navigation
const handleKeydown = (event) => {
    if (showFullscreenImage.value) {
        if (event.key === 'ArrowRight') {
            showNextImage();
        } else if (event.key === 'ArrowLeft') {
            showPrevImage();
        }
    } else if (showDetailCard.value) {
        if (event.key === 'ArrowRight') {
            showNextProject();
        } else if (event.key === 'ArrowLeft') {
            showPrevProject();
        }
    }
};

onMounted(() => {
    mediumZoom('.zoomable');
    window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    document.body.classList.remove('no-scroll');
    window.removeEventListener('keydown', handleKeydown);
});

// * Check if the selected project has images less than 3
const isFewImages = computed(() => {
    return selectedProject.value?.image.length <= 3;
});

// * Watch for changes in selectedProject and reset the video element
watch(selectedProject, () => {
    const video = document.querySelector('.modal-content__video');
    if (video) {
        video.load();
    }
});
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
                <div v-for="project in projects" :key="project.id" :class="getImageClasses(project)" class="projectSection__cardsWrap" @click="showDetails(project)">
                    <div class="projectSection__cardTitle" w-full h-full px-6xl text-white font-bold flex items-center justify-center>
                        <p text-center>{{ project.name }}</p>
                    </div>
                    <img :src="project.thumb" alt="Image" @contextmenu.prevent/>
                </div>
            </section>
        </section>

        <!-- Detailed Card Modal -->
        <section v-if="showDetailCard" class="modal" @click.self="closeDetails">
            <button class="prev" @click="showPrevProject">&#10094;</button>
            <article class="modal-content" w-7xl z-20 @click.stop>
                <!-- Close -->
                <span class="closeContainer" @click="closeDetails" >
                    <span class="closeContent">
                        &times;
                    </span>
                </span>

                <!-- HEAD TITLE -->
                <h2>{{ selectedProject.name }}</h2>

                <!-- VIDEO -->
                <div v-if="selectedProject.video">

                <video class="modal-content__video" v-for="(video, index) in selectedProject.video" :key="index"  autoplay loop muted controls controlsList="nodownload" >
                    <source :src="video" type="video/mp4" @contextmenu.prevent/>
                </video>
                </div>

                <!-- IMAGE GALLERY -->
                <section :class="{'few-images': isFewImages, 'image-gallery': !isFewImages}" v-if="selectedProject.image && selectedProject.image.length > 0">
                    <div v-for="(image, index) in selectedProject.image" :key="index">
                        <img :src="image" alt="Image" class="zoomable" @click="openFullscreenImage(image)" @contextmenu.prevent/>
                    </div>
                </section>

                <!-- DESCRIPTION -->
                <p>{{ selectedProject.description }}</p>
            </article>
            <button class="next" @click="showNextProject">&#10095;</button>
        </section>

        <!-- Full-Screen Image Modal -->
        <div v-if="showFullscreenImage" class="fullscreen-modal" >
            <div class="fullscreen-content" @click.self="closeFullscreenImage">
                <button class="prev" @click="showPrevImage">&#10094;</button>
                <img :src="selectedImage" alt="Full Screen Image" class="zoomable-image" :class="{'zoomed-in': isZoomedIn}" @click="toggleZoom" @contextmenu.prevent/>
                <button class="next" @click="showNextImage">&#10095;</button>
            </div>
        </div>
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

/* MODAL */
.modal {
    position: fixed;
    z-index: 1000;
    padding-top: 2rem;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    overflow-y: scroll; /* Enable scrolling within the modal */
}

.closeContainer {
    display: none;
}

.modal-content {
    position: relative;
    background-color: rgb(0, 0, 0);
    border-radius: 15px 15px 0 0;
    width: calc(100vw - 30rem);
    margin: 0 auto;
    color: white;
}

.modal-content h2{
    padding: 12rem 15rem 7rem 15rem;
    font-size: 5rem;
}

.modal-content p{
    padding: 12rem 15rem;
    font-size: 3rem;
}

.modal-content img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
    pointer-events: all;
}

.modal-content video{
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
    vertical-align: middle;
    pointer-events: all;
}

.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    gap: 1rem;
    grid-auto-rows: 700px;
    grid-auto-flow: dense;
    padding: 10rem 0 3rem 0;
}

.few-images {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* .few-images :nth-child(1){
    margin-bottom: 2rem;
} */

/* Medium-Zoom specific styles */
.zoomable {
    cursor: pointer;
}

/* Full-Screen Modal Styles */
.fullscreen-modal {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    overflow-y: auto;
}

.fullscreen-content {
    position: relative;
    max-width: 90%;
    max-height: 100%;
    margin: 3rem;
}

.zoomable-image {
    width: 100%;
    height: 100%;
    cursor: zoom-in;
    transition: transform 0.3s ease;
    pointer-events: all;
}

.zoomed-in {
    transform: scale(2); /* Adjust the scale as needed */
    cursor: zoom-out;
}

.fullscreen-content .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
}

/* Navigation Buttons */
.prev, .next {
    cursor: pointer;
    position: fixed;
    width: auto;
    top: 50%;
    padding: 12px 28px;
    margin: 0 5rem;
    color: white;
    font-weight: bold;
    font-size: 2.5rem;
    transition: 0.6s ease;
    border: none;
    border-radius: 50px 0 0 50px;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.5);
}

.next {
    right: 0;
    border-radius: 0 50px 50px 0;
}
.prev {
    left: 0;
}

.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
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
        /* border-radius: 20px; */
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

    /* MODAL */
    .modal {
        padding-top: 3rem;
    }

    .modal-content {
        /* position: fixed; */
        bottom: 0;
        width: 100%;
        margin: 0;
    }

    .closeContainer {
        display: flex;
        justify-content: flex-end;
        font-size: 3rem;
    }

    .closeContent {
        display: flex;
        justify-content: center;
        margin: 1rem 2rem 0 0;
    }

    .modal-content h2{
        padding: 0 2rem 2rem 2rem;
        font-size: 2rem;
    }

    .modal-content p{
        padding: 5rem 3rem 5rem 3rem;
        font-size: 1.3rem;
    }
    .modal-content img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
        object-fit: cover;
        pointer-events: all;
    }

    .prev, .next {
        display: none;
    }

    .fullscreen-content {
        /* Layout */
        display: flex;
        align-items: center;
        /* Spacing */
        margin: 1rem;
    }

    .zoomable-image {
        height: auto;
    }

    .image-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        grid-auto-rows: 400px;
        grid-auto-flow: dense;
        padding: 0 0 0 0;
    }

    .few-images{
        margin-bottom: 0;
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