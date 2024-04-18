const THIS: string = "this";
export function expressionColumns(config: any, isNonValidationExpression: boolean = false) {
    var columns = [];
    if(config && config.conditionalExpression)
        columns = expressionParser(config.conditionalExpression, isNonValidationExpression);
    return columns;
}

function expressionParser(expression: any, isNonValidationExpression: boolean) {
    let splitExpressions = [];
    let columns = [];
    let expressionString = expression.toString();
    let expressionArguments = extractArguments(expressionString);
    if (expressionArguments.length > 0) {
        let splitTexts = [];
        expressionString.replace(/\s/g, '').replace(new RegExp(/{|}/, "g"), "").split(new RegExp(/return|===|!==|==|!=|>=|>|<=|<|&&/)).forEach(t => {
            let texts = t.replace(/\(|\)/g, "").split("||");
            for (let text of texts)
                splitTexts.push(text);
        });
        splitTexts.forEach(t => {
            expressionArguments.forEach((x, i) => {
                t = t.trim();
                if (t.startsWith(x + '.')) {
                    var splitText = t.split('.');
                    if (splitText.length == 2 || (splitText.length >= 2 && isNonValidationExpression))
                        if (!isNonValidationExpression)
                            columns.push({ propName: splitText[1].trim(), argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i });
                        else
                            columns.push({ propName: getConditionPath(splitText), argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i });
                    else {
                        var arrayProp = splitText[1].split('[');
                        let jObject = {
                            propName: splitText[splitText.length - 1].trim(),
                            objectPropName: arrayProp[0],
                            arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined,
                            argumentIndex: i === 3 ? 0 : i === 2 ? 1 : i
                        }
                        columns.push(jObject);
                    }
                }
            })
        })
    }
    return columns;
}

function extractArguments(splitText: string): string[] {
    let expressionArguments: string[] = [THIS];
    if (splitText[0].trim() !== "(" && !splitText.trim().startsWith("function")) {
        let text = splitText[0].split("=>")[0];
        expressionArguments.push(text.trim().replace("(", "").replace(")", ""))
    } else {
        let splitTexts = splitText.match(/\(([^)]+)\)/g);
        if (splitTexts && splitTexts[0]) 
                splitTexts[0].split(",").forEach(t => expressionArguments.push(t.trim().replace("(", "").replace(")", "")));
    }
    return expressionArguments;
}

function getConditionPath(texts: string[]): string {
    let path = "";
    for (var i = 1; i < texts.length; i++)
        path += (texts.length - 1) == i ? texts[i].trim() : `${texts[i].trim()}.`
    return path;
}