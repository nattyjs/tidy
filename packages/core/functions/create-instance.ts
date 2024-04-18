export function createInstance(model: any) {
    let classInstance = Object.create(model.prototype)
    try{
        model.apply(classInstance);
    }catch(ex){
        classInstance = Reflect.construct(model,[]);
    }
    return classInstance;
}