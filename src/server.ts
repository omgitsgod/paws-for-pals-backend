import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import { port, production } from "./config";
import routes from "./routes";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

const server = express();
if (production) server.set('trust proxy', 1);

server.disable('x-powered-by');
applyMiddleware(middleware, server);
applyRoutes(routes, server);
applyMiddleware(errorHandlers, server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
