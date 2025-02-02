import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'levels' })
export class LevelEntity {
  @PrimaryGeneratedColumn({ name: 'level_id' })
  id: number;

  @Column()
  title: string;

  @OneToMany(() => UserEntity, (user) => user.level)
  users: UserEntity[];
}
