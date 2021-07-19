import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Meal } from './entities/meal.entity';

@Module({
  imports: [SequelizeModule.forFeature([Meal])],
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
