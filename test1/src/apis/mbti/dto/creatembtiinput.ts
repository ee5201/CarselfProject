import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { MBTIS } from '../entities/mbti.entity';
import { CarCategoryInput } from 'src/apis/carcategories/dto/carCategoryInput';
import { CarBrandInput } from 'src/apis/carbrand/dto/createCarbrandInput';
import { CarSizeInput } from 'src/apis/carSIze/dto/CarSizeinput';
import { CreateCarInput } from 'src/apis/Main/dto/createCarInput';
import { FilesInput } from 'src/apis/filestest/dto/createImages';

@InputType()
export class CreateMbtiInput {
  @Field(() => String)
  name: string;
  @Field(() => String)
  contents: string;
  @Field(() => CreateCarInput, { nullable: true })
  creatmains: CreateCarInput;
}
