//importing modules
import db from "../models";
import { Request, Response } from 'express';

const secretKey: string = process.env.JWT_SECRET as string;

// Assigning users to the variable User
const Utilisateur = db.utilisateur;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nom, prenom, pseudo, mot_de_passe, email, date_de_naissance  } = req.body;
        let bcrypt = require('bcryptjs');
        const data = {
            nom,
            prenom,
            pseudo,
            mot_de_passe: await bcrypt.hash(mot_de_passe, 10),
            email,
            date_de_naissance,
        };
        //saving the user
        const utilisateur = await Utilisateur.create(data);

        //if user details is captured
        //generate token with the user's id and the secretKey in the env file
        // set cookie with the token generated
        if (utilisateur) {
            let jwt = require('jsonwebtoken');
            let token = jwt.sign({ id: utilisateur.id }, secretKey, {
                expiresIn: 24 * 60 * 60 * 1000,
            });

            res.cookie("jwt", token, { maxAge: 24 * 60 * 60, httpOnly: true });
            console.log("user", JSON.stringify(utilisateur, null, 2));
            console.log(token);
            //send users details
            return res.status(201).send(utilisateur);
        } else {
            return res.status(409).send("Les détails de l'utilisateur n'ont pas été capturés");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erreur serveur");
    }
};
const login = async (req: Request, res: Response): Promise<Response> => {
    try {

        const { email, mot_de_passe } = req.body;

        //find a user by their email
        const user = await Utilisateur.findOne({
            where: {
                email: email
            }

        });

        //if user email is found, compare password with bcrypt
        if (user) {
            let bcrypt = require('bcryptjs');
            const isSame = await bcrypt.compare(mot_de_passe, user.mot_de_passe);

            //if password is the same
            //generate token with the user's id and the secretKey in the env file

            if (isSame) {
                let jwt = require('jsonwebtoken');
                let token = jwt.sign({ id: user.id }, secretKey, {
                    expiresIn: 24 * 60 * 60 * 1000,
                });

                //if password matches wit the one in the database
                //go ahead and generate a cookie for the user
                res.cookie("jwt", token, { maxAge: 24 * 60 * 60, httpOnly: true });
                console.log("user", JSON.stringify(user, null, 2));
                console.log(token);
                //send user data
                return res.status(201).send(user);
            } else {
                return res.status(401).send("Authentication failed");
            }
        } else {
            return res.status(401).send("Authentication failed");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erreur serveur");
    }
};

export default {
    signup,
    login,
};