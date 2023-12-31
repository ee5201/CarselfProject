import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class CarCategory {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;
  @Column()
  @Field(() => String)
  name: string;
}
