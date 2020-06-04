import { value, primitive } from "../model/primitive";
import { IPage } from "../entity/selector";

export interface ISort {
    readonly dir: "asc" | "desc";
    readonly priority: number;
}

export interface IField {
    readonly $field?: string;
    readonly $cmp?: "any" | "equal" | "not equal" | "in" | "not in" | "between" | "outside" | "<=" | "<" | ">" | ">=";
    readonly $value?: value;
    readonly $return?: boolean;
    readonly $sort?: ISort | "none";
    readonly $aggr?: "group by" | "max" | "min" | "sum" | "avg" | "count" | "std div";
}

export type ISubQuery<R> = {
    [key in keyof R | "$type" | "$page" | "$aggregate" | "$dir" | "$field" | "$cmp" | "$return"]?: key extends "$type"
        ? string
        : key extends "$page"
        ? IPage | "all"
        : key extends "$aggregate"
        ? boolean
        : key extends "$dir"
        ? "forward" | "reverse"
        : key extends "$field"
        ? string
        : key extends "$cmp"
        ? "any" | "exist" | "not exist"
        : key extends "$return"
        ? boolean
        : key extends keyof R
        ? ISubQuery<R[key]> | IField | value
        : void;
};

export type IQuery<R> = {
    [key in keyof R | "$type" | "$page" | "$aggregate"]?: key extends "$type"
        ? string
        : key extends "$page"
        ? IPage | "all"
        : key extends "$aggregate"
        ? boolean
        : key extends keyof R
        ? ISubQuery<R[key]> | IField | value
        : void;
};

type ISelect<R> = {
    [key in keyof R]: ISubQuery<R[key]> | IField;
};

const ignore = [];
export const injectDefaults = <R>(query: IQuery<R>): IQuery<R> => {
    const $aggregate = query.$aggregate || false;
    return {
        $type: query.$type,
        $page: query.$page || "all",
        $aggregate,
        ...injectChildrenDefaults($aggregate, query as ISelect<R>),
    } as IQuery<R>;
};

const injectSubQueryDefaults = <R, S>(key: keyof R, aggregate: boolean, query: ISubQuery<S>): ISubQuery<S> => {
    const $aggregate = query.$aggregate || aggregate || false;
    return {
        $type: query.$type,
        $page: query.$page || "all",
        $aggregate,
        $dir: query.$dir || "forward",
        $field: query.$field || key,
        $cmp: "any",
        $return: query.$return || true,
        ...injectChildrenDefaults($aggregate, query as ISelect<R>),
    } as ISubQuery<S>;
};
const injectFieldDefaults = <R>(key: keyof R, aggregate: boolean, field: IField): IField => {
    return {
        $field: field.$field || key,
        $cmp: field.$cmp || (!("$value" in field) ? "any" : Array.isArray(field.$value) ? "in" : "eq"),
        $value: field.$value,
        $return: field.$return || true,
        $sort: field.$sort || "none",
        $aggr: field.$aggr || "group by",
    } as IField;
};

const injectChildrenDefaults = <R>(aggregate: boolean, select: ISelect<R>): ISelect<R> => {
    return Object.fromEntries(
        Object.entries(select)
            .filter(([k]) => "$" !== k.substring(0, 1))
            .map(([k, v]) => [k, injectChildDefaults(k as keyof R, aggregate, v)])
    ) as ISelect<R>;
};

const injectChildDefaults = <R, T extends ISubQuery<R> | IField | value>(
    k: keyof R,
    aggregate: boolean,
    v: T
): ISubQuery<R> | IField => {
    return null == v || Array.isArray(v) || typeof v !== "object"
        ? injectFieldDefaults(k, aggregate, { $value: v as value })
        : "$type" in v
        ? injectSubQueryDefaults(k, aggregate, v as ISubQuery<R>)
        : injectFieldDefaults(k, aggregate, v as IField);
};
