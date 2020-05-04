import { Context, ContextDeclaration } from "./context";

export type ContextResolver = <P, C extends Context>(params: P, context: ContextDeclaration<C>) => Promise<C | C[]>;
