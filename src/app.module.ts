import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'
import { FootballController } from './football/football.controller';
import { FootballService } from './football/football.service';


//mysql://root:mysqlpw@localhost:55000;
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 55000,
      username: 'root',
      password: 'mysqlpw',
      database: 'testing',
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      synchronize: true,
    }),
    UsersModule
  ],
  controllers: [AppController, FootballController],
  providers: [AppService, FootballService],
})
export class AppModule {
  
}
