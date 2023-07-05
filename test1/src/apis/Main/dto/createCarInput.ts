import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CarMains } from '../entities/main.entity';
import { CarCategoryInput } from 'src/apis/carcategories/dto/carCategoryInput';
import { CarBrandInput } from 'src/apis/carbrand/dto/createCarbrandInput';
import { CarSizeInput } from 'src/apis/carSIze/dto/CarSizeinput';
import { FilesInput } from 'src/apis/filestest/dto/createImages';

@InputType()
export class CreateCarInput {
  @Field(() => String)
  name: string;
  @Field(() => Int)
  price: number;
  @Field(() => String)
  description: string;
  @Field(() => CarCategoryInput, { nullable: true })
  carCategoryId: CarCategoryInput;
  @Field(() => CarBrandInput, { nullable: true })
  carBrandId: CarBrandInput;
  @Field(() => CarSizeInput, { nullable: true })
  carSizeId: CarSizeInput;
  @Field(() => FilesInput, { nullable: true })
  FileId: FilesInput;
}
