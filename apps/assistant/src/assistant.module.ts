import { Module } from '@nestjs/common';
import { AssistantController } from './assistant.controller';
import { AssistantService } from './assistant.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  HttpModule
],
  controllers: [AssistantController],
  providers: [AssistantService],
})
export class AssistantModule {}
