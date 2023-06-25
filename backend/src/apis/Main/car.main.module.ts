import { Module } from '@nestjs/common';
import { MainResolver } from './car.main.resolver';
import { MainService } from './car.main.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarMains } from './entities/main.entity';
import { CarCategoryService } from '../carcategories/carcategory.service';
import { CarBrandService } from '../carbrand/carbrand.service';
import { CarCategory } from '../carcategories/entities/carcategories.entity';
import { CarBrand } from '../carbrand/entities/carbrand.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CarMains, //
      CarCategory,
      CarBrand,
    ]),
  ],
  providers: [
    MainResolver, //
    MainService,
    CarCategoryService,
    CarBrandService,
  ],
})
export class MainMoudle {}
