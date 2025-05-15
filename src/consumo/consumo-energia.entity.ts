import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ConsumoEnergia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuarioId: string;

  @Column('float')
  quantidadeKwh: number;

  @Column()
  dataLeitura: Date;
}