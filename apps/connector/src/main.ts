import { APP_FILTER, NestFactory } from '@nestjs/core';
import { ConnectorModule } from './connector.module';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(ConnectorModule);
  const configService = app.get(ConfigService)
  console.log(configService.get('RMQ_URI'))
  await app.listen(configService.get('HTTP_PORT'), '0.0.0.0')
}
bootstrap();
