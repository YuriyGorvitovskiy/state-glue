import { ContextDeclaration } from "../context/context";
import { ParamsDeclaration } from "../context/params";
import { IActionResult } from "./result";

export interface IAction<P, C> {
    params: ParamsDeclaration<P>;
    context: ContextDeclaration<C>;
    lambda: (params: P, context: C) => IActionResult;
}
