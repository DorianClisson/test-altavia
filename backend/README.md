# Back-end

This is the archive of a project which has been designed to assess the skills and the seniority of any back-end JavaScript / TypeScript + Node.js developer candidate to join our team. It will be used for an assessment session with the candidate.

## Process

At the very beginning of the assessment session, the candidate will be submitted by e-mail a zip file, which reflects a git repository project. This project hosts a simple Node.js application which exposes web services, written in TypeScript, harnessed with some automated tests written with Jest.

The candidate will inflate the archive, open it in their IDE and discover its layout. They will be requested to comment out their discoveries and to explain what they understand. They will be asked to run some scripts, explain them, and then to proceed with some actions, ranging from code modification to git commands. They will also be asked questions about the actions which should be taken in order to improve and industrialize the application.

## Purpose

We want to measure the ability of the candidate to:
1. understand the project layout, configuration, code logic ;
2. author some code in a Test Driven Development (TDD) approach. It is up to the candidate to resort to any external library, provided they are confident that they will spare some time and contribute to better quality ; otherwise, the questions have been designed so that they should not need any extra library ;
3. rely on their IDE to perform some analysis, operate code refactoring tasks and interact with git ;
4. share their thoughts and ideas on how to improve the application so that it meets high-quality standards.

## Pre-requisites

We assume that the candidate:
- will have a decent Internet connection ;
- will have shared an e-mail address, which will be used to send them the project archive ;
- will have a functioning webcam, and a browser working with Google Meet, so that the candidate may share their screen ;
- benefits from his favorite TypeScript / JavaScript IDE, properly configured, along with a running version of Node.js (v20+) and of npm (v10+) ;
- benefits from a modern of working Internet browser equipped with the "DevTools" feature.

## Functionally

The project contains the code of a simple web services application, which exposes some CRUD (Create, Read, Update, Delete) web services endpoints for managing user entities.

## Structure

"npm" is used as a regular package dependency framework (you may use "yarn" as a fallback).

The code is written in TypeScript language ; the web services are hosted through the "Express" library, the  persistence is ensured in memory. It uses a bunch of simple JavaScript / TypeScript libraries, in order to ease the authoring of the code.

- The server code is totally located under the `src` folder.
- The unit tests are all located under the `test` folder.
- The `package.json` exposes some scripts for building the final bundle application (into JavaScript), for starting locally the server, for running the unit tests and for cleaning up the project.
- Some configuration files are defined to drive the TypeScript compilation into JavaScript, to run the tests and to hot-reload the code.

## Questions

### Compilation

We need the candidate to identify and run subsequently the scripts for:
1. building the project JavaScript bundle ;
2. running the unit tests.

### Description

As the candidate discovers the source code of the web services along with its unit tests, we expect them to explain the structure of the code and its design: describe and comment what you are discovering, go to the various npm scripts, run and explain their purpose.

### Tests automatically run

We want the tests to be re-run every time the code is changed, so that we ensure that any modification on the code does not break anything: update the script accordingly.

### Well-formed e-mail checking

We want to make sure that all declared users have a well-formed e-mail address: update the code, so that this is properly checked.

### Debugging

We want to put a breakpoint in one of the user entities list (GET) web services execution: prepare your IDE accordingly and execute that web service via a browser, so that we can run the code step by step from that breakpoint.

### Harness the unit tests

Some unit tests could be more precise and comprehensive in order to test the possible use cases: improve the code accordingly.

### Commit the code

As some enhancements have been performed, we want the modifications to be propagated to the git repository: initialize a git repository locally, declare a new branch and commit the code via git, without attempting to "push" it.

### Complement the unit tests

We want our automated tests to cover as many use cases as possible and our web service as robust as possible: if you think of any additional unit test fixture or assertions, please feel free to augment the unit tests code base and potentially to modify the web services implementation and structure.

### Errors management improvement

Instead of the just relying on the HTTP response "status", we would like to augment error cases with an additional `code` property in the response body JSON content, which provides some additional details about the error, so that any front-end application may provide extra direction to the end-user to understand the root cause of the error: update the code accordingly.

### Persisted users

- We want the user entities to be persisted on the file system: update the code accordingly.
- We want the loading of the persisted users to be asynchronous: update the code accordingly.

### API exposition

On top of using Express as an HTTP server, we want to expose all the contracts of the web service through some specifications: explain what are the options and what standards we could resort to, and what would be the benefits.

### Hosting

We would like to host that application, so that it becomes available over the Internet: explain what are the various options, their pros and cons. Make a focus about the various options to deploy it.

From your point of view, what are the facets not yet handled which are missing before considering to deploy the application? What are the things that should be taken into account once it will be public.

### E-mail uniqueness

We want to make sure that there 2 users do not have the same e-mail address: update the code accordingly.

### Filter users

We want the `users` HTTP GET web service only to return the users with a first name matching a sub-string: update the web service and the test code accordingly.
