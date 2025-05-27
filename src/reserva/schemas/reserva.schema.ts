import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservaDocument = Reserva & Document;

@Schema({ timestamps: true })
export class Reserva {
  @Prop({ required: true })
  nomeCliente: string;

  @Prop({ required: true })
  telefone: string;

  @Prop({ required: true })
  dataEntrada: Date;

  @Prop({ required: true })
  dataSaida: Date;

  @Prop({ required: true })
  numeroQuarto: number;

  @Prop({ default: false })
  pago: boolean;
}

export const ReservaSchema = SchemaFactory.createForClass(Reserva);
