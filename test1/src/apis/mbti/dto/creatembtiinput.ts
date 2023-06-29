import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { MBTIS } from '../entities/mbti.entity';
import { CarCategoryInput } from 'src/apis/carcategories/dto/carCategoryInput';
import { CarBrandInput } from 'src/apis/carbrand/dto/createCarbrandInput';
import { CarSizeInput } from 'src/apis/carSIze/dto/CarSizeinput';
import { CreateCarInput } from 'src/apis/Main/dto/createCarInput';

@InputType()
export class CreateMbtiInput {
  @Field(() => String)
  name: string;
  @Field(() => String)
  contents: string;
  @Field(() => CreateCarInput, { nullable: true })
  creatmains: CreateCarInput;
  @Field(() => CarCategoryInput, { nullable: true })
  carCategoryId: CarCategoryInput;
  @Field(() => CarBrandInput, { nullable: true })
  carBrandId: CarBrandInput;
  @Field(() => CarSizeInput)
  carSizeId: CarSizeInput;
}