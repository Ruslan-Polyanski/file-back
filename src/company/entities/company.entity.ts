import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn({ name: 'company_id' })
  id: number;

  @Column()
  title: string;
}
