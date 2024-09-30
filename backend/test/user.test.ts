import request from "supertest";
import HttpStatus from "http-status-codes";
import { v4 as uuid } from "uuid";

import { app, stopServer, usersResourcePath } from "../src";
import { initializeUsers } from "../src/user";

describe("User CRUD operations", () => {
  beforeAll(() => {
    initializeUsers();
  });

  afterAll(() => {
    stopServer();
  });

  const generateUniqueEmail = (): string => {
    return `john.doe+${uuid()}@example.com`;
  };

  const generateUser = (): {
    firstName: string;
    lastName: string;
    email: string;
  } => {
    return { firstName: "John", lastName: "Doe", email: generateUniqueEmail() };
  };
  const requestApp = request(app);

  test("Declares a user", async () => {
    const newUser = generateUser();
    const response = await requestApp.post(usersResourcePath).send(newUser);
    const { statusCode, body: respondedUser } = response;
    expect(statusCode).toBe(HttpStatus.OK);
    expect(respondedUser).toHaveProperty("id");
    expect(respondedUser.email).toBe(newUser.email);

    // TODO: better check the "id" property

    // TODO: check the other properties

    // TODO: check the web service body parameters

    // TODO: check with an invalid e-mail

    // TODO: check that adding another user with an existing e-mail is forbidden

    // TODO: assess the "get:id" web service
  });

  // TODO: add the test which retrieves a single user

  test("List all users", async () => {
    const previousUsersCount = (await requestApp.get(usersResourcePath)).body
      .length;
    await requestApp.post(usersResourcePath).send(generateUser());
    const response = await requestApp.get(usersResourcePath);
    const { statusCode, body: respondedUsers } = response;
    expect(statusCode).toBe(HttpStatus.OK);
    expect(respondedUsers.length).toBe(previousUsersCount + 1);

    // TODO: improve the test by iterating the previous routine N times, to check that the number of users increases accordingly
  });

  test("Updates a user", async () => {
    const { body: user } = await requestApp
      .post(usersResourcePath)
      .send(generateUser());
    const suffix = `-${Math.round(Math.random() * 1000)}`;
    const updatedUser = {
      firstName: user.firstName + suffix,
      lastName: user.lastName + suffix,
      email: generateUniqueEmail(),
    };
    const response = await requestApp
      .put(`${usersResourcePath}/${user.id}`)
      .send(updatedUser);
    expect(response.statusCode).toBe(HttpStatus.OK);
    const { body: respondedUser } = response;
    expect(respondedUser.firstName).toBe(updatedUser.firstName);

    // TODO: improve the test surface, by checking additional properties

    // TODO: improve the test by attempting to update a non-existing user

    // TODO: when the "updatedUser.lastName" is not defined, that property will be undefined (same is true for the "lastName" and "email" properties): is it really what we want? How can we make sure that we do not delete existing properties?
  });

  test("Deletes a user", async () => {
    const { body: user } = await requestApp
      .post(usersResourcePath)
      .send(generateUser());
    const response = await requestApp.delete(`${usersResourcePath}/${user.id}`);
    expect(response.statusCode).toBe(HttpStatus.NO_CONTENT);

    // TODO: improve the test by attempting to delete a non-existing user
  });
});
