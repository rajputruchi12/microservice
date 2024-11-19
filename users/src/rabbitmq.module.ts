import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://uzfdjukp:Qj03BGDU5OZVxJ1m_qjH5uH3PBuaPzaV@rattlesnake.rmq.cloudamqp.com/uzfdjukp',
          ],
          queue: 'user_queue',
          queueOptions: { durable: false },
        },
      },
      {
        name: 'SERVICE_PROVIDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://uzfdjukp:Qj03BGDU5OZVxJ1m_qjH5uH3PBuaPzaV@rattlesnake.rmq.cloudamqp.com/uzfdjukp',
          ],
          queue: 'service_provider_queue',
          queueOptions: { durable: false },
        },
      },
      {
        name: 'SERVICE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://uzfdjukp:Qj03BGDU5OZVxJ1m_qjH5uH3PBuaPzaV@rattlesnake.rmq.cloudamqp.com/uzfdjukp',
          ],
          queue: 'service_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  providers:[ClientsModule],
  exports: [ClientsModule],
})
export class RabbitMQModule {}