import { Prop } from "@nestjs/mongoose";
import { Schema, Types } from "mongoose";


export class AbstractRoomDocument extends Document {
    @Prop({type: Schema.ObjectId})
    _id: Types.ObjectId
}