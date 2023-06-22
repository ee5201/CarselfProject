import { Module } from '@nestjs/common';
import { MainResolver } from './car.main.resolver';
import { MainService } from './car.main.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarMains } from './entities/main.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarMains])],
  providers: [
    MainResolver, //
    MainService,
  ],
})
export class MainMoudle {}
