import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FilesService } from './files.service';
import {
  FileUpload,
  GraphQLUpload,
  graphqlUploadExpress,
} from 'graphql-upload';
import { FilesImages } from './entities/filesentity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guard/gql-auth.guard';

@Resolver()
export class FilesResolver {
  constructor(private readonly filesService: FilesService) {}

  // @Mutation(() => String)
  // uploadFile(
  //   @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload // 브라우저에서 파일 받아옴
  // ): Promise<void | string[]> {
  //   return this.filesService.upload({ file: [file] });
  // }

  @Mutation(() => String)
  uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload // 브라우저에서 파일 받아옴
  ): Promise<void | string | unknown> {
    return this.filesService.upload({ file });
  }

  // @Mutation(() => [String])
  // uploadFile(
  //   @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[]
  // ): Promise<string[]> {
  //   return this.filesService.upload({ files });
  // }
}
