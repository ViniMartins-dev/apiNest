import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { Reserva } from './schemas/reserva.schema';

@Controller('reservas')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post()
  create(@Body() reserva: Reserva): Promise<Reserva> {
    return this.reservaService.create(reserva);
  }

  @Get()
  findAll(): Promise<Reserva[]> {
    return this.reservaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Reserva | null> {
    return this.reservaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() reserva: Partial<Reserva>): Promise<Reserva | null> {
    return this.reservaService.update(id, reserva);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Reserva | null> {
    return this.reservaService.delete(id);
  }
}
