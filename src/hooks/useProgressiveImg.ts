import { useState, useEffect } from 'react';

const useProgressiveImg = ({
    initialImg,
    finalImg
}: {
    initialImg: string;
    finalImg: string;
}) => {
    const [src, setSrc] = useState<string>(initialImg);

    useEffect(() => {
        setSrc(initialImg);
        const img = new Image();
        img.src = finalImg;
        img.onload = () => {
            setSrc(finalImg);
        };
    }, [initialImg, finalImg]);

    return { src, isLoading: src !== finalImg };
};

export default useProgressiveImg;
