import { Module } from '@nestjs/common';
import { WhisperController } from './whisper.controller';
import { WhisperService } from './whisper.service';

@Module({
  imports: [],
  controllers: [WhisperController],
  providers: [WhisperService],
})
export class WhisperModule {}
