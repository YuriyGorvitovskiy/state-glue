import { primitive } from "../model/primitive";

export interface IEntity {
    type: string;
    id: string;
    attr: { [name: string]: primitive | primitive[] };
}
