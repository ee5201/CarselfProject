import { Module } from '@nestjs/common';
import { MbtiResolver } from './mbti.resolver';
import { MbtiService } from './mbti.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MBTIS } from './entities/mbti.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MBTIS])],
  providers: [
    MbtiResolver, //
    MbtiService,
  ],
})
export class MbtiModule {}
