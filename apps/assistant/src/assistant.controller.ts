import { Controller, Get } from '@nestjs/common';
import { AssistantService } from './assistant.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MessageDto } from '@app/common';

@Controller()
export class AssistantController {
  constructor(private readonly assistantService: AssistantService) {}
  @MessagePattern('message-send')
  async messageData(@Payload() messageDto: MessageDto) {
    return await this.assistantService.answerResquest(messageDto)
  }
}
