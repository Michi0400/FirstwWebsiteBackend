import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ShoppingItem } from './model/shoppingitem.entity';

@Injectable()
export class ShoppinglistService {

    constructor(
        @InjectRepository(ShoppingItem)
        private readonly shoppingItemRepository: Repository<ShoppingItem>,
    ) { }

    public async getAll() {
        return this.shoppingItemRepository.find();
    }

    public async create(shoppingItem: ShoppingItem) {
        const q = new ShoppingItem();
        q.name = shoppingItem.name;
        return this.shoppingItemRepository.save(q);
    }

    public async delete(id): Promise<DeleteResult> {
        return await this.shoppingItemRepository.delete(id);
    }

    public async update(id: string, shoppingItem: ShoppingItem): Promise<UpdateResult> {
        return await this.shoppingItemRepository.update(id, shoppingItem);
    }
}
