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
  @Query(() => CarMains, { nullable: true })
  fetchCar(
    @Args('CarName', { nullable: true }) carName: string,
    @Args('CarId', { nullable: true }) carId: string
  ): Promise<CarMains> {
    return this.mainservice.fetchOne({ carName, carId });
  }

  @Mutation(() => CarMains)
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.mainservice.create({ createCarInput });
  }

  @Mutation(() => Boolean)
  deleteCar(@Args('carId') carId: string): Promise<boolean> {
    return this.mainservice.delete({ carId });
  }

  @Mutation(() => CarMains, { nullable: true })
  updateCar(
    @Args('Carname') carName: string, //
    @Args('updateCarInput') updateCarInput: UpdateCarInput
  ) {
    return this.mainservice.update({ carName, updateCarInput });
  }
}
