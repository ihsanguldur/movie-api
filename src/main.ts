import {logger} from "./utils";

global.env = process.env.env || "development";

import app from "./app";
import {swaggerDocs} from "./utils";
import {AppDataSource} from "./infra";

import Debug from "debug";
import http from "http";
const debug = Debug("typescript-express:server");

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

const server = http.createServer(app);

AppDataSource.initialize()
    .then(() => {
        logger.info("DB Connection has been established successfully.");
        server.listen(port, () => {
            logger.info(`App started on ${env} and listening port ${port}`);

            swaggerDocs(app, port);
        });
    })
    .catch((e: any) => {
        logger.error(e);
    });

server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val: string): string | number | false {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error: any): void {
    logger.error("error", error);
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    switch (error.code) {
    case "EACCES":
        logger.info(bind + " requires elevated privileges");
        process.exit(1);
        break;
    case "EADDRINUSE":
        logger.info(bind + " is already in use");
        process.exit(1);
        break;
    default:
        throw error;
    }
}

function onListening(): void {
    const addr = server.address();
    const bind =
        typeof addr === "string" ? "Pipe " + addr : "Port " + addr?.port;
    debug("Listening on " + bind);
}
