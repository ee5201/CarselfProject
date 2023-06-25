import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CarSize } from './entities/carsize.entity';
import { CarSizeService } from './carSize.service';

@Resolver()
export class CarSizeResolver {
  constructor(private readonly carSizeService: CarSizeService) {}

  @Mutation(() => CarSize)
  createCarSize(@Args('name') name: string): Promise<CarSize> {
    return this.carSizeService.create({ name });
  }
}
