import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './cat/entities/cat.entity';
import { FoodModule } from './food/food.module';
import { MealModule } from './meal/meal.module';
import { Meal } from './meal/entities/meal.entity';
import { Food } from './food/food.model';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER_NAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      models: [Cat, Meal, Food],
      autoLoadModels: true,
      synchronize: true,
    }),
    CatModule,
    MealModule,
    FoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
