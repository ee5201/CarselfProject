import { InputType, PartialType } from '@nestjs/graphql';
import { CarBrand } from '../entities/carbrand.entity';

@InputType()
export class CarBrandInput extends PartialType(CarBrand, InputType) {}
