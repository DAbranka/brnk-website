<script setup>
import ProjectCardTemplate from './ProjectCardTemplate.vue';
</script>

<template>
    <div>
        <section class="projectSection" flex justify-center>
            <section class="projectSection--grid" grid grid-cols-3 gap-sm m-2xl>
                <ProjectCardTemplate
                    ><img
                        src="@/assets/img/projects/0324_003_My_Bedroom_Table Frame Cover.png"
                        alt="image/png"
                        h-3xl
                /></ProjectCardTemplate>
                <ProjectCardTemplate
                    ><img
                        src="@/assets/img/projects/0324_003_My_Bedroom_Table_Frame_001.png"
                        alt="image/png"
                        h-3xl
                /></ProjectCardTemplate>
                <ProjectCardTemplate
                    ><img
                        src="@/assets/img/projects/SOBORG_CHAIR_002.png"
                        alt="image/png"
                        h-full
                /></ProjectCardTemplate>
            </section>
        </section>
    </div>
</template>

<style scoped></style>
