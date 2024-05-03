export interface ProblemDetail{
    type:string;
    title:string;
    detail?:string | number | boolean | {[key:string]:any} | Array<{[key:string]:any}>
}