import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { router } from 'src/routes/routes';
import { APP_PORT, DB_URL } from 'src/config';
import { HttpError } from 'src/helpers/HttpError';

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use((err: Error, req: Request, res: Response, next: Function) => {
  if (err instanceof HttpError) {
    res.status(err.status);
    res.json(err.userMsg());
  } else {
    const unexpectedError = new HttpError(500, 'Unexpected error');
    res.status(unexpectedError.status);
    res.json(unexpectedError.userMsg());
  }
  next();
});

const start = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    app.listen(APP_PORT, function () {
      console.log(`App is listening on port ${APP_PORT}!`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
