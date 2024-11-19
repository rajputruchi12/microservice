import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
// import { ServiceProvider } from './service-provider.entity';

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(() => ServiceProvider, (provider) => provider.services)
    // @JoinColumn({ name: 'serviceProviderId' }) // Specify foreign key column
    // serviceProvider: ServiceProvider;

    @Column()
    serviceProvider: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

}