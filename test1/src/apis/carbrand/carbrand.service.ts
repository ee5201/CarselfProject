import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarBrand } from './entities/carbrand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ICarBrandCreate } from './interface/carBrandServiceinterface';

@Injectable()
export class CarBrandService {
  constructor(
    @InjectRepository(CarBrand)
    private readonly carBrandRespoitory: Repository<CarBrand>
  ) {}

  create({ name }: ICarBrandCreate): Promise<CarBrand> {
    return this.carBrandRespoitory.save({ name });
  }
}
