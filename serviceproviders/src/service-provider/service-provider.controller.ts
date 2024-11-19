import { Controller } from '@nestjs/common';

import {
    ClientProxy,
    Payload,
    MessagePattern,
    EventPattern,
  } from '@nestjs/microservices';
import { ServiceProviderService } from './service-provider.service';

const GET_PRIVIDER = 'getProvider';

@Controller('service-provider')
export class ServiceProviderController {

    constructor(
        private readonly serviceProviderService: ServiceProviderService
      ) {}

      @MessagePattern(GET_PRIVIDER)
      async handleGetProvider(@Payload() data: { providerId: string }) {
        console.log('rrrrrrrrrrrrr')
        const { providerId } = data;
        return await this.serviceProviderService.getProvider(providerId);
      }
}
