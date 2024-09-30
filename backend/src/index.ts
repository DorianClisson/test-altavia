import { env } from "process";
import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "express-async-errors";
import HttpStatus from "http-status-codes";

import {
  User,
  UserError,
  getUsers,
  findUser,
  updateUser,
  addUser,
  deleteUser,
  generateUserId,
  initializeUsers,
} from "./user";

const usersResourceName = "users";
export const usersResourcePath = `/${usersResourceName}`;

/**
 * Sends an HTTP response with the provided details, in JSON format.
 *
 * @param response {Response}
 * @param statusCode {Number}
 * @param message {string}
 */
function respondError(
  response: Response,
  statusCode: number,
  message: string
): void {
  response.status(statusCode).send({ message });
}

function main(): { app: Express; stopServer: () => void } {
  const app = express();
  const port = env.PORT_NUMBER || 3000;

  // We support the Cross-Origin Resource Sharing (CORS) feature
  app.use(cors<Request>());

  app.use(express.json());
  // We disable the "etag" generation
  app.disable("etag");
  // We increase the default limit of the HTTP body to 512 kb.
  app.use(bodyParser.text({ limit: 512 * 1024 }));

  const usersPlusIdResourcePath = `${usersResourcePath}/:id`;

  // Lists all users
  app.get(usersResourcePath, async (request, response) => {
    const users: User[] = getUsers();
    response.send(users);
  });

  // Gets a specific user
  app.get(usersPlusIdResourcePath, async (request, response) => {
    const { id } = request.params;

    // TODO: check the "id" parameter

    const user: User = findUser(id);

    response.send(user);
  });

  // Declares a user
  app.post(usersResourcePath, async (request, response) => {
    const { firstName, lastName, email } = request.body;

    // TODO: check the "body" and the "firstName" and "lastName" parameters

    if (email === undefined) {
      throw new UserError(
        "Missing the 'e-mail' body parameter",
        HttpStatus.BAD_REQUEST
      );
    }

    // TODO: check the uniqueness of the e-mail
    const user: User = addUser({
      id: generateUserId(),
      firstName,
      lastName,
      email,
    });

    response.send(user);
  });

  // Updates a user
  app.put(usersPlusIdResourcePath, async (request, response) => {
    const { id } = request.params;
    const { firstName, lastName, email } = request.body;

    // TODO: check the "id" parameter
    // TODO: check the uniqueness of the e-mail
    const user: User = updateUser(id, firstName, lastName, email);

    response.send(user);
  });

  // Deletes a user
  app.delete(usersPlusIdResourcePath, async (request, response) => {
    const { id } = request.params;

    // TODO: check the "id" parameter
    deleteUser(id);

    response.status(HttpStatus.NO_CONTENT).send();
  });

  // This is the default web service
  app.use((request: Request, response: Response) => {
    respondError(
      response,
      HttpStatus.NOT_IMPLEMENTED,
      `Inexistent web service with URL '${request.url}' and base URL '${request.baseUrl}'`
    );
  });

  // This is a generic error handler
  // noinspection JSUnusedLocalSymbols
  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      if (error instanceof UserError) {
        const userError: UserError = error;
        return respondError(response, userError.code, userError.message);
      }
      respondError(
        response,
        HttpStatus.INTERNAL_SERVER_ERROR,
        error.message || "An internal error occurred"
      );
    }
  );

  const server: any = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

  function stopServer() {
    server.close();
  }

  // We initialize the persistence
  initializeUsers();

  return { app, stopServer };
}

const { app, stopServer } = main();

export { app, stopServer };
