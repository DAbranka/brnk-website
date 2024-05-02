<script setup>
import NavLinkComponent from './NavLinkComponent.vue';
</script>
<template>
    <div>
        <!-- NAVBAR -->
        <nav class="navbBar">
            <section class="navBar__content flex items-center justify-between">
                <!-- LOGO -->
                <RouterLink to="/">
                    <img
                        class="logo h-5"
                        src="@/assets/img/BRNK_LOGO_BLK_PNG_NOBG.png"
                        alt="png/logo"
                    />
                </RouterLink>

                <!-- NAVBAR LINKS -->
                <ul flex items-center justify-center list-none>
                    <li>
                        <RouterLink to="/work" no-underline>
                            <NavLinkComponent>
                                <p>WORK</p>
                            </NavLinkComponent>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            @click.prevent="showAboutCard.value = true"
                            to="/about"
                            no-underline
                        >
                            <NavLinkComponent>
                                <p>ABOUT</p>
                            </NavLinkComponent>
                        </RouterLink>
                    </li>
                </ul>
            </section>
        </nav>
    </div>
</template>

<style scoped></style>
