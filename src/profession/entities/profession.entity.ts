import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profession {
  @PrimaryGeneratedColumn({ name: 'profession_id' })
  id: number;

  @Column()
  title: string;

  @OneToMany(() => User, (user) => user.profession, { onDelete: 'CASCADE' })
  users: User[];
}
