import { ref } from 'vue';

export function useProjectsImg() {
    const projects = ref([
        {
            id: '1',
            name: 'My Bedroom Table',
            type: 'media',
            thumb: '/img/0324_003_My_Bedroom_Table_Frame_001.png',
            image: '/img/0324_003_My_Bedroom_Table_Frame_001.png',
            video: '/videos/0324 - 007 - My bedroom table.mp4',
            width: '601',
            height: '601',
            date: '2024-03-24',
            description: 'This is a 3D model of my bedroom table. I created this model using Blender 3D software. The table is made of wood and has a glass top. The table has a simple design with a rectangular shape and four legs. I used Blender to create the 3D model of the table and then rendered it to create this image. I also created a short animation of the table rotating to show it from different angles. I am happy with how the model turned out and I think it looks realistic. I enjoyed working on this project and I learned a lot about 3D modeling and rendering.'
        },
        {
            id: '2',
            name: 'Soborg Chair',
            type: 'media',
            thumb: '/img/SOBORG_CHAIR_002.png',
            image: '/img/SOBORG_CHAIR_002.png',
            width: '601',
            height: '601',
            date: '2024-03-17',
            description: 'This is a 3D model of the Soborg chair. I created this model using Blender 3D software. The chair has a simple design with a wooden frame and a fabric seat. I used Blender to create the 3D model of the chair and then rendered it to create this image. I am happy with how the model turned out and I think it looks realistic. I enjoyed working on this project and I learned a lot about 3D modeling and rendering.'
        },
        {
            id: '3',
            name: 'Abstract 3D Shapes',
            type: 'media',
            thumb: '/img/0324 - 004 - PINK SPRING.png',
            image: '/img/0324 - 004 - PINK SPRING.png',
            width: '601',
            height: '601',
            date: '2024-03-11',
            description: 'This is a collection of abstract 3D shapes that I created using Blender 3D software. I used Blender to create the 3D models of the shapes and then rendered them to create these images. I experimented with different shapes, colors, and textures to create interesting and visually appealing compositions. I am happy with how the shapes turned out and I think they look vibrant and dynamic. I enjoyed working on this project and I learned a lot about 3D modeling and rendering.'
        },
        {
            id: '4',
            name: 'BRNK Abstract Objects',
            type: 'media',
            thumb: '/img/BRNK Abstract Objects Thumbnail.png',
            video: '/videos/0324 - 002 - Rigid Body Abstracct Objects.mp4',
            width: '601',
            height: '601',
            date: '2024-02-27',
            description: 'This is a collection of abstract 3D objects that I created using Blender 3D software. I used Blender to create the 3D models of the objects and then rendered them to create these images. I experimented with different shapes, colors, and textures to create interesting and visually appealing compositions. I am happy with how the objects turned out and I think they look vibrant and dynamic. I enjoyed working on this project and I learned a lot about 3D modeling and rendering.'
        },
        {
            id: '5',
            name: 'Inflated Rolling Cubes',
            type: 'media',
            thumb: '/img/0124 - 001 - BRNK Blender Inflate Balloons Thumbnail.png',
            video: '/videos/0124 - 001 - BRNK Blender Inflate Balloons.mp4',
            width: '601',
            height: '601',
            date: '2024-01-18',
            description: 'This is a collection of abstract 3D shapes that I created using Blender 3D software. I used Blender to create the 3D models of the shapes and then rendered them to create these images. I experimented with different shapes, colors, and textures to create interesting and visually appealing compositions. I am happy with how the shapes turned out and I think they look vibrant and dynamic. I enjoyed working on this project and I learned a lot about 3D modeling and rendering.'
        },
        {
            id: '6',
            name: 'Happy 30th Birthday!',
            type: 'media',
            thumb: '/img/0224 - 004 - HAPPY 30.png',
            video: '/videos/0224 - 004 - HAPPY 30.mp4',
            width: '601',
            height: '601',
            date: '2024-02-22',
            description: 'This is a collection of abstract 3D shapes that I created using Blender 3D software. I used Blender to create the 3D models of the shapes and then rendered them to create these images. I experimented with different shapes, colors, and textures to create interesting and visually appealing compositions. I am happy with how the shapes turned out and I think they look vibrant and dynamic. I enjoyed working on this project and I learned a lot about 3D modeling and rendering.'
        }
    ]);
    return { projects };
}
