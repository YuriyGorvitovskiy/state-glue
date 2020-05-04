import { IMapping } from "./mapping";
import { reference } from "../model/primitive";

export interface Context {
    readonly $id?: reference;
}
export type ContextDeclaration<C> = {
    [key in keyof C]: key extends "$id" ? IMapping : IMapping | ContextDeclaration<C[key]>;
};
