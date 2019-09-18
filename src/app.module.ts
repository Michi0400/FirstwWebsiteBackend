import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { ShoppinglistModule } from './shoppinglist/shoppinglist.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "nest",
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/*.entity.{ts,js}']
  }), QuestionModule, ShoppinglistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
