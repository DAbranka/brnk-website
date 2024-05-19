<script setup>
import { useProjects } from '@/composables/useProjects';

const { projects } = useProjects();

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
        <section >
            <!-- LATEST WORKS TITLE -->
            <div class="latestWorkTitle" pt-5>
                <div class="latestWorkTitle--slide">
                    <p text-18rem font-700 uppercase whitespace-nowrap>Latest Work•</p>
                </div>
                <div class="latestWorkTitle--slide">
                    <p text-18rem font-700 uppercase whitespace-nowrap>Latest Work•</p>
                </div>
            </div>


            <!-- Categories Titles -->
            <!-- <div mt-2 w-2xl>
                <ul font-300 text-xs text-blueGray-5 flex justify-between decoration-none list-none>
                    <li>All</li>
                    <li>Modélisation 3D</li>
                    <li>Visualisation Architecturale</li>
                    <li>Animation 3D</li>
                    <li>Motion Graphics</li>
                    <li>Products Promotion</li>
                </ul>
            </div> -->
        </section>

        <!-- Projects Grid Section -->
        <section class="projectSection">
            <section class="projectSection--grid" my-5 px-15>
                <div
                    v-for="project in projects"
                    :key="project.id"
                    :class="getImageClasses(project)"
                >
                    <img v-if="project.type === 'image'" :src="project.image" alt="Image" />
                    <video
                        v-else-if="project.type === 'video'"
                        :src="project.video"
                        controls
                    ></video>
                </div>
            </section>
        </section>
    </div>
</template>

<style scoped>
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

.projectSection--grid img,
video {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    display: inline-block;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;
}

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

@media screen and (max-width: 600px) {
    .projectSection--grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-auto-rows: 300px;
        justify-content: center;
    }

    .latestWorkTitle--slide p {
        font-size: 5rem;
        font-weight: 900;
    }
}
</style>
