import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FilesService } from './files.service';
import {
  FileUpload,
  GraphQLUpload,
  graphqlUploadExpress,
} from 'graphql-upload';
import { graphql } from 'graphql';

@Resolver()
export class FilesResolver {
  constructor(private readonly filesService: FilesService) {}

  // @Mutation(() => String)
  // uploadFile(
  //   @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload // 브라우저에서 파일 받아옴
  // ): Promise<string> {
  //   return this.filesService.upload({ file });
  // }

  @Mutation(() => [String])
  uploadFile(
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[]
  ): Promise<string[]> {
    return this.filesService.upload({ files });
  }
}
