import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CarSize } from 'src/apis/carSIze/entities/carsize.entity';
import { CarBrand } from 'src/apis/carbrand/entities/carbrand.entity';
import { CarCategory } from 'src/apis/carcategories/entities/carcategories.entity';
import { MBTIS } from 'src/apis/mbti/entities/mbti.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
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
  @Field(() => CarCategory, { nullable: true })
  carCategory: CarCategory;
  @ManyToOne(() => CarSize)
  @Field(() => CarSize, { nullable: true })
  carSize: CarSize;
  @ManyToOne(() => CarBrand)
  @Field(() => CarBrand, { nullable: true })
  carBrand: CarBrand;

  @JoinTable()
  @CreateDateColumn()
  createAt: Date;
  @DeleteDateColumn()
  deleteAt: Date;
  @ManyToOne(() => MBTIS)
  @Field(() => MBTIS)
  mbtis: MBTIS;
}
