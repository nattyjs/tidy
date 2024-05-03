export type HttpRequestBodyInfo ={
    Uint8Array?:Uint8Array | Uint8Array[];
    string?:string | string[];
    number?:number| number[];
    boolean?:boolean | boolean[];
    FormData?:FormData ;
    ArrayBuffer?:ArrayBuffer;
    Blob?:Blob ;
    json?:{[key:string]:any} | Array<{[key:string]:any}>;
}  