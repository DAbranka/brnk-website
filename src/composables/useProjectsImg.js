import { ref } from 'vue';

export function useProjectsImg() {
    const projects = ref([
        {
            id: '1',
            name: 'My Bedroom Table',
            type: 'media',
            thumb: '/img/0324_003_My_Bedroom_Table_Frame_001.png',
            image: [
                '/img/0324_003_My_Bedroom_Table_Frame_001.png',
                '/img/0324_003_My_Bedroom_Table_Frame_002.png',
                '/img/0324_003_My_Bedroom_Table_Frame_003.png',
                '/img/0324_003_My_Bedroom_Table_Frame_004.png',
            ],
            video: [
                '/videos/0324 - 007 - My bedroom table.mp4',
            ],
            width: '601',
            height: '601',
            date: '2024-03-24',
            description: 'Modeled my bedroom table in Blender with surrealistic decoration.'
        },
        {
            id: '2',
            name: 'Soborg Chair',
            type: 'media',
            thumb: '/img/SOBORG_CHAIR_002.png',
            image: [
                '/img/SOBORG_CHAIR_002.png',
            ],
            width: '601',
            height: '601',
            date: '2024-03-17',
            description: 'Modeling this chair was a challenge, but I learned a lot. Thanks again to Andrew Price.'
        },
        {
            id: '3',
            name: 'Abstract 3D Shapes',
            type: 'media',
            thumb: '/img/0324 - 004 - PINK SPRING.png',
            image: [
                '/img/0324 - 004 - PINK SPRING.png',
                '/img/0324 - 005 - ORANGE SHAPE.png',
                '/img/0324 - 008 - GREEN STAR.png',
            ],
            width: '601',
            height: '601',
            date: '2024-03-11',
            description: 'Description for: Abstract 3D Shapes.'
        },
        {
            id: '4',
            name: 'BRNK Abstract Objects',
            type: 'media',
            thumb: '/img/BRNK Abstract Objects Thumbnail.png',
            video: [
                '/videos/0324 - 002 - Rigid Body Abstracct Objects.mp4',
            ],
            width: '601',
            height: '601',
            date: '2024-02-27',
            description: 'Description for: BRNK Abstract Objects.'
        },
        {
            id: '5',
            name: 'Inflated Rolling Cubes',
            type: 'media',
            thumb: '/img/0124 - 001 - BRNK Blender Inflate Balloons Thumbnail.png',
            video: [
                '/videos/0124 - 001 - BRNK Blender Inflate Balloons.mp4',
                '/videos/0224 - 003 - Fabruary 3rd Composition.mp4',
            ],
            width: '601',
            height: '601',
            date: '2024-01-18',
            description: ' I was trying some art direction with these inflated rolling cubes. Just practicing some stuff with these guys, Ash Thorp style was the inspiration here.'
        },
        {
            id: '6',
            name: 'Happy 30th Birthday!',
            type: 'media',
            thumb: '/img/0224 - 004 - HAPPY 30.png',
            video: [
                '/videos/0224 - 004 - HAPPY 30.mp4',
            ],
            width: '601',
            height: '601',
            date: '2024-02-22',
            description: 'Description for: Happy 30th Birthday!'
        }
    ]);
    return { projects };
}
