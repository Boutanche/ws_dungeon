import EnvManager from "./EnvManager";
import { createServer } from "./server";

/**
 * Création du serveur
 */
const server = createServer();

/**
 * Récupération du port
 */
const port = EnvManager.getPort(3000);

/**
 * Démarrage du serveur
 */
server.listen(port, () => {
    console.log(`dungeon_server api running on port ${port}`);
});