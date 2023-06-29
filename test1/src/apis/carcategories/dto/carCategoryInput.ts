import { InputType, PartialType } from '@nestjs/graphql';
import { CarCategory } from '../entities/carcategories.entity';

@InputType()
export class CarCategoryInput extends PartialType(CarCategory, InputType) {}
