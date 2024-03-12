import { NextFunction, Request, Response } from "express";
import RefTypeUtilisateurResource from "../../../resources/RefTypeUtilisateurResource";
import RefTypeUtilisateurRepository from "../../../repositories/RefTypeUtilisateurRepository";

export const listRefTypeUtilisateurs = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const repository = new RefTypeUtilisateurRepository();
        const RefTypeUtilisateurs = RefTypeUtilisateurResource.collection(
            await repository.getAll({
                sortBy: req.query.sort_by,
                filterBy: req.query.filter_by,
            })
        );
        res.status(200).json({ RefTypeUtilisateurs });
    } catch (error: any) {
        next(error);
    }
};

export const getRefTypeUtilisateur = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const repository = new RefTypeUtilisateurRepository();
        const refTypeUtilisateurResource = new RefTypeUtilisateurResource(
            await repository.getById(req.params.id)
        );
        res.status(200).json({ refTypeUtilisateur: refTypeUtilisateurResource.item() });
    } catch (error: any) {
        next(error);
    }
};