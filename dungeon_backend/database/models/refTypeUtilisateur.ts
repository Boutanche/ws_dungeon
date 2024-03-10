'use strict';

import {
  Model
} from 'sequelize';

interface RefTypeUtilisateurAttributes {
  id: number;
  code: string;
  libelle: string;
  description: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class RefTypeUtilisateur extends Model<RefTypeUtilisateurAttributes>
  implements RefTypeUtilisateurAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    code!: string;
    libelle!: string;
    description!: string;
    static associate(models: any) {
      // define association here
        RefTypeUtilisateur.hasMany(models.Utilisateur, {
            foreignKey: 'refTypeUtilisateurId'
        });
      }
    }
  RefTypeUtilisateur.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
        },
    code: {
      type: DataTypes.STRING,
        allowNull: false,
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'RefTypeUtilisateur',
  });
  return RefTypeUtilisateur;
};