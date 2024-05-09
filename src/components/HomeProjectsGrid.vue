<script setup>
import ProjectCardTemplate from './ProjectCardTemplate.vue';
import { useProjects } from '@/composables/useProjects';

const { projects } = useProjects();
</script>

<template>
    <div>
        <section class="projectSection" flex justify-center>
            <section class="projectSection--grid" grid grid-cols-3 gap-sm m-2xl>
                <ProjectCardTemplate
                    ><img :src="projects[0].image" alt="image/png" h-3xl
                /></ProjectCardTemplate>
                <ProjectCardTemplate
                    ><img :src="projects[1].image" alt="image/png" h-3xl
                /></ProjectCardTemplate>
                <ProjectCardTemplate>
                    <img :src="projects[2].image" alt="image/png" h-3xl />
                </ProjectCardTemplate>
            </section>
        </section>
    </div>
</template>

<style scoped></style>
