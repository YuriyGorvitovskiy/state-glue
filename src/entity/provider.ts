import { IEntity } from "./entity";
import { ISelector } from "./selector";

export abstract class EntityProvider {
    public abstract select(selector: ISelector): IEntity[];
}
