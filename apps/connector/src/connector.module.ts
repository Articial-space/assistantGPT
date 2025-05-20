import { Module } from '@nestjs/common';
import { ConnectorController } from './connector.controller';
import { ConnectorService } from './connector.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RMQ_SERVICE } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true
  }),
  ClientsModule.registerAsync([{
    name: RMQ_SERVICE,
    useFactory: (configService: ConfigService) => ({
      transport: Transport.RMQ,
      options: {
        urls: [configService.get('RMQ_URI')],
        queue: 'message-queue',
        queueOptions: {
          durable: true
        }
      }
    }) as any,
    inject: [ConfigService]
  }])
],
  controllers: [ConnectorController],
  providers: [ConnectorService],
})
export class ConnectorModule {}
