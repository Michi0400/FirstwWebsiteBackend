import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

console.log(process.env.NODE_ENV);

const path = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';

dotenv.config({ path });

const port = process.env.PORT || 8080;

console.log(process.env.DB_HOST);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:4200',
    },
  });
  await app.listen(port);
}
bootstrap();
