// utilisateurModel.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface UtilisateurInstance extends Model {
    id: number;
    nom: string;
    prenom: string;
    pseudo: string;
    mot_de_passe: string;
    email: string;
    date_de_naissance: Date;
}

