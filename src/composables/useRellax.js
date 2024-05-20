import { ref, onMounted, onUnmounted } from 'vue';
import Rellax from 'rellax';

export function useRellax(initialOptions={}) {
    const rellaxInstance = ref(null);

    const createRellax = (options) => {
        if (rellaxInstance.value) {
            rellaxInstance.value.destroy();
        }
        rellaxInstance.value = new Rellax('.rellax', {
            speed: -2,
            center: true,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false,
            ...options,
        });
    }

    const updateRellax = (newOptions) => {
        createRellax(newOptions);
    }

    onMounted(() => {
        createRellax(initialOptions);
    });

    onUnmounted(() => {
        if (rellaxInstance.value) {
            rellaxInstance.value.destroy();
        }
    });

    return { updateRellax };
}