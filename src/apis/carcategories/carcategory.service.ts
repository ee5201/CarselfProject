import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarCategory } from './entities/carcategories.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ICarCategorycreate } from './interface/carCategoryServiceinterface';

@Injectable()
export class CarCategoryService {
  @InjectRepository(CarCategory)
  private readonly carCategoryRepository: Repository<CarCategory>;
  create({ name }: ICarCategorycreate): Promise<CarCategory> {
    return this.carCategoryRepository.save({ name });
  }
}
