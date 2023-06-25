import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import {
  IFileServiceUpload,
  IFilesServiceUpload,
} from './interface/FilesSerivceupload';
import { rejects } from 'assert';

@Injectable()
export class FilesService {
  // async upload({ file }: IFilesServiceUpload): Promise<string> {
  //   //1. 파일을 클라우드 스토리지에 저장하는 로직
  //   console.log(file);

  //   // 1-1) 스토리지 셋팅하기
  //   const storage = new Storage({
  //     projectId: 'mbti-390711',
  //     keyFilename: 'mbti-390711-fca9dadff954.json',
  //   }).bucket('mbticar-storages');

  //   //1-2 스토리지에 파일 올리기
  //   await new Promise((resolve, reject) => {
  //     file.createReadStream().pipe(
  //       storage
  //         .file(file.filename)
  //         .createWriteStream()
  //         .on('finish', () => {
  //           console.log('성공');
  //           resolve('성공');
  //         })
  //         .on('error', () => {
  //           console.log('실패');
  //           reject('실패');
  //         })
  //     );
  //   });

  //   console.log('파일전송 완료');
  //   return '끝!';
  // }

  async upload({ files }: IFileServiceUpload): Promise<string[]> {
    console.log(files);
    const waitedFiles = await Promise.all(files);
    const bucket = 'mbticar-storages';
    const storage = new Storage({
      projectId: 'mbti-390711',
      keyFilename: 'mbti-390711-fca9dadff954.json',
    }).bucket(bucket);
    const results = await Promise.all(
      waitedFiles.map((el) => {
        return new Promise<string>((resolve, reject) => {
          el.createReadStream()
            .pipe(storage.file(el.filename).createWriteStream())
            .on('finish', () => resolve(`${bucket}/${el.filename}`))
            .on('error', () => reject('실패'));
        });
      })
    );
    return results;
  }
}
