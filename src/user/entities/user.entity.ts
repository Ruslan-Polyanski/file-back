import { Profession } from 'src/profession/entities/profession.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  surname_name: string;

  @Column()
  date_birthday: string;

  @ManyToOne(() => Profession, (profession) => profession.users, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'profession_id' })
  profession: Profession;

  @Column()
  role: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
