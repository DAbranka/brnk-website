<script setup></script>

<template>
    <div>
        <section>
            <video class="mobileBgVideo" autoplay muted loop>
                <source class="mobileBgVideo__source" src="@/assets/video/brrrnk_hero_bg_video.mp4" type="video/mp4" />
            </video>
        </section>
    </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
    .mobileBgVideo {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    .mobileBgVideo__source {
        width: 100%;
        height: 100%;
    }
}
</style>
