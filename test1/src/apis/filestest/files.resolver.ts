import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FilesService } from './files.service';
import {
  FileUpload,
  GraphQLUpload,
  graphqlUploadExpress,
} from 'graphql-upload';
import { FilesImages } from './entities/filesentity.entity';
import { Fileuploads } from './interface/FilesSerivceupload';
import { FilesInput } from './dto/createImages';

@Resolver()
export class FilesResolver {
  constructor(private readonly filesService: FilesService) {}

  @Mutation(() => FilesImages)
  uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload
  ): Promise<FilesImages> {
    return this.filesService.upload({
      file,
    });
  }
}
