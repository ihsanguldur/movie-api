// eslint-disable-next-line node/no-extraneous-import
import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "config";

import * as fs from "fs";
import path from "path";

function getEntities(): any[] {
    const entities: any[] = [];
    //const basename = path.basename(__filename);
    const baseDir = `${__dirname}/../../domain/entities`;
    fs
        .readdirSync(baseDir)
        .filter(file => {
            return (
                file.indexOf(".") !== 0 &&
                (file !== "index.ts" && file !== "Base.ts" && file !== "Base.js") &&
                (file.slice(-3) === ".ts" || file.slice(-3) === ".js") &&
                (file.indexOf(".test.ts") === -1 || file.indexOf(".test.js") === -1)
            );
        })
        .forEach(file => {
            const entity = require(path.join(baseDir, file));
            entities.push(entity[Object.keys(entity)[0]]);
        });
    return entities;
}

function getMigrations(): any[] {
    const migrations: any[] = [];

    fs
        .readdirSync(path.join(__dirname, "/migrations"))
        .filter(file => {
            return (
                file.indexOf(".") !== 0 &&
                (file.slice(-3) === ".ts" || file.slice(-3) === ".js") &&
                (file.indexOf(".test.ts") === -1 || file.indexOf(".test.js") === -1)
            );
        })
        .forEach(file => {
            const migration = require(path.join(__dirname,"/migrations", file));
            migrations.push(migration[Object.keys(migration)[0]]);
        });
    return migrations;
}

const AppDataSource = new DataSource({
    type: config.get<"postgres">("database.dialect"),
    host: config.get<string>("database.host"),
    port: config.get<number>("database.port"),
    username: config.get<string>("database.username"),
    password: config.get<string>("database.password"),
    database: config.get<string>("database.database"),
    logging: env === "development",
    entities: getEntities(),
    migrations: getMigrations(),
    migrationsRun: true,
});

export default AppDataSource;
