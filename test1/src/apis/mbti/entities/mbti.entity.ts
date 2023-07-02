import { Field, ObjectType } from '@nestjs/graphql';
import { CarMains } from 'src/apis/Main/entities/main.entity';
import { CarSize } from 'src/apis/carSIze/entities/carsize.entity';
import { CarBrand } from 'src/apis/carbrand/entities/carbrand.entity';
import { CarCategory } from 'src/apis/carcategories/entities/carcategories.entity';
import { FilesImages } from 'src/apis/filestest/entities/filesentity.entity';

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class MBTIS {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;
  @Column()
  @Field(() => String)
  name: string;
  @Column({ length: 1000 })
  @Field(() => String)
  contents: string;
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
  @ManyToOne(() => FilesImages)
  @Field(() => FilesImages, { nullable: true })
  fileimage: FilesImages;

  @JoinTable()
  @CreateDateColumn()
  createAt: Date;
  @DeleteDateColumn()
  deleteAt: Date;
  @ManyToOne(() => CarMains)
  @Field(() => CarMains, { nullable: true })
  carMain: CarMains;
}
