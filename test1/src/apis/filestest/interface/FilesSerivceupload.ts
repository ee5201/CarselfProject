import { FileUpload } from 'graphql-upload';
import { ReadStream } from 'fs-capacitor';

export interface IFilesServiceUpload {
  file: FileUpload;
}

export interface IFileServiceUpload {
  files: FileUpload[];
}
