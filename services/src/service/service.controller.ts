import {
    Controller,
    Post,
    Body,
    Inject,
    NotFoundException,
    BadRequestException,
    ServiceUnavailableException,
    Param,
    Delete,
    Response,
    HttpCode,
    HttpStatus,
    InternalServerErrorException,
  } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import axios from 'axios';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './service.dto';
import { Service } from './service.entity';

const GET_PRIVIDER = 'getProvider';

@Controller('service')
export class ServiceController {

    constructor(
        private readonly serviceService: ServiceService,
      //  @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
        @Inject('SERVICE_PROVIDER_SERVICE') private readonly providerClient: ClientProxy,
      ) {}

      @Post('/')
      async createService(@Body() createServiceDto: CreateServiceDto) {

        console.log(createServiceDto)
        const { serviceProvider, name, description, price} = createServiceDto;
    
        console.log('-----', serviceProvider, name, description, price);
        let user, provider;
        try {
         provider = await this.providerClient.send(GET_PRIVIDER, { serviceProvider });
        } catch (error) {
          throw new ServiceUnavailableException(
            'Service unavailable, please try again later',
          );
        }
        console.log(provider)
        if (!provider) throw new NotFoundException('Provider not found');
    
        // // const isBookInStock = await this.bookClient
        // //   .send(IS_BOOK_IN_STOCK, { bookId, quantity })
        // //   .toPromise();
        // // if (!isBookInStock)
        // //   throw new BadRequestException('Not enough books in stock');
    
        // const order = await this.orderService.createOrder(createOrderDto);
        // // this.bookClient.emit(DECREASE_STOCK, { bookId, quantity });
  
        const service = await this.serviceService.createService(createServiceDto);

        return true;
      }

     
}
