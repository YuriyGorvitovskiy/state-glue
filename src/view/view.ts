import { ContextDeclaration } from "../context/context";
import { ParamsDeclaration } from "../context/params";
import { ILayout } from "./layout";

export interface IView<P, C> {
    params: ParamsDeclaration<P>;
    context: ContextDeclaration<C>;
    lambda: (params: P, context: C) => ILayout<any>;
}
