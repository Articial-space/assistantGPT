import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Payload } from '@nestjs/microservices';
import { MessageDto } from '@app/common';
import OpenAI from 'openai';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AssistantService {
  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}
  private readonly OpenAI = new OpenAI({
    apiKey: this.configService.get('OPENAI_API_KEY')
  })
  async answerResquest(@Payload() messageDto: MessageDto) {
    return messageDto
  }
}
