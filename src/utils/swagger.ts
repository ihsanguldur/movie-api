import {Express, Request, Response} from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {logger} from "./logger";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MOVIE API Docs",
            version: "1.0.0"
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    //TODO:buraya swagger olusturulacak pageler gelecek
    apis: ["./src/main.ts"]
}

const swagger = swaggerJSDoc(options);

function swaggerDocs(app: Express, port: string | number | false) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger));

    app.get("/docs.json", (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swagger);
    });

    logger.info(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
