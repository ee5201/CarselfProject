import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MBTIS } from './entities/mbti.entity';
import { Repository } from 'typeorm';
import { MainService } from '../Main/car.main.service';
import {
  IMbtiServiceCreate,
  IMbtiServiceFindOne,
  IMbtiServicedelete,
  IMbtiServiceupdate,
} from './interface/mbtis-service';

@Injectable()
export class MbtiService {
  constructor(
    @InjectRepository(MBTIS)
    private readonly MBTIRepository: Repository<MBTIS>,
    private readonly mainService: MainService
  ) {}

  findAll(): Promise<MBTIS[]> {
    return this.MBTIRepository.find({
      relations: ['carMain'],
    });
  }

  findOne({ mbtiName }: IMbtiServiceFindOne): Promise<MBTIS> {
    return this.MBTIRepository.findOne({
      where: {
        name: mbtiName,
      },
      relations: [
        'carMain',
        'carMain.carCategory',
        'carMain.carSize',
        'carMain.carBrand',
        'carMain.fileimage',
      ],
    });
  }

  async create({ creatembtiInput }: IMbtiServiceCreate): Promise<MBTIS> {
    const { creatmains, ...mbti } = creatembtiInput;

    const carName = creatmains.map((el) => el.replace('#', ''));
    // ["#스타리아","#말리부"]

    const prevCars = await this.mainService.fetchCar({ carName });

    const temp = [];
    const tags = [];

    carName.forEach((el) => {
      const isExists = prevCars.find((prevEl) => el === prevEl.name);
      if (!isExists) temp.push({ name: el });
    });
    const findresorce = temp.map((el) => {
      const item = this.mainService.fetchCar({ carName: el });
      return tags.push(item);
    });

    const newCars = await this.mainService.bulkInsert({ names: findresorce });

    const carTags = [...prevCars, ...newCars.identifiers];

    const result = this.MBTIRepository.save({
      ...mbti,
      carMain: carTags,
    });
    return result;
  }

  async delete({ mbti }: IMbtiServicedelete): Promise<boolean> {
    const result = this.MBTIRepository.softDelete({
      name: mbti,
    });
    return (await result).affected ? true : false;
  }

  async update({ mbtiName, updateMBTIInput }: IMbtiServiceupdate) {
    const mb = await this.findOne({ mbtiName });

    const result = this.MBTIRepository.save({
      ...mb,
      ...updateMBTIInput,
    });
    return result;
  }
}
