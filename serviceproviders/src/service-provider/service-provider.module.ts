import { Module } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { ServiceProviderController } from './service-provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceProvider } from './service-provider.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([ServiceProvider]),],
  providers: [ServiceProviderService],
  controllers: [ServiceProviderController]
})
export class ServiceProviderModule {}
