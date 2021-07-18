import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat)
    private catModel: typeof Cat,
  ) {}

  async create(cat: CreateCatDto) {
    const newCat = Cat.build(cat);
    await newCat.save();
  }

  findAll(): Promise<Cat[]> {
    return this.catModel.findAll();
  }

  findOne(id: number): Promise<Cat> {
    return this.catModel.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  async remove(id: number): Promise<void> {
    const cat = await this.findOne(id);
    await cat.destroy();
  }
}
