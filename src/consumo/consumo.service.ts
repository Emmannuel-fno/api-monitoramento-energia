import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { ConsumoEnergia } from './consumo-energia.entity';

@Injectable()
export class ConsumoService {
  constructor(
    @InjectRepository(ConsumoEnergia)
    private readonly repo: Repository<ConsumoEnergia>,
  ) {}

  async registrar(dto: { usuarioId: string; quantidadeKwh: number; dataLeitura: Date }) {
    const registro = this.repo.create(dto);
    return this.repo.save(registro);
  }

  async obterHistorico(usuarioId: string, inicio: string, fim: string) {
    return this.repo.find({
      where: {
        usuarioId,
        dataLeitura: Between(new Date(inicio), new Date(fim)),
      },
      order: { dataLeitura: 'ASC' },
    });
  }

  async verificarAlerta(usuarioId: string) {
    const registros = await this.repo.find({
      where: { usuarioId },
      order: { dataLeitura: 'DESC' },
      take: 2,
    });

    if (registros.length < 2) return false;

    const [ultimo, anterior] = registros;
    return ultimo.quantidadeKwh > anterior.quantidadeKwh;
  }
}