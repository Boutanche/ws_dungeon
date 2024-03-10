import {v4 as uuidv4} from 'uuid';

export const utilisateurs = [
    {
        id: uuidv4(),
        pseudo: 'admin',
        nom: 'administrateur',
        prenom: 'administrateur',
        mot_de_passe: 'admin',
        email: 'admin@admin.test',
        date_naissance: new Date(),
        refTypeUtilisateurId: 1
    },
    {
        id: uuidv4(),
        pseudo: 'membr',
        nom: 'membre',
        prenom: 'membre',
        mot_de_passe: 'membr',
        email: 'membre@membre.test',
        date_naissance: new Date(),
        refTypeUtilisateurId: 6

    }
];