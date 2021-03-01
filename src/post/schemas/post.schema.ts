import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'
import { User } from '~/user/schemas/user.schema'

export type PostDocument = Post & Document

@Schema()
@ObjectType()
export class Post {
  @Prop({ required: true })
  @Field(() => Int, { description: 'Post id' })
  id: number

  @Prop({ required: true })
  @Field(() => String, { description: 'Post title' })
  title: string

  @Prop({ required: true })
  @Field(() => String, { description: 'Post content' })
  content: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Field(() => User, { description: '등록자' })
  registerUser: User
}

export const PostSchema = SchemaFactory.createForClass(Post)
