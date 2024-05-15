<script setup>
import NavLinkTemplate from './NavLinkTemplate.vue';
import { RouterLink } from 'vue-router';
</script>
<template>
    <div>
        <!-- NAVBAR -->
        <nav class="navbBar m-5">
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
                        <RouterLink @click="$emit('ScrollToHGP')" to="" no-underline>
                            <NavLinkTemplate>
                                <p>WORK</p>
                            </NavLinkTemplate>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink @click="$emit('ScrollToHAS')" to="" no-underline>
                            <NavLinkTemplate>
                                <p>ABOUT</p>
                            </NavLinkTemplate>
                        </RouterLink>
                    </li>
                </ul>
            </section>
        </nav>
    </div>
</template>

<style scoped></style>
