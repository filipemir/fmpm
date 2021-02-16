/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * TS needs to know how to interpret files that aren't JS or CSS, like images so we need to give it some hints
 * See here: https://www.typescriptlang.org/docs/handbook/modules.html
 */

// https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript
declare module '*.svg' {
    const content: string;
    export default content;
}

// https://stackoverflow.com/questions/43638454/webpack-typescript-image-import?rq=1
declare module '*.jpg' {
    type ResponsiveImage = {
        path: string;
        height: number;
        width: number;
    };

    export interface ResponsiveLoaderResult {
        src: string;
        height: number;
        width: number;
        srcSet: string;
        images: ResponsiveImage[];
        placeholder: string;
        toString: () => string;
    }

    const value: ResponsiveLoaderResult;

    export default value;
}

declare module '*.jpeg' {
    import { ResponsiveLoaderResult } from '*.jpg';
    const value: ResponsiveLoaderResult;
    export default value;
}

declare module '*.png' {
    import { ResponsiveLoaderResult } from '*.jpg';
    const value: ResponsiveLoaderResult;
    export default value;
}

declare module '*.webp' {
    import { ResponsiveLoaderResult } from '*.jpg';
    const value: ResponsiveLoaderResult;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}

declare module '*.ico' {
    const value: string;
    export default value;
}
