import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class CarMains {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;
  @Column()
  @Field(() => String)
  name: string;
  @Column()
  @Field(() => Int)
  price: number;
  @Column()
  @Field(() => String)
  description: string;
}
