export enum ComparisonOperation {
    EQUAL = "equal",
    IN = "in",
    LESS = "less",
    MORE = "more",
    BETWEEN = "between",

    NOT_EQUAL = "not-equal",
    NOT_IN = "not-in",
    NOT_LESS = "not-less",
    NOT_MORE = "not-more",
    NOT_BETWEEN = "not-between"
}

export interface IFilter {
    attribute: string;
    operation: ComparisonOperation;
    values: any[];
}

export interface ISorting {
    attribute: string;
    ascending: boolean;
}

export interface IPage {
    begin: number;
    max: number;
}

export interface ISelector {
    type: string;
    ids: string[];
    filters: IFilter[];
    sortings: ISorting[];
    page: IPage;
    attributes: string[];
}
