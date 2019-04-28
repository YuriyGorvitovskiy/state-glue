export enum PatchOp {
    UPSERT = "upsert",
    UPDATE = "update",
    DELETE = "delete"
}

export interface IPatch {
    op: string;
    type: string;
    id: string;
    attr?: { [key: string]: any };
}
