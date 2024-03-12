import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
} from 'sequelize-typescript';

/**
 * Model pour RefTypeUtilisateur
 * Référence des types d'utilisateurs
 * @author BBE
 */
@Table({
    tableName: 'refTypeUtilisateur',
    timestamps: true,
    modelName: 'RefTypeUtilisateur',
})
class RefTypeUtilisateur extends Model<RefTypeUtilisateurAttributes> {

    /**
     * Identifiant de la référence du type d'utilisateur
     */
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    /**
     * Code du type d'utilisateur
     */
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare code: string;

    /**
     * Libellé du type d'utilisateur
     */
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare libelle: string;

    /**
     * Description du type d'utilisateur
     */
    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    declare description: string;

    /**
     * Date de création de la référence du type d'utilisateur
     */
    @CreatedAt
    declare createdAt: Date;

    /**
     * Date de mise à jour de la référence du type d'utilisateur
     */
    @UpdatedAt
    declare updatedAt: Date;
}

/**
 * Export du modèle RefTypeUtilisateur
 */
export default RefTypeUtilisateur;
