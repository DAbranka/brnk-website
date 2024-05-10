import { ref } from 'vue';

export function useProjects() {
    const projects = ref([
        { id: '1', name: 'Project 1', image: '/projects/0324_003_My_Bedroom_Table_Frame_001.png', width: '', height: '101'},
        { id: '2', name: 'Project 2', image: '/projects/0324_003_My_Bedroom_Table_Frame_Cover.png', width: '', height: '101'},
        { id: '3', name: 'Project 3', image: '/projects/SOBORG_CHAIR_002.png', width: '101', height: '101' },
        { id: '4', name: 'Project 4', image: '/projects/Marble_Spring_Indoor_Composition_Poster.png', width: '', height: '101' },
        { id: '5', name: 'Project 5', image: '/projects/0324 - 004 - PINK SPRING.png', width: '101', height: ''},
        { id: '6', name: 'Project 6', image: '/projects/BRNK Blender Inflate Balloons and Logo 002.png', width: '101', height: ''},
    ]);
    return { projects };
}
