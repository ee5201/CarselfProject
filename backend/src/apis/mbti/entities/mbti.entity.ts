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
  ManyToMany,
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
  @JoinTable()
  @ManyToMany(() => CarMains, (CarMain) => CarMain.mbtis)
  @Field(() => [CarMains], { nullable: true })
  carMain: CarMains[];
  @CreateDateColumn()
  createAt: Date;
  @DeleteDateColumn()
  deleteAt: Date;
}
