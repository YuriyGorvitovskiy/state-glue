import { primitive } from "../model/primitive";

export interface IResult {
    [key: string]: IResult | primitive;
}
