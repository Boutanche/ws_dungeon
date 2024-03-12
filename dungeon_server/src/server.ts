import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./database/connection";
import errorHandler from "./middleware/errorHandler";
import v1 from "./routes/v1";
import RefTypeUtilisateur from "./database/models/RefTypeUtilisateur";

/**
 * Création d'un serveur express
 * @returns {express.Application} - Le serveur express
 */
export const createServer = () => {

    /**
     * Création du serveur express
     */
    const app = express();
    app
        .disable("x-powered-by")
        .use(morgan("dev"))
        .use(express.urlencoded({ extended: true }))
        .use(express.json())
        .use(cors());

    /**
     * Route de santé
     * @param {express.Request} req - La requête
     * @returns {express.Response} - La réponse
     * @returns {express.Request} - La requête
     * @returns {void}
     */
    app.get("/healthz", (req, res) => {
        return res.json({ ok: true, environment: process.env.NODE_ENV });
    });

    app.get("/message/:name", (req, res) => {
        return res.json({ message: `Hello ${req.params.name}` });
    });

    /**
     * Route de la version 1
     */
    app.use("/v1", v1);

    /**
     * Gestion des erreurs
     */
    app.use(errorHandler);
    return app;
};