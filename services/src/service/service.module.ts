import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { ServiceController } from './service.controller';
import { RabbitMQModule } from 'src/rabbitmq.module';

@Module({
  imports:[ TypeOrmModule.forFeature([Service]), RabbitMQModule],
  providers: [ServiceService,
  // {
  //   provide: 'USER_SERVICE',
  //   useClass: RabbitMQModule, // Or useFactory, useValue, etc.
  // },
  // {
  //   provide: 'SERVICE_PROVIDER_SERVICE',
  //   useClass: RabbitMQModule, // Or useFactory, useValue, etc.
  // },
],
  controllers: [ServiceController]
})
export class ServiceModule {}
