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
    return this.CarMainRepository.find();
  }
  fetchOne({ carName, carId }: IPropsFetchOne): Promise<CarMains> {
    return this.CarMainRepository.findOne({
      where: {
        id: carId,
        name: carName,
      },
    });
  }

  create({ createCarInput }) {
    const result = this.CarMainRepository.save({
      ...createCarInput,
    });
    return result;
  }
}
