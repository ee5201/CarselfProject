import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CarBrandService } from './carbrand.service';
import { CarBrand } from './entities/carbrand.entity';

@Resolver()
export class CarBrandResolver {
  constructor(private readonly carBrandService: CarBrandService) {}
  @Mutation(() => CarBrand, { nullable: true })
  carBrand(
    @Args('name') name: string //
  ): Promise<CarBrand> {
    return this.carBrandService.create({ name });
  }
}
