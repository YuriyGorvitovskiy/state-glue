import { IQuery } from "./query";
import { IResult } from "./result";

export interface IQueryProcessor {
    execute(query: IQuery): Promise<IResult[]>;
}
