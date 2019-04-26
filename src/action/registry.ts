import { IAction } from "./action";

export interface IActionRegistry {
    [key: string]: IAction<any, any>;
}
