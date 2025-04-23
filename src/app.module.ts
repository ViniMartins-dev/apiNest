import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
@Module({
imports: [
TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: '', // ou '123', dependendo do seu XAMPP
database: 'meu_banco',
entities: [Usuario],
synchronize: true, // em produção, mude para false
}),
UsuarioModule,
],
})
export class AppModule {}