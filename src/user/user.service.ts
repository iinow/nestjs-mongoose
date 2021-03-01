import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User, UserDocument } from './schemas/user.schema'
import { v4 as uuid } from 'uuid'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserInput: CreateUserInput): Promise<User> {
    return this.userModel.create({
      uuid: uuid(),
      name: createUserInput.exampleField,
    })
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().populate('user').exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
