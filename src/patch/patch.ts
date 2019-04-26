export enum PatchOperation {
    UPSERT = "upsert",
    UPDATE = "update",
    DELETE = "delete"
}

export interface IPatch {
    operation: string;
    type: string;
    id: string;
    attributes?: { [key: string]: any };
}
