<script setup>
    import { defineProps, withDefaults } from 'vue'
    import { useRouter } from 'vue-router'
    import SocialLinks from '@/components/SocialLinks.vue'
    
    const props = withDefaults(defineProps(), {
        onClose: { type: Function, default: () => {} }
    })

    const router = useRouter()
</script>

<template>
    <div>
        
        

        <!-- ABOUT CARD -->
        <section class="aboutSection" w-full h-full absolute top-0 left-0 flex justify-center items-center>


            <!-- Card Container -->
            <section class="aboutCard flex flex-col justify-center items-center">
                
                <!-- Close Button -->
                <div class="absolute top--5 right--5">
                    <button class="text-1rem w-9 py-2 rounded-2 text-black cursor-pointer" @click.prevent="props.onClose; router.push('/')">X</button>
                </div>
                
                <!-- TEXT -->
                <article flex flex-col justify-center items-center>
                    <p class="text-4xl text-white">BRNK®</p>
                    <p class="text-4xl text-white">DIGITAL CREATOR & WEB DEVELOPER</p>
                </article>

                <!-- SOCIAL MEDIA -->
                <SocialLinks />
            </section>
        </section>
    </div>
</template>

<style scoped>
    .aboutSection {
        background-color: #00000071;
    }

    .aboutCard {
    border-radius: 20px;
    padding: 20px;
    width: 800px;
    height: 600px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(10px);
    background-color: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.303);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

    .aboutCard p {
        font-family: sans-serif;
        font-size: 16px;
        font-weight: bolder;
        opacity: 70%;
    }
</style>