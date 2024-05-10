<script setup>
import SocialLinks from './SocialLinks.vue';
</script>

<template>
    <div>
        <section bg-black text-white>
            <!-- LOGO -->
            <div>
                <img src="@/assets/img/BRNK_LOGO_WHT_PNG_NOBG.png" alt="logo" h-12 />
            </div>

            <!-- About -->
            <section>
                <article>
                    <p>
                        I'm a 3D artist and motion designer based in Liege. I specialize in 3D
                        modeling, rendering, and animation. I'm passionate about creating visually
                        stunning content that tells a story.
                    </p>
                </article>
            </section>
            <!-- Contact -->
            <SocialLinks />
            <!-- Tell me about your project -->
        </section>
    </div>
</template>

<style scoped></style>
