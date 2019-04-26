import { ContextDeclaration } from "./context";

export abstract class ContextResolver {
    public abstract resolve<P, C>(params: P, context: ContextDeclaration<C>): C;
}
