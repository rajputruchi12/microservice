import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { ServiceProvider } from '../../service-provider-service/src/service-provider.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    passwordHash: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    // @OneToMany(() => ServiceProvider, (serviceProvider) => serviceProvider.user)
    // serviceProviders: ServiceProvider[];

}