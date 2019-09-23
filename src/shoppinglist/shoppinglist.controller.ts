import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ShoppingItem } from './model/shoppingitem.entity';
import { ShoppinglistService } from "./shoppinglist.service";

@Controller('shoppinglist')
export class ShoppinglistController {
    constructor(private readonly shoppingListService: ShoppinglistService) { }

    @Get('/')
    public async getAll() {
        return this.shoppingListService.getAll();
    }

    @Post('/')
    public async create(
        @Body() shoppingItem: ShoppingItem
    ) {
        return this.shoppingListService.create(shoppingItem)
    }

    @Delete('/:id')
    public async delete(@Param('id') id): Promise<any> {
        return this.shoppingListService.delete(id);
    }

    @Put('/:id')
    public async update(@Body() shoppingItem: ShoppingItem, @Param('id') id): Promise<any> {
        return this.shoppingListService.update(id, shoppingItem)
    }
}
