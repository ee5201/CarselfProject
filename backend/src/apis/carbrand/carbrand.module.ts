import { Module } from '@nestjs/common';
import { CarBrandResolver } from './carbrand.resolver';
import { CarBrandService } from './carbrand.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBrand } from './entities/carbrand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarBrand])],
  providers: [CarBrandResolver, CarBrandService],
})
export class CarBrandMoudle {}
