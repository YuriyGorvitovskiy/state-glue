import { IFilter, ISorting } from "../entity/selector";

export enum Start {
    GLOBAL = "global",
    CONTEXT = "context",
    PARAM = "param",
    FIXED = "fixed",
}

export interface IStep {
    type: string;
    in_attr: string;
    out_attr: string;
    filters: IFilter[];
    sortings: ISorting[];
    page: {
        begin: number;
        max: number;
    };
}

export interface IMapping {
    start: Start;
    value: any;
    steps: IStep[];
}
