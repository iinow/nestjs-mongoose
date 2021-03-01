import { ObjectType, Field } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { v4 as uuid } from 'uuid'

export type UserDocument = User & Document

@Schema()
@ObjectType()
export class User {
  @Prop({ required: true })
  @Field(() => String, { description: 'User uuid' })
  uuid: string = uuid()

  @Prop({ required: true })
  @Field(() => String, { description: 'User name' })
  name: string
}

export const UserSchema = SchemaFactory.createForClass(User)
