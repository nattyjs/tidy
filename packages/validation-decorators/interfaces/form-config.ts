export interface FormConfig{
    errorMessage?:ErrorMessage,
    dateConfig?:{
        seperator?:string;
        format?:'mdy' | 'dmy' | 'ymd' 
    }
}
interface ErrorMessage {
    validator?: {
        [key: string]: string;
    };
}