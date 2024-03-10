import { Sequelize } from "sequelize-typescript";
import EnvManager from "../EnvManager";

const sequelize = new Sequelize({
    database: EnvManager.getDbName(),
    dialect: "postgres",
    username: EnvManager.getDbUsername(),
    password: EnvManager.getDbPassword(),
    host: EnvManager.getDbHost(),
    port: EnvManager.getDbPort(),
    models: [__dirname + "/models"],
});

export default sequelize;