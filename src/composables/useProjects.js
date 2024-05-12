import { ref } from 'vue';

export function useProjects() {
    const projects = ref([
        {
            id: '1',
            name: 'Project 1',
            type: 'video',
            video: '/videos/0324 - 007 - My bedroom table.mp4',
            width: '',
            height: '601'
        },
        {
            id: '2',
            name: 'Project 2',
            type: 'image',
            image: '/img/SOBORG_CHAIR_002.png',
            width: '601',
            height: '601'
        },
        {
            id: '3',
            name: 'Project 3',
            type: 'image',
            image: '/img/0324 - 004 - PINK SPRING.png',
            width: '601',
            height: '601'
        },
        {
            id: '4',
            name: 'Project 4',
            type: 'image',
            image: '/img/Marble_Spring_Indoor_Composition_Poster.png',
            width: '601',
            height: '601'
        },
        {
            id: '5',
            name: 'Project 5',
            type: 'video',
            video: '/videos/0324 - 002 - Rigid Body Abstracct Objects.mp4',
            width: '601',
            height: '601'
        },
        {
            id: '6',
            name: 'Project 6',
            type: 'video',
            video: '/videos/0124 - 001 - BRNK Blender Inflate Balloons.mp4',
            width: '601',
            height: '601'
        },
        {
            id: '7',
            name: 'Project 7',
            type: 'video',
            video: '/videos/0224 - 003 - Fabruary 3rd Composition.mp4',
            width: '601',
            height: '601'
        },
        {
            id: '8',
            name: 'Project 8',
            type: 'video',
            video: '/videos/0224 - 004 - HAPPY 30.mp4',
            width: '601',
            height: '601'
        }
    ]);
    return { projects };
}
