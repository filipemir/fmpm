import { useEffect } from 'react';

const useCancelKeydown = (handler?: () => void) => {
    useEffect(() => {
        if (!handler) {
            return;
        }

        const handleKeydown = (evt: KeyboardEvent) => {
            const { key, keyCode } = evt;

            if (key === 'Escape' || keyCode === 27) {
                handler();
            }
        };

        window.document.addEventListener('keydown', handleKeydown);

        // Remove event listener on cleanup
        return () => {
            window.document.removeEventListener('keydown', handleKeydown);
        };
    }, [handler]);
};

export default useCancelKeydown;
