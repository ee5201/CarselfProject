import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MBTIS } from './entities/mbti.entity';
import { MbtiService } from './mbti.service';
import { CreateMbtiInput } from './dto/creatembtiinput';
import { UpdateMBTIInput } from './dto/updatembtiInput';

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
    @Args('creatembtiInput') creatembtiInput: CreateMbtiInput //
  ): Promise<MBTIS> {
    return this.mbtiservice.create({ creatembtiInput });
  }

  @Mutation(() => Boolean)
  deleteCar(@Args('mbti') mbti: string): Promise<boolean> {
    return this.mbtiservice.delete({ mbti });
  }

  @Mutation(() => MBTIS, { nullable: true })
  updateMBTI(
    @Args('mbtiName') mbtiName: string, //
    @Args('updateMBTIInput') updateMBTIInput: UpdateMBTIInput
  ) {
    return this.mbtiservice.update({ mbtiName, updateMBTIInput });
  }
}
