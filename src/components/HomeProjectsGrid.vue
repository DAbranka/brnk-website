<script setup>
import ProjectCardTemplate from './ProjectCardTemplate.vue';
import { useProjects } from '@/composables/useProjects';

const { projects } = useProjects();
</script>

<template>
    <div>
        <!-- Projects Section Categories -->
        <section mx-18>
            <!-- Top Line -->
            <div w-full h-1px rounded-10 bg-blueGray-4 mt-3></div>

            <!-- Categories -->
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

        <!-- Projects Section -->
        <section class="projectSection" flex justify-center>
            <section class="projectSection--grid" grid grid-cols-3 gap-sm m-2xl>
                <ProjectCardTemplate v-for="project in projects" :key="project.id">
                    <img :src="project.image" alt="image/png" class="h-3xl" />
                </ProjectCardTemplate>
            </section>
        </section>
    </div>
</template>

<style scoped></style>
