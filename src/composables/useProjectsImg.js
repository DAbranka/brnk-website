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
                '/img/0324_003_My_Bedroom_Table_Frame_004.png'
            ],
            video: ['/videos/0324 - 007 - My bedroom table.mp4'],
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
            image: ['/img/SOBORG_CHAIR_002.png'],
            width: '601',
            height: '601',
            date: '2024-03-17',
            description:
                'Modeling this chair was a challenge, but I learned a lot. Thanks again to Andrew Price.'
        },
        {
            id: '3',
            name: 'Abstract 3D Shapes',
            type: 'media',
            thumb: '/img/0324 - 004 - PINK SPRING.png',
            image: [
                '/img/0324 - 004 - PINK SPRING.png',
                '/img/0324 - 005 - ORANGE SHAPE.png',
                '/img/0324 - 008 - GREEN STAR.png'
            ],
            width: '601',
            height: '601',
            date: '2024-03-11',
            description:
                'I made this serie of abstract object to practice my modeling skills in Blender and having a library of objects to use in future projects.'
        },
        {
            id: '4',
            name: 'BRNK Abstract Objects',
            type: 'media',
            thumb: '/img/BRNK Abstract Objects Thumbnail.png',
            video: ['/videos/0324 - 002 - Rigid Body Abstracct Objects.mp4'],
            width: '601',
            height: '601',
            date: '2024-02-27',
            description: 'Made this render to practice some rigid body simulations in Blender.'
        },
        {
            id: '5',
            name: 'Inflated Rolling Cubes',
            type: 'media',
            thumb: '/img/0124 - 001 - BRNK Blender Inflate Balloons Thumbnail.png',
            video: [
                '/videos/0124 - 001 - BRNK Blender Inflate Balloons.mp4',
                '/videos/0224 - 003 - Fabruary 3rd Composition.mp4'
            ],
            width: '601',
            height: '601',
            date: '2024-01-18',
            description:
                ' I was trying some art direction with these inflated rolling cubes. Just practicing some stuff with these guys, Ash Thorp style was the inspiration here.'
        },
        {
            id: '6',
            name: 'Happy 30th Birthday!',
            type: 'media',
            thumb: '/img/0224 - 004 - HAPPY 30.png',
            video: ['/videos/0224 - 004 - HAPPY 30.mp4'],
            width: '601',
            height: '601',
            date: '2024-02-22',
            description:
                'Made this for my 30th birthday. I wanted to make something that was a little bit abstract and surreal.'
        },
        {
            id: '7',
            name: 'HOLOGRAPHIK Motion Design Study',
            type: 'media',
            thumb: '/img/[Thumb]HOLOGRAPHIK Motion Design.png',
            video: ['/videos/HOLOGRAPHIK Motion Design.mp4'],
            width: '601',
            height: '601',
            date: '2023-12-23',
            description:
                'This Holographik motion design was only made for study purpose in After Effects.'
        },
        {
            id: '8',
            name: 'Washed Motion Design',
            type: 'media',
            thumb: '/img/[Thumb]washed.png',
            video: ['/videos/washed.mp4'],
            width: '601',
            height: '601',
            date: '2021-02-02',
            description:
                'Motion design experiment, combining 2D and 3D on Cinema 4D and After Effects.'
        },
        {
            id: '9',
            name: 'BRNK Vitrine',
            type: 'media',
            thumb: '/img/[Thumb]BRNK_Vitrine_AME.png',
            video: ['/videos/BRNK_VITRINE_AME.mp4'],
            width: '601',
            height: '601',
            date: '2024-09-07',
            description:
                'First render of the series that I decided to realize every week to practice my 3D skills.'
        },
        {
            id: '10',
            name: 'NEW AVATAR',
            type: 'media',
            thumb: '/img/1224 - 003 - [EXO] BRKILL AVATAR.png',
            image: [
                '/img/1224 - 003 - [EXO] BRKILL AVATAR.png',
                '/img/1224 - 003 - [EXO] BRKILL AVATAR 001.png',
                '/img/1224 - 003 - [EXO] BRKILL AVATAR 002.png',
                '/img/1224 - 003 - [EXO] BRKILL AVATAR 003.png'
            ],
            width: '601',
            height: '601',
            date: '2024-12-15',
            description:
                '3D modelisation of my avatar made in blender.'
        },
        {
            id: '11',
            name: 'Stylised Character Modeling',
            type: 'media',
            thumb: '/img/006 - Stylised Character Modeling.png',
            image: [
                '/img/006 - Stylised Character Modeling.png',
                '/img/006 - Stylised Character Modeling 001.png',
                '/img/006 - Stylised Character Modeling 002.png',
                '/img/006 - Stylised Character Modeling 003.png',
                '/img/006 - Stylised Character Modeling 004.png'
            ],
            width: '601',
            height: '601',
            date: '2024-11-24',
            description:
                'Learned how to create stylised character modeling through Keelan Jone modeling course.'
        },
        {
            id: '12',
            name: 'BEETO',
            type: 'media',
            thumb: '/img/1224 - 001 - [EXO] Character MOD BEETO.png',
            image: [
                '/img/1224 - 001 - [EXO] Character MOD BEETO.png',
                '/img/1224 - 001 - [EXO] Character MOD BEETO 2.jpg',
            ],
            width: '601',
            height: '601',
            date: '2024-11-29',
            description:
                'Made this modeling based on Quang Dinh Ngo characters which each of them is a student learning about the professions. BEETO was the GEOLOGY - GEOPHYSICS.'
        },
        {
            id: '13',
            name: 'GOOD BOY',
            type: 'media',
            thumb: '/img/0125 - 001 - GOOD BOY.png',
            image: [
                '/img/0125 - 001 - GOOD BOY.png',
                '/img/0125 - 001 - [REF] GOOD BOY.jpg',
                '/img/0125 - 001 - [SCREEN] GOOD BOY - 001.png',
                '/img/0125 - 001 - [SCREEN] GOOD BOY - 002.png',
            ],
            width: '601',
            height: '601',
            date: '2025-02-09',
            description:
                'Made this modeling based on Quang Dinh Ngo characters which each of them is a student learning about the professions. BEETO was the GEOLOGY - GEOPHYSICS.'
        },
    ]);

    const sortedProjects = projects.value.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    return { projects, sortedProjects };
}
