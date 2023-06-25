import { InputType, PartialType, extend } from '@nestjs/graphql';
import { CarSize } from '../entities/carsize.entity';

@InputType()
export class CarSizeInput extends PartialType(CarSize, InputType) {}
