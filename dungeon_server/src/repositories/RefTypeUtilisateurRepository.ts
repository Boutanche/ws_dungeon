import RefTypeUtilisateur from "../database/models/RefTypeUtilisateur";
import BaseRepository from "./BaseRepository";

export default class RefTypeUtilisateurRepository extends BaseRepository<RefTypeUtilisateurEntity> {
    protected allowedSortByFields = [
        "code",
        "libelle",
        "description",
        "created_at",
        "updated_at",
    ];

    protected allowedFilterByFields = [
        "code",
        "libelle",
        "description",
        "created_at",
        "updated_at",

    ];

    constructor() {
        super(RefTypeUtilisateur);
    }

}