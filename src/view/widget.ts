import { ParamsDeclaration } from "../context/params";

export interface IWidget<P> {
    params: ParamsDeclaration<P>;
}
