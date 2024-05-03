import { TypeInfo } from "./type-info";
export type TypesInfo = {[key:string]:{path?:string | any | Function,props?:Array<TypeInfo>,values?:Array<any>}}
