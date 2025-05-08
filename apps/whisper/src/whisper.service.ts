import { Injectable } from '@nestjs/common';

@Injectable()
export class WhisperService {
  getHello(): string {
    return 'Hello World!';
  }
}
