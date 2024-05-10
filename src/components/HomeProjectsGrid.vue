<script setup>
import ProjectCardTemplate from './ProjectCardTemplate.vue';
import { useProjects } from '@/composables/useProjects';

const { projects } = useProjects();

const getImageClasses = (project) => {
    const classes = [];
    if (project.width > 100) {
        classes.push('wide');
    }
    if (project.height > 100) {
        classes.push('tall');
    }
    if (project.width > 100 && project.height > 100) {
        classes.push('big');
    }
    return classes;
};
</script>

<template>
    <div>
        <!-- Projects Section Categories -->
        <section mx-18>
            <h2 text-6xl font-900 mt-6>Latest Work</h2>
            <!-- Top Line -->
            <div w-full h-1px rounded-10 bg-blueGray-4 mt-3></div>

            <!-- Categories Titles -->
            <div mt-2 w-2xl>
                <ul font-300 text-xs text-blueGray-5 flex justify-between decoration-none list-none>
                    <li>All</li>
                    <li>Modélisation 3D</li>
                    <li>Visualisation Architecturale</li>
                    <li>Animation 3D</li>
                    <li>Motion Graphics</li>
                    <li>Products Promotion</li>
                </ul>
            </div>
        </section>

        <!-- Projects Grid Section -->
        <section class="projectSection">
            <section class="projectSection--grid" p-15>
                <ProjectCardTemplate
                    v-for="project in projects"
                    :key="project.id"
                    :class="getImageClasses(project)"
                >
                    <img :src="project.image" alt="image/png" />
                </ProjectCardTemplate>
            </section>
        </section>
    </div>
</template>

<style scoped>
.projectSection--grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
    grid-auto-rows: 100px;
    grid-auto-flow: dense;
}

.projectSection--grid .wide {
    grid-column: span 10;
    grid-row: span 5;
}

.projectSection--grid .tall {
    grid-column: span 5;
    grid-row: span 6;
}

.projectSection--grid .big {
    grid-column: span 5;
    grid-row: span 5;
}

.projectSection--grid img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    display: inline-block;
    object-fit: cover;
}
</style>
