import { IView } from "./view";
import { IWidget } from "./widget";

export interface IWidgetRegistry {
    [key: string]: IWidget<any>;
}

export interface IViewRegistry {
    [key: string]: IView<any, any>;
}
