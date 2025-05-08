import { NestFactory } from '@nestjs/core';
import { WhisperModule } from './whisper.module';

async function bootstrap() {
  const app = await NestFactory.create(WhisperModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
