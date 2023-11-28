<script setup>
    
</script>

<template>
    <div>
        <section  w-screen h-screen overflow-hidden absolute top-0 left-0 z--10>
            <video class="fixed-video" w-full h-full autoplay muted loop>
                <source src="@/assets/video/BRNK_Flag_Mobile.mp4" type="video/mp4">
            </video>
        </section>
    </div>
</template>

<style scoped>
    .fixed-video {
        object-fit: fill;
    }
</style>