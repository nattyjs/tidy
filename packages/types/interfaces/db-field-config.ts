export interface DbFieldConfig{
    name?:string;
    type?:number;
    defaultValue?:any;
    isPrimaryKey?:boolean;
    foreignKey?:any;
    oneToMany?:FieldRelationConfig;
    oneToOne?:FieldRelationConfig;
}

interface FieldRelationConfig{
    model:any;
    foreignKey:string
}