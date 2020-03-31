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
declare module '*.png' {
    const value: any;
    export default value;
}
