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
    <div my-6xl>
        <!-- Projects Section Categories -->
        <section mx-18>
            <h2 text-6xl font-900 uppercase>Latest Work</h2>
            <!-- Top Line -->
            <div w-full h-1px rounded-10 bg-blueGray-4 mt-3></div>

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

@media screen and (max-width: 600px) {
    .projectSection--grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-auto-rows: 300px;
        justify-content: center;
    }
}
</style>
