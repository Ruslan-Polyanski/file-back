import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn({ name: 'equipment_id' })
  id: number;

  @Column()
  title: string;
}
