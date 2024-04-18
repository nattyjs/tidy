import { NumericValueType } from "../../enums/numeric-value-type";

export class ApplicationUtil{

    static toLower(value){
        if (value)
            return String(value).toLowerCase().trim();
        return value;
    }

    static isNumeric(value:any){
       return (value - parseFloat(value) + 1) >= 0;
  }

  static notEqualTo(primaryValue: any, secondaryValue: any) {
    let firstValue = (primaryValue === undefined || primaryValue === null) ? "" : primaryValue;
    let secondValue = (secondaryValue === undefined || secondaryValue === null) ? "" : secondaryValue;
    if(firstValue instanceof Date && secondValue instanceof Date)
        return +firstValue != +secondValue;
    return (firstValue != secondValue)
  }

    static numericValidation(allowDecimal:boolean, acceptValue:NumericValueType) {
        let decimalSymbol = ".";
        
        acceptValue = (acceptValue == undefined) ? NumericValueType.PositiveNumber : acceptValue;
        let regex = /^[0-9]+$/;
        switch(acceptValue){
            case NumericValueType.PositiveNumber:
              regex = (!allowDecimal) ? /^[0-9]+$/ : (decimalSymbol == "."  || decimalSymbol == undefined) ? /^[0-9\.]+$/ : /^[0-9\,]+$/;
            break;
            case  NumericValueType.NegativeNumber:
                regex = (!allowDecimal) ? /^[-][0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined)?  /^[-][0-9\.]+$/ : /^[-][0-9\,]+$/;
            break;
            case NumericValueType.Both :
                regex = (!allowDecimal) ? /^[-|+]?[0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined) ?  /^[-|+]?[0-9\.]+$/ : /^[-|+]?[0-9\,]+$/;
            break;
        }
      return regex;
    }


    static lowerCaseWithTrim(value:string) {
        return typeof value === "string" ? value.toLowerCase().trim() : String(value).toLowerCase().trim();
    }

    /** Check if a value is an object */
    static isObject(value: any): boolean {
        return Object.prototype.toString.call(value) === '[object Object]';
    }

    /** Check if a value is an object */
    static isArray(value: any): boolean {
        return Array.isArray(value);
    }

    static cloneValue(value: any): any {
        return ApplicationUtil.isObject(value) ? ApplicationUtil.isArray(value) ? [...value] : {...value} : value;
    }

   
}
