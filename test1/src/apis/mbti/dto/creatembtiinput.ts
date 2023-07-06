import { Field, InputType } from '@nestjs/graphql';
import { CreateCarInput } from 'src/apis/Main/dto/createCarInput';

@InputType()
export class CreateMbtiInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  contents: string;

  @Field(() => [String], { nullable: true })
  creatmains: string[];
}
