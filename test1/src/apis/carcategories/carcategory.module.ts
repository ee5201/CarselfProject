import { Module } from '@nestjs/common';
import { CarCategoryResolver } from './carcategory.resolver';
import { CarCategoryService } from './carcategory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarCategory } from './entities/carcategories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarCategory])],
  providers: [CarCategoryResolver, CarCategoryService],
})
export class CarCategoryModule {}
