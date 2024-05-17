<script setup></script>

<template>
    <div>
        <section>
            <video autoplay muted loop>
                <source src="@/assets/video/brrrnk_hero_bg_video.mp4" type="video/mp4" />
            </video>
        </section>
    </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
    video {
        width: 100%;
        height: auto;
    }
}
</style>
