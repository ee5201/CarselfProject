import { Module } from '@nestjs/common';
import { MbtiResolver } from './mbti.resolver';
import { MbtiService } from './mbti.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MBTIS } from './entities/mbti.entity';
import { CarCategoryService } from '../carcategories/carcategory.service';
import { CarBrandService } from '../carbrand/carbrand.service';
import { CarBrand } from '../carbrand/entities/carbrand.entity';
import { CarCategory } from '../carcategories/entities/carcategories.entity';
import { CarMains } from '../Main/entities/main.entity';
import { MainService } from '../Main/car.main.service';

@Module({
  imports: [TypeOrmModule.forFeature([MBTIS, CarCategory, CarBrand, CarMains])],
  providers: [
    MbtiResolver, //
    MbtiService,
    CarCategoryService,
    CarBrandService,
    MainService,
  ],
})
export class MbtiModule {}
