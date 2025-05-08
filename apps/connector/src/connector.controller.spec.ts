import { Test, TestingModule } from '@nestjs/testing';
import { ConnectorController } from './connector.controller';
import { ConnectorService } from './connector.service';

describe('ConnectorController', () => {
  let connectorController: ConnectorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConnectorController],
      providers: [ConnectorService],
    }).compile();

    connectorController = app.get<ConnectorController>(ConnectorController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(connectorController.getHello()).toBe('Hello World!');
    });
  });
});
