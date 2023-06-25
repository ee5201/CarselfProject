import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarSize } from './entities/carsize.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarSizeService {
  constructor(
    @InjectRepository(CarSize)
    private readonly CarSizeRepository: Repository<CarSize>
  ) {}
  create({ name }): Promise<CarSize> {
    return this.CarSizeRepository.save({ name });
  }
}
