import { InputType, PartialType } from '@nestjs/graphql';
import { FilesImages } from '../entities/filesentity';
@InputType()
export class FilesInput extends PartialType(FilesImages, InputType) {}
