/* eslint-disable prettier/prettier */
import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public id_category: number;

    @ManyToOne(() => Category)
    @JoinColumn({name:'id_category'})
    category: Category;

    @Column()
    public brand: string;

    @Column()
    public name: string;

    @Column()
    public price: number;

    @Column()
    public info: string;

    @Column({ nullable: true })
    public image: string;

}