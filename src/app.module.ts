import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';



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
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {
  
}
