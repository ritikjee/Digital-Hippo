import express, { Express, Request, Response } from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";

const app: Express = express();
const port = process.env.PORT || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: () => {
        console.log("Payload is ready!");
      },
    },
  });

  app.use((req: Request, res: Response) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    console.log(`> Ready on http://localhost:${port}`);
  });

  app.listen(port, () => {
    console.log(
      `Express is now listening for incoming connections on port ${port}`
    );
  });
};

start();
