import { Logger } from "@nestjs/common";
import { FilterQuery, Model, Types } from "mongoose";


export class AbstractRepository<TDocument> {
    protected readonly logger: Logger
    constructor(protected readonly model: Model<TDocument>) {}

    async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
        const createDocument = await this.model.create({
            ...document,
            _id: new Types.ObjectId
        })

        return (await createDocument.save()).toJSON() as unknown as TDocument
    }

    async delete(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
        return await this.model.findOneAndDelete(filterQuery, {}).lean<TDocument>(true)
    }
}