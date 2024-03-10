import express from 'express';
import db from './database/models';
import {utilisateurs} from './database/seeders/utilisateurs';
import {refTypeUtilisateurs} from './database/seeders/refTypeUtilisateurs';

const app = express();
const port = process.env.PORT || 8080;

/**
 * Synchroniser les tables avec la base de données
 */
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App entrain d'écouter sur le port : ${port}`);
    });
    /**
     * Créer des utilisateurs
     */
    const createUtilisateurs = () => {
        utilisateurs.forEach(utilisateur => {
            utilisateurs.map(utilisateur => {
                db.Utilisateur.create(utilisateur);
            })
        });
    };
    /**
     * Créer des références de type d'utilisateurs
     */
    const createRefTypeUtilisateurs = () => {
        refTypeUtilisateurs.forEach(refTypeUtilisateur => {
            refTypeUtilisateurs.map(refTypeUtilisateur => {
                db.RefTypeUtilisateur.create(refTypeUtilisateur);
            })
        });
    };

    // Utiliser le seeders pour peupler les tables :
    // createRefTypeUtilisateurs();
    // createUtilisateurs();

    app.get('/refTypeUtilisateurs', (req, res) => {
        db.RefTypeUtilisateur.findAll({
        })
            .then((result: object) => res.json(result))
            .catch((error: object) => console.log(error));
    });
    // Afficher les tables de références :
});
