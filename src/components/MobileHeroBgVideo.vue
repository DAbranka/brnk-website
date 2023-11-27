<script setup>
    
</script>

<template>
    <div>
        <section class="fixed-video" w-screen h-screen overflow-hidden absolute top-0 left-0 z--10>
            <div w-screen h-screen>
                <img w-screen h-screen src="@/assets/img/BRNK_Flag.png" alt="png">
            </div>
        </section>
    </div>
</template>

<style scoped>
    @media (max-width: 600px) {
    /* CSS for mobile screens */
    .fixed-video {
        display: flex;
    }
}
</style>