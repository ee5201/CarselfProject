import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarMains } from './entities/main.entity';
import { CreateCarInput } from './dto/createCarInput';
import { MainService } from './car.main.service';
import { UpdateCarInput } from './dto/updateCarInput';

@Resolver()
export class MainResolver {
  constructor(private readonly mainservice: MainService) {}

  @Query(() => [CarMains])
  fetchCars(): Promise<CarMains[]> {
    return this.mainservice.fetchAll();
  }
  @Query(() => CarMains)
  fetchCar(@Args('CarId') carId: string): Promise<CarMains> {
    return this.mainservice.fetchOne({ carId });
  }

  @Mutation(() => CarMains)
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.mainservice.create({ createCarInput });
  }

  @Mutation(() => Boolean)
  deleteCar(@Args('carId') carId: string): Promise<boolean> {
    return this.mainservice.delete({ carId });
  }

  @Mutation(() => CarMains)
  updateCar(
    @Args('carId') carId: string, //
    @Args('updateCarInput') updateCarInput: UpdateCarInput
  ) {
    return this.mainservice.update({ carId, updateCarInput });
  }
}
