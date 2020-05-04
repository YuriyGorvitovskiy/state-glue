export enum SMPrimitive {
    BOOLEAN = "boolean",
    INTEGER = "integer",
    DOUBLE = "double",
    REFERENCE = "reference",
    STRING = "string",
    TEXT = "text",
    TIMESTAMP = "timestamp",
}

export enum JSPrimitive {
    BOOLEAN = "boolean",
    DATE = "date",
    NUMBER = "number",
    STRING = "string",
    UNDEFINED = "undefined",
}

export type reference = string;
export type class_id = string;
export type attr_id = string;

export type primitive = boolean | number | string | Date;
export type value = primitive | readonly primitive[];

export function primitiveOf(a: primitive): JSPrimitive {
    if (null == a) {
        return JSPrimitive.UNDEFINED;
    }
    switch (typeof a) {
        case "boolean":
            return JSPrimitive.BOOLEAN;
        case "number":
            return JSPrimitive.NUMBER;
        case "string":
            return JSPrimitive.STRING;
    }
    if (a instanceof Date) {
        return JSPrimitive.DATE;
    }
    return JSPrimitive.UNDEFINED;
}
