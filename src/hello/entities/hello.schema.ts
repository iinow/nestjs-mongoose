import { ObjectType, Field } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type HelloDocument = Hello & Document

@Schema()
@ObjectType()
export class Hello {
  @Prop({ required: true })
  @Field(() => String, { description: 'Example field (placeholder)' })
  content: string
}

export const HelloSchema = SchemaFactory.createForClass(Hello)
