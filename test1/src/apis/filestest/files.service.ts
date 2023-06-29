import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import {
  IFileServiceUpload,
  IFilesServiceUpload,
} from './interface/FilesSerivceupload';
import { rejects } from 'assert';
import { InjectRepository } from '@nestjs/typeorm';
import { FilesImages } from './entities/filesentity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FilesService {
  async upload({
    file,
  }: IFilesServiceUpload): Promise<void | string | unknown> {
    //1. 파일을 클라우드 스토리지에 저장하는 로직
    // 1-1) 스토리지 셋팅하기

    // 1-1) 스토리지 셋팅하기
    const bucket = 'mbticar-storages';
    const storage = new Storage({
      projectId: 'mbti-390711',
      keyFilename: 'mbti-390711-fca9dadff954.json',
    });

    //1-2 스토리지에 파일 올리기
    const result = await new Promise((resolve, reject) => {
      file.createReadStream().pipe(
        storage
          .bucket(bucket)
          .file(file.filename)
          .createWriteStream()
          .on('finish', () => {
            console.log('성공');
            resolve(`${bucket}/${file.filename}`);
          })
          .on('error', () => {
            console.log('실패');
            reject('실패');
          })
      );
    });

    console.log('파일전송 완료');
    return result;

    // const bucket = 'mbticar-storages';
    // const storage = new Storage({
    //   projectId: 'mbti-390711',
    //   keyFilename: 'mbti-390711-fca9dadff954.json',
    // });
    // const Files = await Promise.all(_file);
    // const result = await Promise.all(
    //   Files.map((file) => {
    //     return new Promise<string>((resolve, reject) => {
    //       let filename: '';
    //       file
    //         .createReadStream()
    //         .pipe(storage.bucket(bucket).file(filename).createWriteStream())
    //         .on('finish', () => resolve(`${bucket}/${filename}`))
    //         .on('error', () => reject('파일 업로드 실패!'));
    //     });
    //   })
    // ).catch((error) => {
    //   console.log(error);
    // });
    // return result;

    //1-2 스토리지에 파일 올리기
  }

  // async upload({ files }: IFileServiceUpload): Promise<string[]> {
  //   console.log(files);
  //   const waitedFiles = await Promise.all(files);
  //   const bucket = 'mbticar-storages';
  //   const storage = new Storage({
  //     projectId: 'mbti-390711',
  //     keyFilename: 'mbti-390711-fca9dadff954.json',
  //   }).bucket(bucket);
  //   const results = await Promise.all(
  //     waitedFiles.map((el) => {
  //       return new Promise<string>((resolve, reject) => {
  //         el.createReadStream()
  //           .pipe(storage.file(el.filename).createWriteStream())
  //           .on('finish', () => resolve(`${bucket}/${el.filename}`))
  //           .on('error', () => reject('실패'));
  //       });
  //     })
  //   );
  //   return results;
  // }
}
