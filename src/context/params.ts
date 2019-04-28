import { Container } from "../model/container";
import { SMPrimitive } from "../model/primitive";

export interface IParamDeclaration {
    container: Container;
    primitive: SMPrimitive;
    target?: string;
}

export type ParamsDeclaration<P> = { [key in keyof P]: IParamDeclaration };
