import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceProvider } from './service-provider.entity';

@Injectable()
export class ServiceProviderService {

    constructor(
        @InjectRepository(ServiceProvider)
        private readonly serviceProviderRepository: Repository<ServiceProvider>,
      ) {}
    
    async getProvider(providerId: any): Promise<ServiceProvider> {
        const serviceProvider = await this.serviceProviderRepository.findOne({ where: { id: providerId } });
        return serviceProvider;
      }
}
