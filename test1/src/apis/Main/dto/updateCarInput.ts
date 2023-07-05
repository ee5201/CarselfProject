import { InputType, PartialType } from '@nestjs/graphql';
import { CarMains } from '../entities/main.entity';
import { CreateCarInput } from './createCarInput';

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput, InputType) {}
