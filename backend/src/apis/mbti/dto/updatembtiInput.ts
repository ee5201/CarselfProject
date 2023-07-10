import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCarInput } from '../../Main/dto/createCarInput';
import { CreateMbtiInput } from './creatembtiinput';

@InputType()
export class UpdateMBTIInput extends PartialType(CreateMbtiInput) {}
