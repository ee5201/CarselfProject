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
    return this.MBTIRepository.find({
      relations: ['carMain', 'carSize', 'carBrand', 'carCategory'],
    });
  }

  findOne({ mbtiName }): Promise<MBTIS> {
    return this.MBTIRepository.findOne({
      where: {
        name: mbtiName,
      },
      relations: ['carMain', 'carSize', 'carBrand', 'carCategory'],
    });
  }

  // create({ creatembtiInput }) {
  //   const { creatmains, carSizeId, carBrandId, carCategoryId, ...mbtis } =
  //     creatembtiInput;
  //   const result = this.MBTIRepository.save({
  //     ...mbtis,
  //     carCategory: carCategoryId,
  //     carBrand: carBrandId,
  //     carSize: carSizeId,
  //     carMain: creatmains,
  //   });
  //   return result;
  // }
  create({ creatembtiInput }): Promise<MBTIS> {
    const { creatmains, carCategoryId, carBrandId, carSizeId, ...mbti } =
      creatembtiInput;
    const result = this.MBTIRepository.save({
      ...mbti,
      carMain: {
        ...creatmains,
      },
      carCategory: {
        ...carCategoryId,
      },
      carSize: {
        ...carSizeId,
      },
      carBrand: {
        ...carBrandId,
      },
    });
    return result;
  }

  async delete({ mbti }): Promise<boolean> {
    const result = this.MBTIRepository.softDelete({
      name: mbti,
    });
    return (await result).affected ? true : false;
  }

  async update({ mbtiName, updateMBTIInput }) {
    const mb = await this.findOne({ mbtiName });

    const result = this.MBTIRepository.save({
      ...mb,
      ...updateMBTIInput,
    });
    return result;
  }
}
