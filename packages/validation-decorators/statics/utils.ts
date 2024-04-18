export class Utils{
    static isNotBlank(value: any, isRemoveSpace: boolean = false): boolean {
        return !isRemoveSpace ?
          (value === 0) || (value !== undefined && value !== null && value !== "") :
          (value === 0) || (value !== undefined && value !== null && String(value).trim() !== "")
      }
}