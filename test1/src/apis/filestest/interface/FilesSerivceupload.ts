import { FileUpload } from 'graphql-upload';
import { ReadStream } from 'fs-capacitor';
import { FilesInput } from '../dto/createImages';

export interface IFilesServiceUpload {
  file: FileUpload;
}

export interface IFileServiceUpload {
  files: FileUpload[];
}

export interface Fileuploads {
  file: FileUpload;
}
