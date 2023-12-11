---
sidebar_position: 12
---

# Command-line Interface - CLI

bohr.io CLI is a command-line tool that allows you to publish your website to production with a single command, making it a great way to save time and effort when deploying your site.

Additionally, the bohr.io CLI enables you to run a local development server for testing your code and plugins locally before deploying them to production. This local environment can be shared with others to get feedback on your work before deploying it to production.

The following sections will explain the use of bohr.io CLI for everyday tasks.

## Login

To use the bohr.io CLI, you must log in using the bohr.io login command. This command will open a tab in your default browser for authentication with GitHub.

## Installation

To install the bohr.io CLI, be sure you have Node.js version 16.0.0 or later installed. Then, run this command in any directory of your terminal:

```npm install bohr```

To install the bohr.io CLI globally, you can run the following command:

```npm install bohr -g```

## Deploy

To publish a bohr.io project from the source code, you can use the ```bohr deploy``` command inside your project's folder. This command will publish the project on bohr.io and create an active URL for you to access it. While it is recommended, you don't have to have a GitHub repository with the project to be published.

![image](https://github.com/bohr-io/docs/assets/69644385/bf076245-f45e-4fb6-b74a-64ac063d768a)

## Local Development Environment

Use the bohr.io CLI to develop your site on your local machine, much like how it will be deployed in production on bohr.io. You can use the ```bohr dev``` command to start the local development environment. This will run your project using the configuration and environment variables defined in your project within bohr.io.

This local development environment provides a proxy server, including the edge logic for custom headers and redirects, environment variables, and initializes backend functions, simulating AWS Lambdas. It also automatically detects tools and frameworks like Gatsby, Hugo, Eleventy, Next.js, and more to set up a local development server that mimics the bohr.io production environment.

![image](https://github.com/bohr-io/docs/assets/69644385/8d56646a-ae7d-4dc5-8b59-37b7d6824534)

Here are some of the benefits of using ```bohr dev```:

 - You can develop your website locally without worrying about setting up a complex development environment.

 - You can test your site with custom headers and redirects, which can benefit SEO and security.

 - You can use environment variables to configure your site with different development, staging, and production settings.

 - You can test the back end locally.

 - You can get feedback from others on your site by sharing your local development server with them.

If you are developing a site with bohr.io, it is highly recommended to use ```bohr dev```. It's a great way of developing your site locally, much like how it will be deployed in production.

## Logout

The ```bohr logout``` command is used to end your current session with bohr.io. This means you will no longer be able to use the bohr.io CLI to interact with your bohr.io account until you log in again.
