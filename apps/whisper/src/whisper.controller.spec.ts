import { Test, TestingModule } from '@nestjs/testing';
import { WhisperController } from './whisper.controller';
import { WhisperService } from './whisper.service';

describe('WhisperController', () => {
  let whisperController: WhisperController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WhisperController],
      providers: [WhisperService],
    }).compile();

    whisperController = app.get<WhisperController>(WhisperController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(whisperController.getHello()).toBe('Hello World!');
    });
  });
});
