import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarMains } from './entities/main.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ICarMainCreate,
  ICarMainDelete,
  ICarMainUpdate,
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
      relations: ['mbtis', 'carSize', 'carBrand', 'carCategory'],
    });
  }
  fetchOne({ carName, carId }: IPropsFetchOne): Promise<CarMains> {
    return this.CarMainRepository.findOne({
      where: {
        id: carId,
        name: carName,
      },
      relations: ['mbtis', 'carSize', 'carBrand', 'carCategory'],
    });
  }

  create({ createCarInput }: ICarMainCreate): Promise<CarMains> {
    const { creatembti, carSizeId, carBrandId, carCategoryId, ...carMain } =
      createCarInput;
    const result = this.CarMainRepository.save({
      ...carMain,
      carCategory: {
        ...carCategoryId,
      },
      carBrand: {
        ...carBrandId, //
      },
      carSize: {
        ...carSizeId,
      },
      mbtis: {
        ...creatembti,
      },
    });
    return result;
  }

  async delete({ carId }: ICarMainDelete): Promise<boolean> {
    const result = this.CarMainRepository.softDelete({
      id: carId,
    });
    return (await result).affected ? true : false;
  }

  async update({ carName, updateCarInput }: ICarMainUpdate) {
    const Car = await this.fetchOne({ carName });

    const result = this.CarMainRepository.save({
      ...Car,
      ...updateCarInput,
    });
    return result;
  }
}
