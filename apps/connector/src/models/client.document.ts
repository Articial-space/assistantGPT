import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false})
export class ClientDocument extends AbstractDocument {
    @Prop()
    email: string
    @Prop()
    password: string
}

export const ClientSchema = SchemaFactory.createForClass(ClientDocument)