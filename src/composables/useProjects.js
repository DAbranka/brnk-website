import { ref } from 'vue';

export function useProjects() {
    const projects = ref([
        { id: '1', name: 'Project 1', image: '/projects/0324_003_My_Bedroom_Table_Frame_001.png' },
        {
            id: '2',
            name: 'Project 2',
            image: '/projects/0324_003_My_Bedroom_Table_Frame_Cover.png'
        },
        { id: '3', name: 'Project 3', image: '/projects/SOBORG_CHAIR_002.png' }
    ]);
    return { projects };
}
