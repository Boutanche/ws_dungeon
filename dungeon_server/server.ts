// Importing modules
import utilisateurRoutes from './/routes/utilisateurRoutes';
let dotenv = require('dotenv');
dotenv.config({ path: 'dev.env' });

// Setting up your port
const PORT: string | number = process.env.PORT || 8080;

// Assigning the variable app to express
const app = require('express')();

// Middleware
app.use(require('body-parser').json());
app.use(require('cookie-parser')());

// Routes for the user API
app.use('/api/utilisateurs', utilisateurRoutes);

// Listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));