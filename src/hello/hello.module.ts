import { Module } from '@nestjs/common'
import { HelloService } from './hello.service'
import { HelloResolver } from './hello.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { Hello, HelloSchema, HelloDocument } from './entities/hello.schema'

@Module({
  // imports: [MongooseModule.forFeatureAsync([{}])],
  imports: [
    MongooseModule.forFeature([{ name: Hello.name, schema: HelloSchema }]),
  ],
  providers: [HelloResolver, HelloService],
})
export class HelloModule {}
