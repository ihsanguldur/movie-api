global.env = process.env.env || "development";

//PINO ILE LOGGER EKLE
import app from "./app";
import Debug from "debug";
import http from "http";
const debug = Debug("typescript-express:server");

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`App started on ${env} and listening port ${port}`);
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
    console.log("error", error);
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    switch (error.code) {
    case "EACCES":
        console.log(bind + " requires elevated privileges");
        process.exit(1);
        break;
    case "EADDRINUSE":
        console.log(bind + " is already in use");
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
