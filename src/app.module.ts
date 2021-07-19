import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './cat/entities/cat.entity';
import { FoodModule } from './food/food.module';
import { MealModule } from './meal/meal.module';
import { Meal } from './meal/entities/meal.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: 'detonation_dev',
      models: [Cat, Meal],
    }),
    CatModule,
    MealModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
