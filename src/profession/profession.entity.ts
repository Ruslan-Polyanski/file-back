import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'professions' })
export class ProfessionEntity {
  @PrimaryGeneratedColumn({ name: 'profession_id' })
  id: number;

  @Column()
  title: string;

  @OneToMany(() => UserEntity, (user) => user.profession)
  users: UserEntity[];
}
