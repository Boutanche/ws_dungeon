// Importing modules
import { Sequelize, DataTypes } from 'sequelize';

let dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const sequelize = new Sequelize(`postgres://${user}:${password}@localhost:5432/dungeonary`, {
    dialect: "postgres"});

// Database connection with dialect of postgres specifying the database we are using
// port for my database is 5432
// database name is dungeonary

// Checking if connection is done
sequelize.authenticate().then(() => {
    console.log('Database connected');
    console.log(sequelize.databaseVersion());
    console.log(`Database connected to dungeonary`);
}).catch((err) => {
    console.log(err);
    return err;
});

sequelize.sync().then(() => {
    console.log('Table created');
});

const db: { [key: string]: any } = {};
db.sequelize = sequelize;
// Connecting to model


// Exporting the module
export default {db, utilisateur: require('./utilisateur')(sequelize, DataTypes)
};