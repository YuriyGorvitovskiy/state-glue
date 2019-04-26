import { IEvent } from "../event/event";
import { IView } from "./view";
import { IWidget } from "./widget";

export interface IViewRequest<P> {
    view: IView<P, any>;
    params: P;
}

export interface ILayout<P> {
    widget: IWidget<P>;
    params: P;
    event?: IEvent[];
    children?: Array<IViewRequest<any> | ILayout<any>>;
}
