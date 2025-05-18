import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Payload } from '@nestjs/microservices';
import { MessageDto } from '@app/common';
import OpenAI from 'openai';

@Injectable()
export class AssistantService {
<<<<<<< HEAD
  constructor(private readonly configService: ConfigService) {}
  private readonly OpenAI = new OpenAI({
    apiKey: this.configService.get('OPENAI_API_KEY')
  })
=======
  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}

>>>>>>> c405b77 (fourth-test)
  async answerResquest(@Payload() messageDto: MessageDto) {
    const response = await this.OpenAI.responses.create({
      model: 'gpt-4.1',
      input: messageDto.content
    })
    return response.output_text
  }
}
