import { NestFactory } from '@nestjs/core';
import { AssistantModule } from './assistant.module';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AssistantModule);
  const configService = app.get(ConfigService)
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      url: configService.get('RMQ_URI'),
      queue: 'message-queue',
      queueOptions: {
        durable: true
      }
    }
  })
}
bootstrap();
