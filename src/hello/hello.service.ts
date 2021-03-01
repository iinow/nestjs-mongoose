import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateHelloInput } from './dto/create-hello.input'
import { UpdateHelloInput } from './dto/update-hello.input'
import { Hello, HelloDocument } from './entities/hello.schema'

@Injectable()
export class HelloService {
  constructor(
    @InjectModel(Hello.name) private helloModel: Model<HelloDocument>
  ) {}

  create(createHelloInput: CreateHelloInput): Promise<Hello> {
    return this.helloModel.create({
      content: createHelloInput.exampleField,
    })
  }

  findAll(): Promise<Hello[]> {
    return this.helloModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} hello`
  }

  update(id: number, updateHelloInput: UpdateHelloInput) {
    return `This action updates a #${id} hello`
  }

  remove(id: number) {
    return `This action removes a #${id} hello`
  }
}
