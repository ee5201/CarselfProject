import { Module } from '@nestjs/common';
import { MainResolver } from './car.main.resolver';
import { MainService } from './car.main.service';

@Module({
  imports: [],
  providers: [
    MainResolver, //
    MainService,
  ],
})
export class MainMoudle {}
