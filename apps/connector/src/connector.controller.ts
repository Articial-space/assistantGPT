import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConnectorService } from './connector.service';
import { MessageDto } from '../../../libs/common/src/dtos/user-data.dto';

@Controller()
export class ConnectorController {
  constructor(private readonly connectorService: ConnectorService) {}

  @Post()
  async sendMessage(@Body() messageDto: MessageDto) {
    return this.connectorService.sendMessageContent({...messageDto})
  }
}
