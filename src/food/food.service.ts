import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Food } from './food.model';
import { CreateFoodDto } from './dto/create-food.dto';
import { Meal } from '../meal/entities/meal.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectModel(Food)
    private foodModel: typeof Food,
  ) {}

  async create(createFoodDto: CreateFoodDto) {
    const newFood = Food.build(createFoodDto);
    await newFood.save();
  }

  findAll() {
    return this.foodModel.findAll({
      include: Meal,
    });
  }

  findOne(id: number) {
    return this.foodModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const meal = await this.findOne(id);
    await meal.destroy();
  }
}
