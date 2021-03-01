import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
} from '@nestjs/graphql'
import { HelloService } from './hello.service'
import { Hello } from './entities/hello.schema'
import { CreateHelloInput } from './dto/create-hello.input'
import { UpdateHelloInput } from './dto/update-hello.input'
import { TestMemo } from './dto/test-memo'

@Resolver(() => Hello)
export class HelloResolver {
  constructor(private readonly helloService: HelloService) {}

  @Mutation(() => Hello)
  createHello(
    @Args('createHelloInput') createHelloInput: CreateHelloInput
  ): Promise<Hello> {
    return this.helloService.create(createHelloInput)
  }

  @Query(() => [Hello], { name: 'helloList' })
  findAll() {
    return this.helloService.findAll()
  }

  @ResolveField(() => TestMemo)
  findMemo(): TestMemo {
    return {
      content: 'hei',
    }
  }

  @Query(() => Hello, { name: 'hello' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.helloService.findOne(id)
  }

  @Mutation(() => Hello)
  updateHello(@Args('updateHelloInput') updateHelloInput: UpdateHelloInput) {
    return this.helloService.update(updateHelloInput.id, updateHelloInput)
  }

  @Mutation(() => Hello)
  removeHello(@Args('id', { type: () => Int }) id: number) {
    return this.helloService.remove(id)
  }
}
