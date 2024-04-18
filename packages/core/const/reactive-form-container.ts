import { PropertyDecoratorConfig } from "@tidyjs/types";
import { EntityInfo, PropertyInfo, ValidatorInfo } from "../types/reactive-form-config";

export class ReactiveFormContainer{
        static entityConfig: Map<string, EntityInfo> = new Map<string, EntityInfo>();
        static register(config: PropertyDecoratorConfig) {
            const params = config.decoratorParams;
            const target = config.decoratorParams.target.constructor.name
            let entityInfo: EntityInfo = ReactiveFormContainer.entityConfig.get(target);
            let propertyInfo: PropertyInfo = null;
            if (!entityInfo) {
                ReactiveFormContainer.entityConfig.set(target, { target: config.decoratorParams.target, properties: {} });
                entityInfo = ReactiveFormContainer.entityConfig.get(target);
            }

            propertyInfo = entityInfo.properties[params.propertyKey];
            if (!propertyInfo)
                propertyInfo = entityInfo.properties[params.propertyKey] = { validators: {},sanitizers:{} };

            if (!propertyInfo.propConfig && config.propConfig)
                propertyInfo.propConfig = {};
            if (config.propConfig)
                propertyInfo.propConfig = { ...config.propConfig, ...propertyInfo.propConfig };
            if (config.validatorConfig)
                propertyInfo.validators[config.validatorConfig.name] = config.validatorConfig;
            if(config.sanitizerConfig){
                propertyInfo.sanitizers[config.sanitizerConfig.name] = config.sanitizerConfig;
            }
        }

        static getPropertyValidators(target: string, propName: string): ValidatorInfo {
            const entityInfo = ReactiveFormContainer.entityConfig.get(target);
            const propertyInfo = entityInfo.properties[propName];
            return propertyInfo ? propertyInfo.validators : {};
        }

        static getProperties(target:string){
            return ReactiveFormContainer.entityConfig.get(target);
        }

    }