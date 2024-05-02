<template>
    <div>
        <section flex flex-col>
            <!-- mail to -->
            <a
                href="mailto:davidabranka@gmail.com"
                class="mail opacity-80 text-xl no-underline w-full flex justify-end"
            >
                davidabranka@gmail.com
            </a>

            <ul list-none flex justify-end items-center invert>
                <li scale-40>
                    <a href="https://www.instagram.com/brnkill/" target="_blank">
                        <img src="@/assets/img/icons/instagram.svg" alt="Instagram" />
                    </a>
                </li>
                <li scale-40>
                    <a href="https://twitter.com/__BRNK__" target="_blank">
                        <img src="@/assets/img/icons/twitter.svg" alt="Twitter" />
                    </a>
                </li>
                <li scale-40>
                    <a
                        href="https://www.youtube.com/channel/UCkVtFn_SuLY3FF_jLGFX2GQ"
                        target="_blank"
                    >
                        <img src="@/assets/img/icons/youtube.svg" alt="Youtube" />
                    </a>
                </li>
                <li scale-70>
                    <a href="https://github.com/DAbranka" target="_blank">
                        <img src="@/assets/img/icons/github.svg" alt="Github" />
                    </a>
                </li>
                <li scale-40>
                    <a href="https://www.linkedin.com/in/david-abranka/" target="_blank">
                        <img src="@/assets/img/icons/linkedin.svg" alt="Linkedin" />
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
li {
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mail {
    font-family: monospace;
    font-size: 16px;
    color: #41ecc7;
}

.mail:hover {
    color: #41ecc7;
}

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
