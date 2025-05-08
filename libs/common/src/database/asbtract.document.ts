import { Prop } from '@nestjs/mongoose'
import { SchemaTypes, Types } from 'mongoose'

export class AbstractDocument extends Document {
    @Prop({type: SchemaTypes.ObjectId})
    _id: Types.ObjectId
}