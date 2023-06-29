import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainMoudle } from './apis/Main/car.main.module';
import { CarCategoryModule } from './apis/carcategories/carcategory.module';
import { CarBrandMoudle } from './apis/carbrand/carbrand.module';
import { CarSizeMoudle } from './apis/carSIze/carSize.module';
import { MbtiModule } from './apis/mbti/mbti.module';
import { FilesTestModule } from './apis/filestest/fileTest.module';

@Module({
  imports: [
    MainMoudle,
    CarCategoryModule,
    CarBrandMoudle,
    FilesTestModule,
    CarSizeMoudle,
    MbtiModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      cors: {
        origin: [
          'http://localhost:3000',
          'http://localhost:3001',
          'http://127.0.0.1:3000',
          'http://127.0.0.1:3001',
          'https://storage.googleapis.com',
        ],
        credentials: true,
      },
    }),

    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql', //mysql 이 맞아 너가 몰라서 그래 사용할 때 as mysql
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
