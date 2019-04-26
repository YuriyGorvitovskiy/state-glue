import { IMapping } from "./mapping";

export type ContextDeclaration<C> = { [key in keyof C]: IMapping | ContextDeclaration<C[key]> };
