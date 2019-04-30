import { primitive } from "../model/primitive";

export interface IFilter {
    [attr: string]: primitive[];
}

export interface ISorting {
    attr: string;
    asc: boolean;
}

export interface IPage {
    from: number;
    max: number;
}

export interface ISelector {
    type: string;
    filter: IFilter;
    sort: ISorting[];
    page: IPage;
    attr: string[];
}
