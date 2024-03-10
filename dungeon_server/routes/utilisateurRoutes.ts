//utilisateur routes

import utilisateurController from '../controllers/utilisateurController';
import utilisateurAuth from '../middlewares/utilisateurAuth';

const { signup, login } = utilisateurController;

let express = require('express');
const router = express.Router();

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', utilisateurAuth.saveUtilisateur, signup);

//login route
router.post('/login', login );

const utilisateurRoutes = router;
export default utilisateurRoutes;