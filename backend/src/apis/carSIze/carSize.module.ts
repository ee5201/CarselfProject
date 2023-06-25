import { Module } from '@nestjs/common';
import { CarSizeResolver } from './carSize.resolver';
import { CarSizeService } from './carSize.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarSize } from './entities/carsize.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarSize])],
  providers: [
    CarSizeResolver, //
    CarSizeService,
  ],
})
export class CarSizeMoudle {}
