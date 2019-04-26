import { IClass } from "./class";

export interface IModel {
    version: string;
    classes: { [name: string]: IClass };
}
