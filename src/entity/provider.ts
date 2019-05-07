import { IEntity } from "./entity";
import { ISelector } from "./selector";

export interface IEntityProvider {
    select(selector: ISelector): Promise<IEntity[]>;
}
