import { IPatch } from "./patch";

export abstract class PatchConsumer {
    public abstract apply(patch: IPatch): void;
}
