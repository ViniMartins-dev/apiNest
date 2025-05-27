import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reserva, ReservaDocument } from './schemas/reserva.schema';

@Injectable()
export class ReservaService {
  constructor(@InjectModel(Reserva.name) private reservaModel: Model<ReservaDocument>) {}

  async create(reserva: Reserva): Promise<Reserva> {
    const createdReserva = new this.reservaModel(reserva);
    return createdReserva.save();
  }

  async findAll(): Promise<Reserva[]> {
    return this.reservaModel.find().exec();
  }

  async findOne(id: string): Promise<Reserva | null> {
    return this.reservaModel.findById(id).exec();
  }
  
  async update(id: string, reserva: Partial<Reserva>): Promise<Reserva | null> {
    return this.reservaModel.findByIdAndUpdate(id, reserva, { new: true }).exec();
  }
  
  async delete(id: string): Promise<Reserva | null> {
    return this.reservaModel.findByIdAndDelete(id).exec();
  }
}
