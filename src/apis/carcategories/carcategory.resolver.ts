import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CarCategoryService } from './carcategory.service';
import { CarCategory } from './entities/carcategories.entity';

@Resolver()
export class CarCategoryResolver {
  constructor(private readonly carCategoryService: CarCategoryService) {}

  @Mutation(() => CarCategory)
  createCarCategory(
    @Args('name') name: string //
  ): Promise<CarCategory> {
    return this.carCategoryService.create({ name });
  }
}
