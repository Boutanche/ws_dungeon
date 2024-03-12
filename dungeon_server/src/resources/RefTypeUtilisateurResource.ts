import BaseResource from './BaseResource';
class RefTypeUtilisateurResource extends BaseResource<RefTypeUtilisateurAttributes, RefTypeUtilisateurEntity>() {
    item() {
        const refTypeUtilisateurResource: RefTypeUtilisateurEntity = {
            id: this.instance.id,
            code: this.instance.code,
            libelle: this.instance.libelle,
            description: this.instance.description,
            created_at: this.instance.created_at,
            updated_at: this.instance.updated_at,
        };

        return refTypeUtilisateurResource;
    }
}
export default RefTypeUtilisateurResource;