import { Controller, Get, Post, Query } from '@nestjs/common';
import { AnlageService } from './anlage.service';

@Controller('anlage')
export class AnlageController {

    constructor(private readonly anlagenService: AnlageService) {
    }

    @Get('/')
    public async getAll(
        @Query('q') q: string
    ) {
        return this.anlagenService.getAll(q);
    }

    @Post('/')
    public async create() {
        this.anlagenService.create()
    }
}
