import { Controller, Get } from '@nestjs/common';
import { WhisperService } from './whisper.service';

@Controller()
export class WhisperController {
  constructor(private readonly whisperService: WhisperService) {}

  @Get()
  getHello(): string {
    return this.whisperService.getHello();
  }
}
