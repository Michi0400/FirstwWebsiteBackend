import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Anlage } from './model/anlage.entity';

@Injectable()
export class AnlageService {

    constructor(@InjectRepository(Anlage) private readonly anlagenRepository: Repository<Anlage>) {
    }

    public async getAll(searchTerm: string) {
        const ss = ["%"];
        for (const s of searchTerm) {
            ss.push(s, "%")
        }
        return this.anlagenRepository.find({
            where: {
                name: Like(ss.join(''))
            }
        })
    }

    public async create() {
        const a = new Anlage();
        a.name = "Gegenstand2";

        this.anlagenRepository.save(a);
    }
}
