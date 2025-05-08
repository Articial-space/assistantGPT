import { Test, TestingModule } from '@nestjs/testing';
import { AssistantController } from './assistant.controller';
import { AssistantService } from './assistant.service';

describe('AssistantController', () => {
  let assistantController: AssistantController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AssistantController],
      providers: [AssistantService],
    }).compile();

    assistantController = app.get<AssistantController>(AssistantController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(assistantController.getHello()).toBe('Hello World!');
    });
  });
});
