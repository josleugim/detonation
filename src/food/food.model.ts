import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Food extends Model {
  @Column
  name: {
    type: string;
    allowNull: false;
  };

  @Column
  quantity: number;

  @Column
  mealType: string;

  @Column
  isDetonationActive: {
    type: boolean;
    default: false;
  };
}
