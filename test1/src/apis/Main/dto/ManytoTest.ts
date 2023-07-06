import { Field, InputType, Int, PickType } from '@nestjs/graphql';

@InputType()
export class TESTT {
  @Field(() => String, { nullable: true })
  name: string;
  @Field(() => Int, { nullable: true })
  price: number;
  @Field(() => String, { nullable: true })
  description: string;
}
