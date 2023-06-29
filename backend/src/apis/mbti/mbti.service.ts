import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MBTIS } from './entities/mbti.entity';
import { Repository } from 'typeorm';
import { CreateMbtiInput } from './dto/creatembtiinput';

@Injectable()
export class MbtiService {
  constructor(
    @InjectRepository(MBTIS)
    private readonly MBTIRepository: Repository<MBTIS>
  ) {}

  findAll(): Promise<MBTIS[]> {
    return this.MBTIRepository.find();
  }

  findOne({ mbtiName }): Promise<MBTIS> {
    return this.MBTIRepository.findOne({
      where: {
        name: mbtiName,
      },
      // relations: ['mbtis', 'carSize', 'carBrand', 'carCategory'],
    });
  }

  create({ name, contents }): Promise<MBTIS> {
    const result = this.MBTIRepository.save({
      name,
      contents,
    });
    return result;
  }
}
