import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import UserEntity from './user.entity';

@Entity('filmes_favoritos')
export default class FilmesEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id?: number;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'image', type: 'varchar' })
  image: string;

  @Column({
    name: 'criado_em',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado_em',
    type: 'timestamp',
  })
  updatedAt: Date;
  // Não sei fazer a ligação, ali ta a minha tentativa falha
  // @ManyToOne(() => UserEntity, (user) => user.id)
  // user: UserEntity['id'];
}
