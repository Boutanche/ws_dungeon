'use strict';

import {
  Model
} from 'sequelize';

interface UtilisateurAttributes {
    id: string;
    nom: string;
    prenom: string;
    pseudo: string;
    mot_de_passe: string;
    email: string;
    date_naissance: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Utilisateur extends Model<UtilisateurAttributes>
      implements UtilisateurAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    nom!: string;
    prenom!: string;
    pseudo!: string;
    mot_de_passe!: string;
    email!: string;
    date_naissance!: Date;
    static associate(models: any) {
      // define association here
      Utilisateur.hasMany(models.Personnage, {
        foreignKey: 'utilisateurId'
      });
    }
  };
  Utilisateur.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mot_de_passe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true
      }
    },
    date_naissance: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Utilisateur',
  });
  return Utilisateur;
};
