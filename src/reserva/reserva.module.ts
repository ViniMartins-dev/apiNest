import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { Reserva, ReservaSchema } from './schemas/reserva.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reserva.name, schema: ReservaSchema }]),
  ],
  controllers: [ReservaController],
  providers: [ReservaService],
})
export class ReservaModule {}

