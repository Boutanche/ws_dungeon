import express, { Router } from "express";
import { listRefTypeUtilisateurs, getRefTypeUtilisateur } from "./controller";

const refTypeUtilisateurs: Router = express.Router();

refTypeUtilisateurs.get("/", listRefTypeUtilisateurs);
refTypeUtilisateurs.get("/:id", getRefTypeUtilisateur);

export default refTypeUtilisateurs;