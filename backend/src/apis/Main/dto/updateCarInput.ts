import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCarInput } from './createCarInput';

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput) {}
