import { ISelector } from "../entity/selector";
import { IResult } from "./result";

export type IQuery = {
    [key in keyof IResult]: key extends "$select" ? ISelector : IQuery;
};
