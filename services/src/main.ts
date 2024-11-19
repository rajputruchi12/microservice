import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const RABBITMQ_URL = 'amqps://uzfdjukp:Qj03BGDU5OZVxJ1m_qjH5uH3PBuaPzaV@rattlesnake.rmq.cloudamqp.com/uzfdjukp';
  app.enableCors();
  await app.listen(3002);

  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [RABBITMQ_URL],
      queue: 'service_queue',
      queueOptions: { durable: false },
    },
  });

  await microservice.listen();}
bootstrap();
