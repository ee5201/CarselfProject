import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import {
  Fileuploads,
  IFilesServiceUpload,
} from './interface/FilesSerivceupload';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { FilesImages } from '../filestest/entities/filesentity.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FilesImages)
    private readonly fileImageRepository: Repository<FilesImages>
  ) {}

  async upload({ file }): Promise<FilesImages> {
    const bucket = 'mbticar-storages';
    const storage = new Storage({
      projectId: 'mbti-390711',
      keyFilename: 'mbti-390711-fca9dadff954.json',
    });

    const newFile = new FilesImages();
    newFile.id = uuid(); // 새로운 UUID 생성
    newFile.url = `${bucket}/${file.filename}`;

    const result = await new Promise<string | unknown>((resolve, reject) => {
      file.createReadStream().pipe(
        storage
          .bucket(bucket)
          .file(file.filename)
          .createWriteStream()
          .on('finish', async () => {
            console.log('성공');

            try {
              await this.fileImageRepository.save(newFile); // 엔티티 저장
              resolve('성공');
            } catch (error) {
              console.error('DB 저장 실패:', error);
              reject('DB 저장 실패');
            }
          })
          .on('error', (error) => {
            console.log('실패');
            console.error('파일 업로드 실패:', error);
            reject('파일 업로드 실패');
          })
      );
    });

    console.log('파일 전송 완료');
    return newFile;
  }
}
