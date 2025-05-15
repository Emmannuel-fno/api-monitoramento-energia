import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumoEnergia } from './consumo/consumo-energia.entity';
import { ConsumoService } from './consumo/consumo.service';
import { ConsumoController } from './consumo/consumo.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'energia.db',
      entities: [ConsumoEnergia],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ConsumoEnergia]),
  ],
  controllers: [ConsumoController],
  providers: [ConsumoService],
})
export class AppModule {}