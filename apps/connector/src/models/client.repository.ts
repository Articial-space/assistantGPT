import { AbstractRepository } from "@app/common";
import { ClientDocument } from "./client.document";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


export class ClientRepository extends AbstractRepository<ClientDocument> {
    constructor(@InjectModel(ClientDocument.name) protected readonly clientModel: Model<ClientDocument>) {
        super(clientModel)
    }
}