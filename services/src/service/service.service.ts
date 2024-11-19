import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';
import { CreateServiceDto } from './service.dto';


@Injectable()
export class ServiceService {

    constructor(
        @InjectRepository(Service)
        private readonly serviceRepository: Repository<Service>,
      ) {}

      async createService(createServiceDto: CreateServiceDto) {
        const { serviceProvider, name, description, price } = createServiceDto;
    
        console.log('ppppp')
        // const order = createServiceDto.id
        //   ? this.serviceRepository.create({
        //       id: Number(createServiceDto.id),
        //       serviceProvider, name, description, price
        //     })
        //   : this.serviceRepository.create({
        //     serviceProvider, name, description, price
        //     });
    
        // await this.serviceRepository.save(order);
    
        // return order;
      }

      async getService(serviceId: any): Promise<Service> {
        const service = await this.serviceRepository.findOne({
          where: { id: serviceId },
        });
        if (!service) {
          throw new NotFoundException('Service not found');
        }
        return service;
      }

}
