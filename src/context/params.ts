import { Container } from "../model/container";
import { Primitive } from "../model/primitive";

export interface IParamDeclaration {
    container: Container;
    primitive: Primitive;
    target?: string;
}

export type ParamsDeclaration<P> = { [key in keyof P]: IParamDeclaration };
