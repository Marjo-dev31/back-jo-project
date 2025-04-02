import { IsEmail, Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  username: string;

  @Column()
  @Min(12)
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column()
  privateKey: string;
}
