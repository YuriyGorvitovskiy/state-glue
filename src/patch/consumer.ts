import { IPatch } from "./patch";

export interface IPatchConsumer {
    apply(patch: IPatch): void;
}
