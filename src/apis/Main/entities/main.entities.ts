import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CarTag } from 'src/apis/carTags/entities/cartag.entity';
import { CarBrand } from 'src/apis/carbrand/entities/carbrand.entity';
import { CarCategory } from 'src/apis/carcategories/entities/carcategories.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
  @JoinColumn()
  @ManyToOne(() => CarCategory)
  @Field(() => CarCategory)
  carCategory: CarCategory;

  @ManyToOne(() => CarTag)
  @Field(() => CarTag)
  carTags: CarTag;

  @ManyToOne(() => CarBrand)
  @Field(() => CarBrand)
  carBrand: CarBrand;

  @JoinTable()
  @CreateDateColumn()
  createAt: Date;
}
