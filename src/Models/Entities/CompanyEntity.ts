import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericTable";
import { User } from './UserEntity';

@Entity()
export class Company extends GenericEntity {
    @OneToOne(() => User, { primary: true })
    @JoinColumn({ name: "user_id" })
    public userId: User;

    @Column({ nullable: true, length: 255 })
    public name: string;

    @Column({ nullable: true, length: 255 })
    public description: string;

    @Column({ type: 'datetime', nullable: true, name: 'registration_date' })
    public registrationDate: Date;

    @Column({ default: false })
    public active: boolean;

    public getUserId(): User {
        return this.userId;
    }

    public setUserId(userId: User): void {
        this.userId = userId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getRegistrationDate(): Date {
        return this.registrationDate;
    }

    public setRegistrationDate(registrationDate: Date): void {
        this.registrationDate = registrationDate;
    }

    public isActive(): boolean {
        return this.active;
    }

    public setActive(active: boolean): void {
        this.active = active;
    }

}