import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'date' })
export class DateEntity {
  @PrimaryGeneratedColumn({ name: 'date_id' })
  id: number;

  @Column({ name: 'date_tag' })
  dateTag: string;

  @Column()
  user_id: number;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column()
  profession: string;

  @Column({ name: 'start_time' })
  startTime: string;

  @Column({ name: 'end_time' })
  endTime: string;

  @Column({ name: 'break_time' })
  breakTime: string;

  @Column()
  company: string;

  @Column()
  equipment: string;

  @Column()
  supervisor: string;
}
