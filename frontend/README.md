# Front-end

This is the archive of a project which has been designed to assess the skills and the seniority of any front-end JavaScript / TypeScript + React.js developer candidate to join our team. It will be used for an assessment session with the candidate.

## Process

At the very beginning of the assessment session, the candidate will be submitted by e-mail a zip file, which reflects a git repository project. This project hosts a simple React.js web application which displays a list of user entities, written in JavaScript.

The candidate will inflate the archive, open it in their IDE and discover its layout. They will be requested to comment out their discoveries and to explain what they understand. They will be asked to run some scripts, explain them, and then to proceed with some actions, ranging from code authoring to git commands. They will also be asked questions about the actions which should be taken in order to improve and industrialize the application.

## Purpose

We want to measure the ability of the candidate to:
1. understand the project layout, configuration, code logic ;
2. author some code in order to implement some features, with an important focus on the UX. Note that the UI will not be taken much into consideration, hence design very simple user interfaces, without spending time on the style. It is up to the candidate to resort to any external library, provided they are confident that they will spare some time and contribute to better quality ; otherwise, the questions have been designed so that they should not need any extra library ;
3. rely on their IDE to perform some analysis, operate code refactoring tasks and interact with git ;
4. share their thoughts and ideas on how to improve the application so that it meets high-quality standards.

## Pre-requisites

We assume that the candidate:
- will have a decent Internet connection ;
- will have shared an e-mail address, which will be used to send them the project archive ;
- will have a functioning webcam, and a browser working with Google Meet, so that the candidate may share their screen ;
- benefits from his favorite TypeScript / JavaScript IDE, properly configured, along with a running version of Node.js (v20+) and of yarn (v1.22+) ;
- benefits from a modern of working Internet browser equipped with the "DevTools" feature.

## Functionally

The project contains the scaffolding of a web application aimed at displaying and managing user entities.

## Structure

"yarn" is used as a regular package dependency framework (you may use "npm" as a fallback).

The code is written in JavaScript language ; the web services are hosted through the "back-end" web services application. It uses a bunch of simple JavaScript / TypeScript libraries, in order to ease the authoring of the code.

- The web application code is totally located under the `src` folder.
- The static resources are all located under the `public` folder.
- The `package.json` exposes some scripts for building the final bundle application, for starting locally the application.

## Questions

### Scripts

We need the candidate to identify and run subsequently the scripts for:
1. building the project JavaScript bundle ;
2. starting the web application.

### Description

As the candidate discovers the source code of the web application, we expect them to explain the structure of the code and its design: describe and comment what you are discovering, go to the various npm scripts, run and explain their purpose.

### Users list

We want the main page to display the users: modify the `Users.js` file accordingly, while paying attention to the UX.

### Commit the code

As some enhancements have been performed, we want the modifications to be propagated to the git repository: initialize a git repository locally, declare a new branch and commit the code via git, without attempting to "push" it.

### Debugging

We want to put a breakpoint in the `Users` component rendering: prepare your IDE and your browser accordingly and execute that web service via a browser, so that we can run the code step by step from that breakpoint.

### User deletion

We want to provide a feature to delete a user: modify the application accordingly, while paying attention to the UX.

### User declaration

We want to provide a feature to add a user: modify the application accordingly, while paying attention to the UX.

### User edition

We want to provide a feature to modify a user: modify the application accordingly, while paying attention to the UX.

### Hosting

We would like to host that application, so that it becomes available over the Internet: explain what are the various options, their pros and cons. Make a focus about the various options to deploy it.

From your point of view, what are the facets not yet handled which are missing before considering to deploy the application? What are the things that should be taken into account once it will be public.
