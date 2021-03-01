import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { from } from 'rxjs'
import { flatMap, take } from 'rxjs/operators'
import { UserService } from '~/user/user.service'
import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'
import { Post, PostDocument } from './schemas/post.schema'
import { Chance } from 'chance'

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    private readonly userService: UserService
  ) {}

  async create(createPostInput: CreatePostInput): Promise<Post> {
    return from(this.userService.findAll())
      .pipe(
        flatMap((obj) => obj),
        take(1),
        flatMap((user, index) =>
          this.postModel.create({
            id: index,
            title: Chance().company(),
            content: Chance().address(),
            user,
          })
        )
      )
      .toPromise()
  }

  findAll() {
    return `This action returns all post`
  }

  findOne(id: number) {
    return `This action returns a #${id} post`
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`
  }

  remove(id: number) {
    return `This action removes a #${id} post`
  }
}
