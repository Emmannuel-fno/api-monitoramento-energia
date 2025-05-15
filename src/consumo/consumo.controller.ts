import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ConsumoService } from './consumo.service';

@Controller('consumo')
export class ConsumoController {
  constructor(private readonly service: ConsumoService) {}

  @Post()
  registrar(@Body() body: any) {
    return this.service.registrar(body);
  }

  @Get('historico')
  historico(
    @Query('usuarioId') usuarioId: string,
    @Query('inicio') inicio: string,
    @Query('fim') fim: string,
  ) {
    return this.service.obterHistorico(usuarioId, inicio, fim);
  }

  @Get('alerta')
  alerta(@Query('usuarioId') usuarioId: string) {
    return this.service.verificarAlerta(usuarioId);
  }
}