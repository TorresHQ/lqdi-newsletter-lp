import { onMounted } from "vue";
import focusNextInput from "../utils/focus-next-input";

const useTabOnInputEnter = () => {
    onMounted(() => {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach((input, index) => {
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    focusNextInput(inputs[index]);
                }
            });
        });
    });
}

export default useTabOnInputEnter;