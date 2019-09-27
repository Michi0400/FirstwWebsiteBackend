import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AngabeModule } from './angabe/angabe.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RezeptModule } from './question/rezept.module';
import { ShoppinglistModule } from './shoppinglist/shoppinglist.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'nest',
      synchronize: true,
      logging: true,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      migrations: [__dirname + "/migrations/*.{ts,js}"]
    }),
    RezeptModule,
    ShoppinglistModule,
    AngabeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
