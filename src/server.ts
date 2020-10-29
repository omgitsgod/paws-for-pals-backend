import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./services";
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
const { PORT = 5000 } = process.env;

applyMiddleware(middleware, server);
applyRoutes(routes, server);
applyMiddleware(errorHandlers, server);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
