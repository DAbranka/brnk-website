<script setup>
import SocialLinks from './SocialLinks.vue';
import TheFooterForm from './TheFooterForm.vue';
</script>

<template>
    <div>
        <section class="footerWrap" bg-black text-white>
            <section bg-gray-4>
                <!-- Tell me about your project -->
                <TheFooterForm />
            </section>

            <section class="footerWrap--grid">
                <!-- LOGO && ABOUT -->
                <section mx-5>
                    <!-- LOGO -->
                    <div mb-1>
                        <img src="@/assets/img/BRNK_LOGO_WHT_PNG_NOBG.png" alt="logo" h-11 />
                    </div>

                    <!-- About -->
                    <section>
                        <article>
                            <p text-xl font-500>_3D ARTIST & MOTION DESIGNER.</p>
                        </article>
                    </section>
                </section>

                <!-- Follow me on -->

                <SocialLinks />
            </section>
        </section>
    </div>
</template>

<style scoped>
.footerWrap--grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
}
</style>
