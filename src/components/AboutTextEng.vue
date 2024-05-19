<template>
    <div>
        <!-- TEXT ENG -->
        <article class="aboutTxt--grid" text-white>
            <p>
                David Abranka, the creative <br> mind behind BRNK®, is a <br> digital creator and web
                developer based in Liège, Belgium.
                He is a <br> self-taught artist who has been creating digital content since 2013.
            </p>

            <!-- <p>He is a self-taught artist who has been creating digital content since 2013.</p> -->

            <!-- <p>
                Drawing inspiration from the retro-futuristic genre and the aesthetic vibes of the
                90s, his work exudes a unique blend of nostalgia and modernity.
            </p> -->

            <!-- <p>
                In addition to his artistic pursuits, David is a dedicated web developer, with a
                journey in website creation starting in 2022.
            </p> -->

            <!-- <p>
                Currently immersed in various 3D projects and the development of his own clothing
                brand, he seamlessly blends his artistic vision with technical expertise, creating a
                dynamic and evolving portfolio.
            </p> -->
        </article>
    </div>
</template>

<style scoped>
p {
    font-size: 3rem;
    font-weight: 600;
    /* margin-bottom: 1rem; */
    color: #ebebeb;
    padding: 0 8rem;
}

@media screen and (max-width: 600px) {
    p {
        font-size: 1.1rem;
        padding-left: 3rem;
        padding-right: 3rem;
        /* margin: 0; */
    }

    .aboutTxt--grid {
        /* display: grid; */
        grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
        gap: 1rem;
        grid-auto-rows: 50px;
    }
}

@media screen and (min-width: 600px) and (max-width: 1600px) {
    p {
        font-size: 18px;
    }
}
</style>
