import express, {NextFunction, Request, Response} from "express";
import logger from "morgan";
import timeout from "connect-timeout";

const app = express();

app.use(timeout("30sn"));
app.use(logger("dev"));

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    if (!req.timedout) {
        next();
    }
});

app.use("/", async (req: Request, res: Response) => {
    res.status(200).send("test");
});

export default app;
