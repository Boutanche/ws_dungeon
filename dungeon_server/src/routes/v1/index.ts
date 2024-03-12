import express, { Router } from "express";
import travels from "./travels";
import tours from "./tours";
import refTypeUtilisateurs from "./refTypeUtilisateurs";

const v1: Router = express.Router();

v1.use("/travels", travels);
v1.use("/tours", tours);
v1.use("/refTypeUtilisateurs", refTypeUtilisateurs);

export default v1;