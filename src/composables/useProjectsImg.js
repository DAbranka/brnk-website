import { ref } from 'vue';

export function useProjectsImg() {
    const projects = ref([
        {
            id: '1',
            name: 'My Bedroom Table',
            type: 'image',
            image: '/img/0324_003_My_Bedroom_Table_Frame_001.png',
            width: '601',
            height: '601',
            date: '2024-03-24',
        },
        {
            id: '2',
            name: 'Soborg Chair',
            type: 'image',
            image: '/img/SOBORG_CHAIR_002.png',
            width: '601',
            height: '601',
            date: '2024-03-17',
        },
        {
            id: '3',
            name: 'Abstract 3D Shapes',
            type: 'image',
            image: '/img/0324 - 004 - PINK SPRING.png',
            width: '601',
            height: '601',
            date: '2024-03-11',
        },
        {
            id: '4',
            name: 'BRNK Abstract Objects',
            type: 'image',
            image: '/img/BRNK Abstract Objects Thumbnail.png',
            width: '601',
            height: '601',
            date: '2024-02-27',
        },
        {
            id: '5',
            name: 'Inflated Rolling Cubes',
            type: 'image',
            image: '/img/0124 - 001 - BRNK Blender Inflate Balloons Thumbnail.png',
            width: '601',
            height: '601',
            date: '2024-01-18',
        },
        {
            id: '6',
            name: 'Happy 30th Birthday!',
            type: 'image',
            image: '/img/0224 - 004 - HAPPY 30.png',
            width: '601',
            height: '601',
            date: '2024-02-22',
        }
    ]);
    return { projects };
}
