import { RMQ_SERVICE } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessageDto } from '@app/common';

@Injectable()
export class ConnectorService {
  constructor(@Inject(RMQ_SERVICE) private readonly RMQservice: ClientProxy) {}

  async sendMessageContent(messageDto: MessageDto) {
    return this.RMQservice.send('message-send', {
      ...messageDto
    })
  }
}
