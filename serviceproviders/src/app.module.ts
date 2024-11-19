import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceProviderModule } from './service-provider/service-provider.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceProvider } from './service-provider/service-provider.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'community',
      entities: [ServiceProvider],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ServiceProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
