import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarMains } from './entities/main.entities';
import { CreateCarInput } from './dto/createCarInput';
import { MainService } from './car.main.service';

@Resolver()
export class MainResolver {
  constructor(private readonly mainservice: MainService) {}

  @Query(() => String)
  fetchCar() {
    return '조회완료';
  }

  @Mutation(() => CarMains)
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.mainservice.create({ createCarInput });
  }
}
