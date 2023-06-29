import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CarMains } from 'src/apis/Main/entities/main.entity';
import { CarBrand } from 'src/apis/carbrand/entities/carbrand.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
