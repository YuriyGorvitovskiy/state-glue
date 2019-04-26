import { IAttribute } from "./attribute";

export interface IClass {
    attributes: { [name: string]: IAttribute };
}
