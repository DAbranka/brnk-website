<template>
    <div>
        <section>
            <!-- mail to -->
            <a href="mailto:davidabranka@gmail.com" text-white decoration-none> davidabranka@gmail.com </a>

            <!-- Social Links -->
            <ul list-none invert flex items-center>
                <!-- INSTAGRAM -->
                <li >
                    <a href="https://www.instagram.com/brnkill/" target="_blank">
                        <img src="@/assets/img/icons/instagram.svg" alt="Instagram" />
                    </a>
                </li>
                <!-- todo: Replace this by Vimeo -->
                <!-- <li scale-40>
                    <a href="https://twitter.com/__BRNK__" target="_blank">
                        <img src="@/assets/img/icons/twitter.svg" alt="Twitter" />
                    </a>
                </li> -->
                <!-- YOUTUBE -->
                <li >
                    <a
                        href="https://www.youtube.com/channel/UCkVtFn_SuLY3FF_jLGFX2GQ"
                        target="_blank"
                    >
                        <img src="@/assets/img/icons/youtube.svg" alt="Youtube" />
                    </a>
                </li>
                <!-- GITHUB -->
                <li scale-150>
                    <a href="https://github.com/DAbranka" target="_blank">
                        <img src="@/assets/img/icons/github.svg" alt="Github" />
                    </a>
                </li>
                <!-- LINKEDIN -->
                <li >
                    <a href="https://www.linkedin.com/in/david-abranka/" target="_blank">
                        <img src="@/assets/img/icons/linkedin.svg" alt="Linkedin" />
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
    .mail {
        font-size: 12px;
        padding: 0;
    }

    ul {
        margin: 0;
    }

    .mail {
        color: #41ecc7;
    }
    .mail:hover {
        color: #41ecc700;
    }
}
</style>
