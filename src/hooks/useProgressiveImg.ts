import { useState, useEffect } from 'react';

const loadedImages = new Set();

const useProgressiveImg = ({
    initialImg,
    finalImg
}: {
    initialImg: string;
    finalImg: string;
}) => {
    const cached = loadedImages.has(finalImg);
    const [src, setSrc] = useState<string>(cached ? finalImg : initialImg);

    useEffect(() => {
        if (src === finalImg) return;

        const img = new Image();
        img.src = finalImg;
        img.onload = () => {
            setSrc(finalImg);
            loadedImages.add(finalImg);
        };
    }, [initialImg, finalImg]);

    return { src, isLoading: src !== finalImg };
};

export default useProgressiveImg;
