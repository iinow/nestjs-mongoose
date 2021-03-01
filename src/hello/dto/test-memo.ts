import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class TestMemo {
  @Field(() => String, { description: 'Example field (placeholder)' })
  content: string
}
