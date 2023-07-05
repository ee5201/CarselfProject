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
      relations: ['carSize', 'carBrand', 'carCategory'],
    });
  }
  fetchOne({ carId, carName }: IPropsFetchOne): Promise<CarMains> {
    return this.CarMainRepository.findOne({
      where: {
        id: carId,
        name: carName,
      },
      relations: ['carSize', 'carBrand', 'carCategory'],
    });
  }

  // create({ createCarInput }) {
  //   const result = this.CarMainRepository.save({
  //     ...createCarInput,
  //   });
  //   return result;
  // }
  create({ createCarInput }) {
    const { FileId, carSizeId, carBrandId, carCategoryId, ...createCar } =
      createCarInput;
    const result = this.CarMainRepository.save({
      ...createCar,
      carCategory: {
        ...carCategoryId,
      },
      carSize: {
        ...carSizeId,
      },
      carBrand: {
        ...carBrandId,
      },
      fileimage: {
        ...FileId,
      },
    });
    return result;
  }

  async update({ carId, carName, updateCarInput }) {
    const Id = await this.fetchOne({ carId, carName });

    const result = this.CarMainRepository.save({
      ...Id,
      ...updateCarInput,
    });
    return result;
  }
}
