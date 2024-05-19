<template>
    <div>
        <!-- TEXT ENG -->
        <article class="aboutTxt--grid" text-white>
            <p>
                David Abranka, l'esprit créatif derrière BRNK®, est un créateur numérique et un
                développeur web basé à Liège, en Belgique. Artiste autodidacte, il crée du contenu
                numérique depuis 2013.
            </p>

            <!-- <p>
                S'inspirant du genre rétro-futuriste et des esthétiques des années 90, son travail
                dégage un mélange unique de nostalgie et de modernité.
            </p> -->

            <!-- <p>
                En plus de ses activités artistiques, David est un développeur web dévoué, avec un
                parcours dans la création de sites web qui a commencé en 2022.
            </p> -->

            <!-- <p>
                Actuellement plongé dans divers projets 3D et dans le développement de sa propre
                marque, il allie harmonieusement sa vision artistique à son expertise technique, créant ainsi un portfolio dynamique et évolutif.
            </p> -->
        </article>
    </div>
</template>

<style scoped>
p {
    font-size: 1.5rem;
    font-weight: 300;
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
