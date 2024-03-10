//importing modules
import {Request, Response, NextFunction} from "express";

const express = require("express");
const db = require("../Models");
//Assigning db.users to User variable
const Utilisateur = db.utilisateur;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
const saveUtilisateur = async (req: Request, res: Response, next: NextFunction) => {
    //search the database to see if user exist
    try {
        const pseudo = await Utilisateur.findOne({
            where: {
                pseudo: req.body.pseudo,
            },
        });
        //if username exist in the database respond with a status of 409
        if (pseudo) {
            return res.json(409).send("Le pseudo existe déjà");
        }
        //checking if email already exist
        const emailcheck = await Utilisateur.findOne({
            where: {
                email: req.body.email,
            },
        });
        //if email exist in the database respond with a status of 409
        if (emailcheck) {
            return res.json(409).send("Authentication failed");
        }
        next();
    } catch (error) {
        console.log(error);
    }
    console.log("user does not exist");
};

//exporting module
/**
 * @export saveUtilisateur
 * @description saveUtilisateur checks if the username or email already exist in the database
 */
export default {
    saveUtilisateur,
};