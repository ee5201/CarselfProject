import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { MBTIS } from '../entities/mbti.entity';

@InputType()
export class CreateMbtiInput extends PartialType(MBTIS, InputType) {}
