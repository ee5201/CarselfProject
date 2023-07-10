import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { CarMains } from './entities/main.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ICarmainFetchCar,
  ICarmainFetchOne,
  ICarmainCreate,
  ICarmainUpdate,
} from './interface/carMainServiceinterface';

@Injectable()
export class MainService {
  constructor(
    @InjectRepository(CarMains)
    private readonly CarMainRepository: Repository<CarMains>
  ) {}

  fetchAll(): Promise<CarMains[]> {
    return this.CarMainRepository.find({
      relations: ['fileimage', 'carSize', 'carBrand', 'carCategory'],
    });
  }
  fetchOne({ carId, carName }: ICarmainFetchOne): Promise<CarMains> {
    return this.CarMainRepository.findOne({
      where: {
        id: carId,
        name: carName,
      },
      relations: ['fileimage', 'carSize', 'carBrand', 'carCategory'],
    });
  }

  fetchCar({ carName }: ICarmainFetchCar) {
    return this.CarMainRepository.find({
      where: { name: In(carName) },
      relations: ['fileimage', 'carSize', 'carBrand', 'carCategory'],
    });
  }

  bulkInsert({ names }) {
    return this.CarMainRepository.insert(names);
  }

  create({ createCarInput }: ICarmainCreate): Promise<CarMains> {
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

  async update({ carId, carName, updateCarInput }: ICarmainUpdate) {
    const Id = await this.fetchOne({ carId, carName });

    const result = this.CarMainRepository.save({
      ...Id,
      ...updateCarInput,
    });
    return result;
  }
}
