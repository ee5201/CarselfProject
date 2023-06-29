import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MBTIS } from './entities/mbti.entity';
import { MbtiService } from './mbti.service';
import { CreateMbtiInput } from './dto/creatembtiinput';

@Resolver()
export class MbtiResolver {
  constructor(
    private readonly mbtiservice: MbtiService //
  ) {}
  @Query(() => [MBTIS])
  fetchMbtis(): Promise<MBTIS[]> {
    return this.mbtiservice.findAll();
  }
  @Query(() => MBTIS)
  fetchMbti(@Args('MbtiName') mbtiName: string): Promise<MBTIS> {
    return this.mbtiservice.findOne({ mbtiName });
  }
  @Mutation(() => MBTIS)
  creatembti(
    @Args('name') name: string, //
    @Args('contents') contents: string
  ): Promise<MBTIS> {
    return this.mbtiservice.create({ name, contents });
  }
}
