import { Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Meal } from './entities/meal.entity';

@Injectable()
export class MealService {
  constructor(
    @InjectModel(Meal)
    private mealModel: typeof Meal,
  ) {}

  async create(createMealDto: CreateMealDto) {
    const newMeal = Meal.build(createMealDto);
    await newMeal.save();
  }

  findAll() {
    return this.mealModel.findAll();
  }

  findOne(id: number) {
    return this.mealModel.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  async remove(id: number) {
    const meal = await this.findOne(id);
    await meal.destroy();
  }
}
