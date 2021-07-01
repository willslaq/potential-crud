import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('developers')
class Developer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  hobby: string;

  @Column('date')
  birthdate: Date;
}

export default Developer;
