import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class CarBrand {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  @Field(() => String)
  name: string;
}
