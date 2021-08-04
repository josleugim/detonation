import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table
} from "sequelize-typescript";
import { Meal } from '../meal/entities/meal.entity';

@Table
export class Food extends Model {
  @Column({ type: DataType.STRING })
  name: {
    type: string;
    allowNull: false;
  };

  @Column
  quantity: number;

  @Column({ type: DataType.BOOLEAN })
  isDetonationActive: {
    type: boolean;
    default: false;
  };

  @ForeignKey(() => Meal)
  @Column
  mealId: number;

  @BelongsTo(() => Meal)
  meal: Meal;
}
