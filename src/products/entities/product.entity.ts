/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public id_category: number;

    @Column()
    public brand: string;

    @Column()
    public name: string;

    @Column()
    public price: number;

    @Column()
    public info: string;

}