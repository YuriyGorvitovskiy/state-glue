import { IEvent } from "./event";

export abstract class EventConsumer {
    public abstract apply(event: IEvent): void;
}
