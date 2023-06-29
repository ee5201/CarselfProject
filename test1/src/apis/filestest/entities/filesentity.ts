import { Field, Float, ObjectType } from '@nestjs/graphql';
import { FileUpload } from 'graphql-upload';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class FilesImages {
  // @PrimaryGeneratedColumn('uuid')
  // @Field(() => String)
  // id: string;
  // @Column()
  // @Field(() => Float, { nullable: true })
  // size: number;
  // @Column()
  @Field(() => String)
  url: string;
}
