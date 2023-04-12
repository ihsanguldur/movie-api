import express, {NextFunction, Request, Response} from "express";
import morgan from "morgan";
import timeout from "connect-timeout";

const app = express();

app.use(timeout("30s"));
app.use(morgan("dev"));

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    if (!req.timedout) {
        next();
    }
});

export default app;
