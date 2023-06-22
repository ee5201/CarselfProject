import { Field, InputType, Int } from '@nestjs/graphql';
import { CarCategoryInput } from 'src/apis/carcategories/dto/carCategoryInput';

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
}
