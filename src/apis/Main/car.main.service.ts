import { Injectable } from '@nestjs/common';

@Injectable()
export class MainService {
  create(createCarInput) {
    return '등록되었습니다.';
  }
}
