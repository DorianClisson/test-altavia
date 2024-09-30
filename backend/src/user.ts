import fs from "fs";
import path from "node:path";

import HttpStatus from "http-status-codes";
import { v4 } from "uuid";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * This is the only allowed error type which should be output from the current file processing.
 */
export class UserError extends Error {
  /**
   * The associated error HTTP status code.
   */
  code: number;

  constructor(message: string, code: number) {
    super(message);
    Object.setPrototypeOf(this, UserError.prototype);
    this.code = code;
  }
}

/**
 * @throws {UserError}
 */
function checkUserEmailWellFormed(email: string): void {
  // TODO: check that the e-mail address is well-formed
}

// This is the persistence of the users
const users: User[] = [];

// The location of the file where the users are persisted
const persistenceFilePath: string = path.join(__dirname, "..", "users.json");
const encoding = "utf8";
const fileOptions: any = { encoding };

export function initializeUsers(): void {
  console.info("Loading the users…");
  users.length = 0;
  const user: any = {
    id: generateUserId(),
    firstName: "John",
    lastName: "Doo",
    email: "john.doo@domain.net",
  };
  users.push(user);
  // TODO: make the users persistent via the file system
}

export function generateUserId(): string {
  return v4();
}

export function getUsers(): User[] {
  return users;
}

export function addUser(user: User): User {
  checkUserEmailWellFormed(user.email);

  users.push(user);
  return user;
}

/**
 * @throws {UserError}
 */
export function findUser(id: string): User {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    throw new UserError(
      `There is not user with id '${id}'`,
      HttpStatus.NOT_FOUND
    );
  }
  return users[index];
}

/**
 * @throws {UserError}
 */
export function updateUser(
  id: string,
  firstName: string,
  lastName: string,
  email: string
): User {
  checkUserEmailWellFormed(email);

  const existingUser: User = findUser(id);
  const index = users.indexOf(existingUser);
  const updatedUser: User = { ...users[index], firstName, lastName, email };

  users[index] = updatedUser;
  return updatedUser;
}

/**
 * @throws {UserError}
 */
export function deleteUser(id: string): void {
  const user: User = findUser(id);
  users.splice(users.indexOf(user), 1);
}
