import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { Food } from '../../food/food.model';

@Table
export class Meal extends Model {
  @Column({ type: DataType.STRING })
  name: {
    type: string;
    allowNull: false;
  };

  @Column
  language: string;

  @Column({ type: DataType.DATE })
  createdAt: string;

  @Column({ type: DataType.DATE })
  updatedAt: string;

  @Column({ type: DataType.BOOLEAN })
  isActive: {
    type: boolean;
    default: true;
  };

  @HasMany(() => Food)
  foods: Food[];
}
