'use strict';

import {
  Model
} from 'sequelize';

interface PersonnageAttributes {
  id: number;
  pseudo: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Personnage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Personnage.init({
    pseudo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personnage',
  });
  return Personnage;
};