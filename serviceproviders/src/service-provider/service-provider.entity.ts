import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
// import { User } from '../../user-service/src/user.entity';
// import { Service } from './service.entity';

@Entity()
export class ServiceProvider {
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(() => User, (user) => user.serviceProviders)
    // user: User;

    @Column()
    user: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    address: string;

    // @OneToMany(() => Service, (service) => service.serviceProvider)
    // services: Service[];
}