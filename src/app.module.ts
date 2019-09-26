import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AngabeModule } from './angabe/angabe.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionContentModule } from './question/question-content/questionContent.module';
import { QuestionModule } from './question/question.module';
import { ShoppinglistModule } from './shoppinglist/shoppinglist.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'nest',
      synchronize: false,
      logging: true,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      migrations: [__dirname + "/migrations/*.{ts,js}"]
    }),
    QuestionModule,
    ShoppinglistModule,
    QuestionContentModule,
    AngabeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
