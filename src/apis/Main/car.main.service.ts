import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarMains } from './entities/main.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ICarMainCreate,
  IPropsFetchOne,
} from './interface/carMainServiceinterface';

@Injectable()
export class MainService {
  constructor(
    @InjectRepository(CarMains)
    private readonly CarMainRepository: Repository<CarMains>
  ) {}

  fetchAll(): Promise<CarMains[]> {
    return this.CarMainRepository.find({
      relations: ['carCategory'],
    });
  }
  fetchOne({ carId }: IPropsFetchOne): Promise<CarMains> {
    return this.CarMainRepository.findOne({
      where: { id: carId },
      relations: ['carCategory'],
    });
  }

  create({ createCarInput }: ICarMainCreate): Promise<CarMains> {
    const { carCategoryId, ...carMain } = createCarInput;
    const result = this.CarMainRepository.save({
      ...carMain,
      carCategory: {
        ...carCategoryId,
      },
    });
    return result;
  }

  async delete({ carId }: IPropsFetchOne): Promise<boolean> {
    const result = this.CarMainRepository.softDelete({
      id: carId,
    });
    return (await result).affected ? true : false;
  }

  async update({ carId, updateCarInput }) {
    const Car = await this.fetchOne({ carId });

    const result = this.CarMainRepository.save({
      ...Car,
      ...updateCarInput,
    });
    return result;
  }
}
