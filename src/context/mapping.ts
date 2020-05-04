import { IFilter, IPage, ISorting } from "../entity/selector";

export enum Start {
    GLOBAL = "global",
    CONTEXT = "context",
    PARAM = "param",
    FIXED = "fixed",
}

export interface IStep {
    readonly input: string;
    readonly output: string;
    readonly filter: IFilter;
    readonly page?: IPage;
    readonly sort?: ISorting[];
    readonly type: string;
}

export interface IMapping {
    readonly $type: "mappiing";
    readonly $array: boolean;
    readonly start: Start;
    readonly value: any;
    readonly steps: readonly IStep[];
}
