import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingItem } from './model/shoppingitem.entity';
import { ShoppinglistController } from './shoppinglist.controller';
import { ShoppinglistService } from './shoppinglist.service';

@Module({
  controllers: [ShoppinglistController],
  providers: [ShoppinglistService],
  imports: [TypeOrmModule.forFeature([ShoppingItem])]
})
export class ShoppinglistModule { }
