import { primitive } from "../model/primitive";

export interface IFilter {
    [attr: string]: primitive[];
}

export interface ISorting {
    attr: string;
    desc?: boolean;
}

export interface IPage {
    from: number;
    max: number;
}

export interface ISelector {
    attr: string[];
    filter: IFilter;
    page?: IPage;
    sort?: ISorting[];
    type: string;
}
