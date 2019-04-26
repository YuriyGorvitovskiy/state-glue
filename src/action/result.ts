import { IEvent } from "../event/event";
import { IPatch } from "../patch/patch";

export interface IActionResult {
    events?: IEvent[];
    patches?: IPatch[];
}
