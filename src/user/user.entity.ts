import { LevelEntity } from 'src/level/level.entity';
import { ProfessionEntity } from 'src/profession/profession.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  surname_name: string;

  @ManyToOne(() => ProfessionEntity, (profession) => profession.users)
  @JoinColumn({ name: 'profession_id' })
  profession: ProfessionEntity;

  @ManyToOne(() => LevelEntity, (level) => level.users)
  @JoinColumn({ name: 'level_id' })
  level: LevelEntity;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    default:
      'https://optim.tildacdn.com/tild3831-3136-4039-b539-633061393531/-/resize/824x/-/format/webp/main-ph-1.jpg',
  })
  photo: string;
}
