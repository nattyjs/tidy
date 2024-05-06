import { FormGroupParam } from "../interfaces/form-group-param";
import { IFormGroup } from "../interfaces/i-form-group";
import { Type } from "../interfaces/type";

export class FormArray extends Array{
    private childrens:Array<IFormGroup> = new Array<IFormGroup>();
    root:IFormGroup;
    parent:IFormGroup;
    constructor(childrens:Array<any>,private params:FormGroupParam,private typeFormGroup:Type<any>){
        super()
        this.init(childrens)
        if(params){
            this.root = params.root;
            this.parent = params.parent;
        }
    }
    private init(childrens:Array<any>){
        childrens.forEach(t=>{
            const typeFormGroup = this.typeFormGroup;
            const formGroup = new typeFormGroup(t,this.params);
            this.childrens.push(formGroup);
            super.push(formGroup);
        })
    }

    insert(item:any){
        this.init([item])
        
    }

    removeAt(index:number){
        super.splice(index,1)
    }
        
    get errors(){
        const errors = [];
        this.childrens.forEach((t,index)=>{
            const formGroupErrors = t.errors;
            if(formGroupErrors)
                errors.push({...formGroupErrors,index:index})
        })
        return errors.length == 0 ? null:errors;
    }
    get valid(){
        return this.errors == null;
    }

    setServerErrors(errors:[{[key:string]:any}]){        
        for(const error of errors){
            if(error.index !== undefined){
                delete error.index;
                this.childrens[error.index].setServerErrors(error);
            }
        }
    }
    
}