import { InputType, PartialType } from '@nestjs/graphql';
import { CarMains } from '../entities/main.entity';

@InputType()
export class CreateCarInput extends PartialType(CarMains, InputType) {}
