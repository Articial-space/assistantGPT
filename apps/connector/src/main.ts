import { APP_FILTER, NestFactory } from '@nestjs/core';
import { ConnectorModule } from './connector.module';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(ConnectorModule);
  const configService = app.get(ConfigService)
  await app.listen(configService.get('HTTP_PORT'))
}
bootstrap();
