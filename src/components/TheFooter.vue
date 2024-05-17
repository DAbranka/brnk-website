<script setup>
import SocialLinks from './SocialLinks.vue';
import TheFooterForm from './TheFooterForm.vue';
</script>

<template>
    <div>
        <section class="footerWrap" bg-black text-white>
            <section>
                <!-- Tell me about your project -->
                <!-- <TheFooterForm /> -->
            </section>

            <!-- Top Line -->
            <div flex justify-center px-12 rounded-10>
                <hr border-none bg-white w-full h-0.2 />
            </div>
            <section class="footerWrap--grid">
                <!-- LOGO && ABOUT -->
                <section class="logoSection" mx-5>
                    <!-- LOGO -->
                    <div mb-1>
                        <img src="@/assets/img/BRNK_LOGO_WHT_PNG_NOBG.png" alt="logo" h-11 />
                    </div>

                    <!-- JOB TITLE -->
                    <section>
                        <article class="jobTitle">
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

@media screen and (max-width: 600px) {
    .footerWrap--grid {
        display: flex;
        flex-direction: column;
    }
    .logoSection {
        margin: 0;
        padding: 0;
    }

    .logoSection img {
        height: 2rem;
    }

    .jobTitle p {
        font-size: 1rem;
        line-height: 0.5rem;
    }
}
</style>
