import { Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Reserva, ReservaDocument } from './schemas/reserva.schema';

@Injectable()
export class ReservaService {
  constructor(@InjectModel(Reserva.name) private reservaModel: Model<ReservaDocument>) {}

  async create(reserva: Reserva): Promise<Reserva> {
    try { // Obs.: para tratar erros do validation fazer o tratamento no pipe do validation (DTO)
      const createdReserva = new this.reservaModel(reserva);
      const savedReserva = await createdReserva.save();

      return savedReserva;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar reserva');
    }
  }

  async findAll(): Promise<Reserva[]> {
    const reservas = await this.reservaModel.find().exec();

    if (!reservas) {
      throw new NotFoundException('Não foram encontradas nenhuma reserva na base de dados');
    }

    return reservas;
  }

  async findOne(id: string): Promise<Reserva | null> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('ID inválido');
    }

    const reserva = await this.reservaModel.findById(id).exec();

    if (!reserva) {
      throw new NotFoundException('Reserva não encontrada!');
    }

    return reserva;
  }
  
  async update(id: string, reserva: Partial<Reserva>): Promise<Reserva | null> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('ID inválido');
    }

    const updated = await this.reservaModel.findByIdAndUpdate(id, reserva, { new: true }).exec();

    if (!updated) {
      throw new NotFoundException('Reserva não encontrada!');
    }

    return this.reservaModel.findById(id).exec();
  }
  
  async delete(id: string): Promise<Reserva | null> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('ID inválido');
    }

    const deleted = await this.reservaModel.findByIdAndDelete(id).exec();

    if (!deleted) {
      throw new NotFoundException('Reserva não encontrada!');
    }

    return deleted;
  }
}
