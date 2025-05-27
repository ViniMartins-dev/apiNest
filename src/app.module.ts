import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservaModule } from './reserva/reserva.module'; // Importe o ReservaModule

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/reservas'), // Conexão com o MongoDB
    ReservaModule, // Garanta que o ReservaModule esteja importado aqui
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
