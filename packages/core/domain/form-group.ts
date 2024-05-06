import { ReactiveFormContainer } from "../const/reactive-form-container";
import { nattyForms } from "../const/natty-forms";
import { callValidator } from "../functions/call-validators";
import { createInstance } from "../functions/create-instance";
import { expressionColumns } from "../functions/get-expression-columns";
import { isObject } from "../functions/is-object";
import { FormGroupParam } from "../interfaces/form-group-param";
import { Type } from "../interfaces/type";
import { FormArray } from "./form-array";
import { RunValidatorStrategy } from "../enums/run-validator-strategy";

export class FormGroup {
    private properties: Array<string> = new Array<string>();
    private validators: any;
    parent: FormGroup;
    pending:boolean = false;
    dirty:{[key:string]:boolean}= {};
    private runConditionally: { [key: string]: string[] } = {};
    private sanitizeProps: { [key: string]: { name: string, config: any, func: Function } } = {};
    private childrens: Map<string, FormGroup | FormArray> = new Map<string, FormGroup | FormArray>();
    private _serverErrors:{[key:string]:any} = {};
    constructor(private _value: { [key: string]: any }, private formGroupParam?: FormGroupParam) {
        if (formGroupParam) {
            this.validators = formGroupParam.validators || {}
            this.parent = formGroupParam.parent;
            this.root = formGroupParam.root;
            if (formGroupParam.type)
                this._value = this.createClassInstance(this._value, formGroupParam.type)
        }
        this.properties = Object.keys(_value);
        this.updatePropertiesOnClassInstance()
        this.defineProperties()
        this.parseValidatorsConfig();
    }
    _submit: boolean;
    get submit() {
        return this._submit;
    }
    set submit(value: boolean) {
        this._submit = value;
        if (value)
            this.runAllValidators()
    }
    createClassInstance(entity: any, type: Type<any>) {
        const entityInfo = ReactiveFormContainer.getProperties(type.name)
        if (entityInfo) {
            if (entityInfo.properties) {
                const properties = entityInfo.properties;
                const instance = createInstance(type);
                for (const [key, value] of Object.entries(entity)) {
                    if (properties[key] && properties[key].propConfig) {
                        const propConfig: any = properties[key].propConfig;
                        if (propConfig.type) {
                            if (propConfig.isArrayType) {
                                if (Array.isArray(entity[key])) {
                                    instance[key] = new Array();
                                    entity[key].forEach(item => {
                                        instance[key].push(
                                            this.createClassInstance(item, propConfig.type)
                                        )
                                    })
                                }
                            } else
                                instance[key] = this.createClassInstance(entity[key], propConfig.type)
                        } else
                            instance[key] = value;
                    } else
                        instance[key] = value;
                }
                return instance;
            }
        }
        return null;
    }
    private getSanitizeValue(propName:string,propValue: any) {
        if (this.sanitizeProps[propName]) {
            for (const [key,value] of Object.entries(this.sanitizeProps[propName])) {
                propValue = value.sanitizer(propValue, value.config);
            }
        }
        return propValue;
    }
    getEntityInfo(entityInfo: any) {
        const validators = {};
        const properties = new Array();
        const sanitizers = {};
        if (entityInfo.properties) {
            for (const [key, value] of Object.entries(entityInfo.properties)) {
                validators[key] = new Array();
                properties.push(key)
                for (const validatorInfo of Object.entries((<any>value).validators).values()) {
                    const validatorConfig: any = validatorInfo[1];
                    validators[key].push(callValidator(validatorConfig.config, validatorConfig.validator));
                }
                if (Object.keys((<any>value).sanitizers).length > 0)
                    sanitizers[key]=(<any>value).sanitizers;
            }
        }
        return { properties, validators, sanitizers };
    }
    updatePropertiesOnClassInstance() {
        if (this._value.constructor) {
            const entityInfo = ReactiveFormContainer.getProperties(this._value.constructor.name)
            if (entityInfo) {
                const { properties, validators, sanitizers } = this.getEntityInfo(entityInfo);
                this.validators = validators,
                this.properties = properties;
                this.sanitizeProps = sanitizers;
            }
        }
    }

    setServerErrors(errors:{[key:string]:any}){
        for(const [key,value] of Object.entries(errors)){
            const children = this.childrens.get(key) as FormGroup;
            if((Array.isArray(value) || isObject(value)) && children){
                children.setServerErrors(value)
            }else{
                this._serverErrors[key]=value;
                this.setErrorMessage(key,{server:{message:value}})
            }
                 
        }
    }

    private parseValidatorsConfig() {
        if (this.validators) {
            for (const [key, value] of Object.entries(this.validators)) {
                if (Array.isArray(value))
                    value.forEach(v => this.parseConditinalExpression(key, v));
                else
                    this.parseConditinalExpression(key, value)
                this.runValidator(key)
            }
        }
    }
    private parseConditinalExpression(key: string, value: any) {
        if (value.config) {
            const columns = expressionColumns(value.config);
            columns.forEach(t => {
                this.addConditionally(t.propName, key)
            })
            if (value.config.fieldName)
                this.addConditionally(value.config.fieldName, key)
        }
    }
    private addConditionally(propName: string, key: string) {
        if (!this.runConditionally[propName])
            this.runConditionally[propName] = [];
        if (this.runConditionally[propName].indexOf(key) == -1)
            this.runConditionally[propName].push(key)
    }

    get value() {
        return this._value;
    }
    private runAllValidators() {
        for (const key of this.properties) {
            this.runValidator(key)
        }
    }
    private defineProperties() {
        for (const key of this.properties) {
            const value = this._value[key]
            if (Array.isArray(value)) {
                this.defineGroupProp(key, new FormArray(value, {
                    validators: this.validators[key] ? this.validators[key][0] : undefined, parent: this, root: this.root
                }, FormGroup))
                delete this.validators[key];
            } else if (isObject(value)) {
                this.defineGroupProp(key, new FormGroup(this._value[key], { parent: this, root: this.root || this, validators: this.validators[key] }))
                delete this.validators[key];
            } else{
                
                this.defineProp(key, this._value, this.validators[key])
            }
                
        }
    }
    root: FormGroup;
    private defineGroupProp(propName: string, value: FormGroup | FormArray) {
        Object.defineProperty(this, propName, {
            get: () => value,
        })
        this.childrens.set(propName, value)
    }
    private defineProp(propName: string, value: any, validator: any) {
        let _propValue=this._value[propName];
        this._value[propName]= this.getSanitizeValue(propName,this._value[propName])
        Object.defineProperty(this, propName, {
            get: () => _propValue,
            set: (value) => {
                this.dirty[propName]=true;
                _propValue=value;
                this.clearErrorMessage(propName)
                delete this._serverErrors[propName];
                this._value[propName] =this.getSanitizeValue(propName, value);
                this.runConditionalValidation(propName);
                this.runValidator(propName);
            }
        })

    }

    private runConditionalValidation(propName: string) {
        const conditionalProps = this.runConditionally[propName];
        if (conditionalProps)
            conditionalProps.forEach(prop => this.runValidator(prop))
    }

    private runValidator(propName: string) {
        if ((nattyForms.formConfig?.runValidatorStrategy && nattyForms.formConfig?.runValidatorStrategy == RunValidatorStrategy.OnSubmit && this.submit) || !(nattyForms.formConfig?.runValidatorStrategy))
            {
                this.pending = true
                if (this.validators) {
                    const validator = this.validators[propName];
                    if (validator) {
                        const errors = this.runValidation(validator, { name: propName, value: this._value[propName], current: this, root: this.root })
                        if (errors)
                            this._errors[propName] = errors;
                        else if (this._errors[propName])
                            delete this._errors[propName]
                    }
                }
                this.pending = false;
            }
    }


    private runValidation(validator: any, params: { name: string, value: any, current: any, root: any }) {
        if (validator) {
            if (Array.isArray(validator)) {
                let jErrors = {};
                validator.forEach(validatorFn => {
                    const errors = validatorFn.validator(params);
                    if (errors) {
                        jErrors = { ...jErrors, ...errors }
                    }
                })
                const keys = Object.keys(jErrors)
                if (keys.length > 0)
                    this.setErrorMessage(params.name, jErrors)
                else
                    this.clearErrorMessage(params.name)
                return keys.length > 0 ? jErrors : null;
            } else {
                if(validator?.validator){
                    const errors = validator.validator(params)
                    if (errors)
                        this.setErrorMessage(params.name, errors)
                    else {
                        this.clearErrorMessage(params.name)
                    }
                    return errors;
                }
            }
        }
    }
    private _errors: { [key: string]: any } = {};

    get errors() {
        let errors = this._errors;
        for (const [key, value] of this.childrens.entries()) {
            const childGroupErrors = value.errors;
            if (childGroupErrors)
                errors = { ...errors, ...{ [key]: childGroupErrors } }
        }
        errors = {...errors,...this._serverErrors};
        return Object.keys(errors).length == 0 ? null : errors;
    }

    get valid() {
        return this.errors == null;
    }

    get errorMessage() {
        return this._errorMessage;
    }

    _errorMessage: { [key: string]: string } = {}


    private setErrorMessage(name: string, errors: { [key: string]: any }) {
        this._errorMessage[name] = errors[Object.keys(errors)[0]].message;

    }
    private clearErrorMessage(name: string) {
        delete this._errorMessage[name]
    }
}