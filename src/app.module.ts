import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from '~/app.controller'
import { AppService } from '~/app.service'
import { HelloModule } from '~/hello/hello.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ currentUser: req.user }),
      playground: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://192.168.0.24:28001/date',
        auth: {
          user: 'admin',
          password: 'admin123',
        },
      }),
    }),
    HelloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
