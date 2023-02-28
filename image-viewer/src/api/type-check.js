// Supported DataTypes
export const DataTypes = {
    String: {
        $name: "String",
        type: "string",
    },
    Number: {
        $name: "Number",
        type: "number",
    },
    Boolean: {
        $name: "Boolean",
        type: "boolean",
    },
    Undefined: {
        $name: "Undefined",
        type: "undefined",
    },
    Any: {
        $name: "Any",
        type: "any",
    },
    Object: {
        $name: "Object",
        type: "object",
    },
    Array: (arg) =>
        arg
            ? { $name: "Array", type: arg, $isArray: true }
            : { $name: "Array", type: "any", $isArray: true },
    OneOf: (...args) => ({
        $name: "OneOf",
        type: [...args],
        isOneOf: true,
    }),
    Optional: (arg) => ({ ...arg, sOptional: true }),
    Required: (arg) => ({ ...arg, sOptional: false }),
};
DataTypes["Date"] = DataTypes.OneOf(DataTypes.String, DataTypes.Number);

/**
 * 
 * @param {*} variable A variable to be compared
 * @param {string} expectedType A string of expected data type of a variable
 * @returns true if the variable has an expected data type
 */
export const compareType = (variable, expectedType) => {
    switch (expectedType) {
        case DataTypes.Any.type: {
            return true;
        }

        default: {
            return expectedType.includes(typeof variable);
        }
    }
};

/**
 * 
 * The function is designed to catch type mis-matches 
 * between responses from backend and models being defined in Frontend.
 * The type mis-match is often hard to catch, yet leads to unexpected and critical issue.
 * 
 * @param {*} object An object to be compared
 * @param {*} model An object containing expected data types being described using DataTypes
 * @param {*} params An expression to indicate nested path of a variable of a model.
 * @returns a string to contain type mis-matches.
 */
export const detectInvalids = (object, model, params = "") => {
    const modelVars = Object.keys(model);

    let errors = "";
    modelVars.forEach((variable) => {
        const value = object[variable];
        const expectedType = model[variable];

        // Skip Property Check
        if (variable.includes("$")) {
            return;
        }

        // Existence check
        if (value == undefined) {
            if (!expectedType.sOptional) {
                errors += `  ${params}[${variable}] is missing.\n`;
            }

            return;
        }

        // if Array, Check recursively
        if (expectedType.$isArray) {
            // if Real data is not an Array
            if (!Array.isArray(value)) {
                errors += `  ${params}[${variable}]'s type should be [Array], but it is [${typeof value}].\n`;
                return;
            }

            if (expectedType.type === "any") {
                return;
            }

            // if Array Model is another model,
            value.forEach((subValue, index) => {
                const error = detectInvalids(
                    subValue,
                    expectedType.type,
                    `${params}[${variable}][${index}].`
                );
                errors += error;
            });

            return;
        }

        // if Custom Object Type, Check recursively
        if (expectedType.$isCustomObject) {
            // if Real data is an Array
            if (Array.isArray(value)) {
                errors += `  ${params}[${variable}]'s type should be [Object], but it is [Array].\n`;
                return;
            }

            // if Real data is not an object type
            if (typeof value !== "object") {
                errors += `  ${params}[${variable}]'s type should be [Object], but it is [${typeof value}].\n`;
                return;
            }

            const error = detectInvalids(value, expectedType, `${params}[${variable}].`);
            errors += error;

            return;
        }

        // if a variable can be several types.
        if (expectedType.isOneOf) {
            let hasMatch = false;
            const types = expectedType.type;
            const concatTypes = types.reduce(
                (prev, curr, index) => prev + (index > 0 ? " | " : "") + curr.$name,
                ""
            );

            if (!Array.isArray(expectedType.type)) {
                errors += `  ${params}[${variable}]'s expecting type is ${concatTypes}, but it is [${expectedType.type}].\n`;
                return;
            }

            types.forEach((type) => {
                const error = detectInvalids(value, type, params);
                if (error) hasMatch = true;
            });

            if (!hasMatch) {
                errors += `  ${params}[${variable}]'s expecting type is ${concatTypes}, but it is [${expectedType.type}].\n`;
            }

            return;
        }

        // Primitive Type Check
        if (!compareType(value, expectedType.type)) {
            errors += `  ${params}[${variable}]'s type should be [${expectedType.type
                }], but it is [${typeof value}].\n`;
        }
    });

    return errors;
};
