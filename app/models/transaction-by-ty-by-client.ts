import { IClient } from "./client";

export interface ITransactionByTyByClient {
    type:string,
    clients:IClient[],
    id:number
}


