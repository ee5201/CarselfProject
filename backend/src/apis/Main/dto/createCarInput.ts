import { Field, InputType, Int } from '@nestjs/graphql';
import { CarSizeInput } from 'src/apis/carSIze/dto/CarSizeinput';
import { CarBrandInput } from 'src/apis/carbrand/dto/createCarbrandInput';
import { CarCategoryInput } from 'src/apis/carcategories/dto/carCategoryInput';
import { CreateMbtiInput } from 'src/apis/mbti/dto/creatembtiinput';

@InputType()
export class CreateCarInput {
  @Field(() => String)
  name: string;
  @Field(() => String)
  description: string;
  @Field(() => Int)
  price: number;
  @Field(() => CarCategoryInput, { nullable: true })
  carCategoryId: CarCategoryInput;
  @Field(() => CarBrandInput, { nullable: true })
  carBrandId: CarBrandInput;
  @Field(() => CarSizeInput)
  carSizeId: CarSizeInput;
  @Field(() => CreateMbtiInput, { nullable: true })
  creatembti: CreateMbtiInput;
}
