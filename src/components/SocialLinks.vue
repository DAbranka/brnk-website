<template>
    <div>
        <section class="contactLinks--grid" mx-5>
            <!-- mail to -->
            <section class="contactMe" flex flex-col justify-center>
                <h3 text-2xl mb-2>CONTACT</h3>
                <a href="mailto:davidabranka@gmail.com" w="28px" cursor-pointer z-20>
                    <img src="@/assets/img/icons/mail.svg" alt="mail/svg" w-7 />
                </a>
            </section>

            <!-- Social Links -->
            <section class="followMe">
                <h3 uppercase mb-2 text-2xl>Follow Me</h3>

                <!-- ICONS -->
                <section class="socialIcons" w-40>
                    <ul list-none invert flex justify-between items-center w-full>
                        <!-- INSTAGRAM -->
                        <li>
                            <a href="https://www.instagram.com/brnkill/" target="_blank">
                                <img src="@/assets/img/icons/instagram.svg" alt="Instagram" w-7 />
                            </a>
                        </li>
                        <!-- todo: Replace this by Vimeo -->
                        <!-- <li scale-40>
                    <a href="https://twitter.com/__BRNK__" target="_blank">
                        <img src="@/assets/img/icons/twitter.svg" alt="Twitter" />
                    </a>
                </li> -->
                        <!-- YOUTUBE -->
                        <li>
                            <a
                                href="https://www.youtube.com/channel/UCkVtFn_SuLY3FF_jLGFX2GQ"
                                target="_blank"
                            >
                                <img src="@/assets/img/icons/youtube.svg" w-8 alt="Youtube" />
                            </a>
                        </li>
                        <!-- GITHUB -->
                        <li>
                            <a href="https://github.com/DAbranka" target="_blank">
                                <img src="@/assets/img/icons/github.svg" w-7 alt="Github" />
                            </a>
                        </li>
                        <!-- LINKEDIN -->
                        <li>
                            <a href="https://www.linkedin.com/in/david-abranka/" target="_blank">
                                <img src="@/assets/img/icons/linkedin.svg" w-7 alt="Linkedin" />
                            </a>
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    </div>
</template>

<style scoped>
.contactLinks--grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.socialIcons {
    position: relative;
    z-index: 20;
}

a {
    display: block;
    height: auto;
}
@media screen and (max-width: 600px) {
    .contactLinks--grid {
        display: block;
        margin: 0;
        padding: 0;
    }

    .followMe h3,
    .contactMe h3 {
        font-size: 1.2rem;
        font-weight: 300;
        margin: 0;
        padding: 0;
    }
}
</style>
