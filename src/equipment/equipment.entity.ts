import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'equipments' })
export class EquipmentEntity {
  @PrimaryGeneratedColumn({ name: 'equipment_id' })
  id: number;

  @Column()
  title: string;
}
