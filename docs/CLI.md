---
sidebar_position: 12
---

# Command-line Interface - CLI
bohr.io CLI overview
bohr.io CLI is a command-line tool that allows you to configure continuous deployment, run a local development server, and deploy your site. With continuous deployment, bohr.io will automatically deploy new versions of your site to production whenever you push changes to your Git repository. This can save you a lot of time and effort, and it ensures that your site is always up-to-date.

Here is a more detailed explanation of each of the features mentioned in the text:

Continuous deployment: Continuous deployment is a process of automatically deploying new versions of your code to production whenever you push changes to your Git repository. This means that your users will always be on the latest version of your site, and you won't have to manually deploy new code each time you make a change.

Local development server: bohr.io CLI allows you to run a local development server that you can share with others. This is useful for getting feedback on your work before you deploy it to production.

Local build and plugins: bohr.io CLI allows you to run a local build and plugins. This means that you can test your code and plugins locally before you deploy them to production.

Deploy your site: bohr.io CLI allows you to deploy your site to production with a single command. This is a great way to save time and effort when deploying your site.

The following sections will explain how to use bohr.io CLI to perform common tasks.
Version
To install bohr.io CLI, make sure you have Node.js version 16.0.0 or later. Then, run this command from any directory in your terminal:

CÓDIGO

To install bohr.io CLI globally, you can run the following command:

CÓDIGO

Installing bohr.io CLI globally means that you will always have the latest version of the CLI on your system, including any breaking changes. This is appropriate for initial development and experimentation but this is not recommended for managing builds in a continuous integration (CI) environment.

In a CI environment, it is important to have a reproducible build process. This means that the same exact steps should be taken to build the project each time, regardless of the version of the CLI that is installed. If you install bohr.io CLI globally, there is a risk that a breaking change could be introduced in the CLI that could cause the build to fail.

To avoid this, it is recommended to install bohr.io CLI locally in your CI environment. This will ensure that the same version of the CLI is used to build the project each time.
Installing in a CI environment
When using bohr.io CLI in a continuous integration (CI) environment, it is recommended to install it locally as a development dependency. This means that the CLI will be installed in the same directory as your project code, and it will not be available to other projects on your system. This is important because it ensures that the same version of the CLI is used to build your project each time.

To install bohr.io CLI locally as a development dependency, you can run the following command from the root directory of your project:

CÓDIGO

Deploying Projects from bohr.io CLI
Deploying from source
To deploy a bohr.io project from source, you can use the `bohr` command. This command can be used from the root directory of the bohr.io project, or by providing a path to the project directory.

For example, if your bohr.io project is located in the directory my-project, you can deploy it by running the following command in your terminal:

`bohr`

This will deploy the project to bohr.io and create a live URL for you to access it.

You can also use the `bohr` command to deploy a pre-built bohr.io project. To do this, you will need to first build the project using the `bohr` build command. Once the project is built, you can deploy it using the following command:

`bohr deploy`

This will deploy the pre-built project to bohr.io and create a live URL for you to access it.
The `bohr deploy` deploy command takes a path to the project directory as its argument. If the path is a bohr.io project root, the project will be deployed to bohr.io. The output of the command will always be the Deployment URL.

You can also use the `bohr deploy` command to write the Deployment URL to a text file. To do this, you can use the redirection operator (>). For example, the following command will deploy the project in the current directory and write the Deployment URL to a file called deployment-url.txt:

bohr> deployment-url.txt
Deploying from local build (prebuilt)
You can build bohr.io projects locally and deploy them to bohr.io without sharing your source code with the platform. This is a great option for debugging build outputs and for producing builds that are specific to your environment.

To build a bohr.io project locally, you can use the `bohr build` command. This command will create a build directory called .bohr/output that contains the build outputs in the Build Output API format. You can review the build outputs in this directory before you deploy them to bohr.io.

To deploy the build outputs to bohr.io, you can use the `bohr deploy` --prebuilt command. This command will deploy the build outputs in the .bohr/output directory to bohr.io.

Here is an example of how to build and deploy a bohr.io project locally:

# Build the project
`bohr build`

# Review the build outputs
`ls .bohr/output`

# Deploy the build outputs
`bohr deploy --prebuilt`
Continuous deployment
Continuous deployment is a process where new versions of your site are automatically deployed to production whenever you push commits to your connected Git repository. This means that your users will always be on the latest version of your site, and you won't have to manually deploy new code each time you make a change.

bohr.io supports continuous deployment, and it also makes it easy to use features like Deploy Previews, branch deployments, and split testing.

Deploy Previews: With Deploy Previews, you can create a staging environment for your site where you can test changes before they are deployed to production. This is a great way to get feedback from your team or stakeholders before you make changes live.

Branch deploys: With branch deploys, you can deploy changes to a specific branch of your Git repository. This is useful for developing new features or testing bug fixes without affecting your production site.

Split testing: With split testing, you can test different versions of your site with different users to see which one performs better. This is a great way to optimize your site for conversions or improve the user experience.
Automated setup
To connect a GitHub repository to bohr.io CLI, you can run the following command from the root directory of your repository:

CÓDIGO

This will open a browser window where you can authenticate with GitHub and authorize bohr.io to access your repository. Once you have authorized it, your repository will be connected to bohr.io CLI.

After your repository is connected, you can use bohr.io CLI to deploy your site, create deployment previews, and manage your branch deployments.
Manual setup

For repositories stored on GitLab, Bitbucket, or Azure DevOps, you can connect your repository manually with the `manual` flag.

To connect a repository to bohr.io CLI manually, you can run the following command from the root directory of your repository:

CÓDIGO

This will prompt you to set your deploy settings, such as your bohr.io username and password. The bohr.io CLI will then provide you with a deploy/access key and a webhook URL. You will need to manually add the key and webhook URL to your Git provider.

Once you have added the key and webhook URL to your Git provider, your repository will be connected to bohr.io CLI. You can then use bohr.io CLI to deploy your site, create deploy previews, and manage your branch deployments.

Here are some additional details about the manual setup process:

The deploy/access key is a secret key that allows bohr.io to deploy your site to your Git provider. You should keep this key safe and secure.

The webhook URL is a URL that bohr.io will use to notify your Git provider when a new commit is pushed to your repository. You will need to add this URL to your Git provider's settings.
Local development environment

`bohr dev` is a tool that allows you to develop your website on your local machine in a way that is very similar to how it will be deployed to production on bohr.io. 

`bohr dev` provides a proxy server that includes edge logic for custom headers and redirects, environment variables, and `bohr functions`. It also automatically detects tools and frameworks like Gatsby, Hugo, Eleventy, Next.js, and more to configure a local development server that mimics the bohr.io production environment.

Here are some of the benefits of using `bohr dev`:

You can develop your website locally without having to worry about setting up a complex development environment.

You can test your website with custom headers and redirects, which can be helpful for SEO and security.

You can use environment variables to configure your website with different settings for development, staging, and production.

You can test `bohr functions` locally.

You can get feedback on your website from others by sharing your local development server with them.

If you are developing a website with bohr.io, we highly recommend using `bohr dev`. It is a great way to develop your website locally in a way that is very similar to how it will be deployed to production.
Getting started with `bohr dev`
Authenticate with bohr.io. You can do this by running the bohr login command.
Make sure your site is linked to a bohr.io site ID. You can do this by running the bohr link command.
Start a local development server. To do this, run the following command from the root directory of your linked repository:

CÓDIGO

This will start a local development server that mimics the bohr.io production environment. You can then develop your website on your local machine and see the changes in real time.

Here are some additional details about getting started with `bohr dev`:

You can authenticate with bohr.io using your GitHub, GitLab, or Bitbucket account.

You can link your site to a bohr.io site ID by providing the bohr.io site ID when you run the bohr link command.

You can start a local development server for any build tool that bohr.io supports. `bohr dev` will automatically detect the build tool that you are using and configure the local development server accordingly.

By default, the `bohr dev` command runs your project using the configuration and environment variables that are set for local development with the bohr.io CLI. This includes environment variables that have values set for the `dev` or `all` deploy contexts.

You can use the --context flag to run your project with a different deploy context's settings and variables. For example, if you want to run your project with the settings and variables for the staging deploy context, you would run the following command:

CÓDIGO

This will run your project using the configuration and environment variables that are set for the staging deploy context.

When you run the `bohr dev` command, all environment variables that are set for your project will be applied, regardless of the deploy context.

To run a shell command within the `bohr dev` environment, you can use the `bohr dev:exec command`. This command will run the specified shell command in the same environment as the `bohr dev` server.

Here is an example of how to use the `bohr dev:exec command`:

CÓDIGO
This command will run the yarn test command in the same environment as the `bohr dev` server. This means that the environment variables that are set for your project will be available to the yarn test command.
Sharing your live development server
Run following command:

CÓDIGO

This will create a tunnel from your local development server over the internet, which allows others to access your site using a secure HTTPS connection. The tunnel will remain open as long as the `bohr dev` command is running.

Anyone who has the URL to your live development server can access it, regardless of their location. This is a great way to get feedback from collaborators or to demo your site to potential clients.

Here are some additional details about sharing a live development server with `bohr dev`:

The tunnel is created using ngrok, a free service that allows you to expose your local development server to the internet.

The URL to your live development server will be printed to the console when you run the CÓDIGO command.

You can close the tunnel by pressing Ctrl+C in the terminal window where you ran the `bohr dev` command.
Running builds locally
You can use bohr.io CLI to mimic the behavior of running a build on bohr.io. To run a build locally, run the following command from the root directory of your linked repository:

`bohr build`

This command will build your project using the environment variables that are set in bohr.toml and those that are set using the bohr.io UI, CLI, or API. Note that environment variables apply to all scopes when running `bohr build` locally.

Here are some additional details about running builds locally with bohr.io CLI:

The `bohr build` command will build your project using the same build configuration that is used to deploy your site to bohr.io.

The `bohr build` command will output the build artifacts to the .bohr/functions/ directory.

You can use the `bohr dev` command to preview the build artifacts in a live development server.
Be sure to use the correct version of Node.js
When using the bohr.io CLI to run a build locally, it is important to make sure that the Node.js version that is installed in your local environment matches the version that is set for your build on bohr.io. If the versions do not match, you may encounter errors.

Here are some reasons why you might encounter errors if the Node.js versions do not match:

The build plugins that you are using may not be compatible with the Node.js version that is installed in your local environment.

The build process may not be able to correctly interpret the code in your project.

The build artifacts may not be compatible with the Node.js version that is used to deploy your site to bohr.io.

To avoid these errors, it is important to make sure that the Node.js version that is installed in your local environment matches the version that is set for your build on bohr.io. You can check the Node.js version that is set for your build on bohr.io by going to the "Build Settings" tab in the bohr.io UI.

Here are some steps that you can take to make sure that the Node.js versions match:

Check the Node.js version that is installed in your local environment by running the following command: 

node -v

Check the Node.js version that is set for your build on bohr.io by going to the "Build Settings" tab in the bohr.io UI.
If the Node.js versions do not match, you can install the correct version of Node.js in your local environment using the following command:

npm install -g node@<version>

where <version> is the Node.js version that is set for your build on bohr.io.

You can use the --dry flag with the `bohr build` command to get a summary of what a build will do without taking the time to do a full build. This is useful for debugging build configurations or getting a sense of the build process without actually deploying anything.

The --dry flag will output a list of all the stages of the build and the behaviors that are configured to run during each stage. This includes the build plugins that will be used, the environment variables that will be set, and the commands that will be run.

The default build context is production, but you can also use the --context flag to run a build for a different deploy context. For example, the following command will run the build as if it is a Deploy Preview:

bohr build --context deploy-preview

This command will apply any settings and environment variable values specific to the Deploy Preview context.
How to deploy manually
Manual deployments are a way to deploy your site to bohr.io without using continuous deployment. This means that you will need to manually upload your files to bohr.io each time you want to deploy a new version of your site.

Manual deploys are useful in a few situations:

If you are using a separate Continuous Integration (CI) tool to build your site, you can use manual deployments to deploy the prebuilt files to bohr.io at the end of the CI tool tasks.

If you need to deploy a site quickly, manual deployments can be a faster way to deploy than continuous deployment.

If you are debugging a site, manual deployments can be a helpful way to test changes without having to wait for a continuous deployment to complete.

To get started with manual deploys, run the following command from the root directory of your project:

bohr deploy

The first time you run the command, bohr.io CLI will prompt you to select an existing site or create a new one, linking the site for all future deployments.

Here are some additional requirements for manual deploys:

Your project must be linked to a bohr.io site.
Your project must be configured for manual deploys. You can do this by setting the deploy_method to manual in your bohr.toml file.
Your project must be built before you can deploy it. You can use the bohr build command to build your project.

Here are some additional options for manual deploys:

You can use the --message flag to specify a message that will be associated with the deployment.

You can use the --confirm flag to prevent accidental deployments.

You can use the --verbose flag to get more detailed output from the deploy process.
Deploy directories
The `bohr deploy` command needs to know which folder to publish and where to find the functions folder. bohr.io CLI will look for this information in three places, in the following order:

In the flags specified in the command itself.
In a `bohr.toml` file stored at the root of your project directory.
In your site configuration in the bohr.io UI, if continuous deployment is set up for the site.

Here is an example of how to use command flags to set the publish folder and functions folder:

bohr deploy --dir=_site --functions=functions

In both cases, folder paths are relative to the current directory. Note that paths starting with / will begin at the computer's root directory, not the base of your project directory.

Here is a table that summarizes the different ways to specify the deploy directories:
Method
Description
Command flags
Use the --dir and --functions flags to specify the publish folder and functions folder, respectively.
bohr.toml file
The publish and functions fields in the bohr.toml file can be used to specify the deploy directories.
bohr.io UI
If continuous deployment is set up for your site, you can specify the deploy directories in the site configuration in the bohr.io UI.




Draft deployments
By default, the `bohr deploy` command deploys to a unique draft URL for previewing and testing. The draft URL is a temporary URL that is not publicly accessible, but it can be used to test changes to your site before you deploy them to production.

The default draft URL uses random alphanumeric characters for the subdomain. If you want to customize the subdomain of your draft URL with a unique string, you can use the --alias flag with the `bohr deploy` command.

For example, the following command will deploy your site to a draft URL with the subdomain my-alias:

bohr deploy --alias=my-alias

The --alias flag can be used to create a more memorable and user-friendly draft URL for your site. It can also be used to track different versions of your site by using different aliases.

Attention: You should avoid using a string that matches any existing branch names from your site's repository. This is because the --alias flag is designed to support draft deploy URLs only. It does not create a branch deploy or support the branch subdomains feature. If you use a string that matches an existing branch name, bohr.io CLI will create a branch deploy, even if you did not intend to. To avoid this, you should make sure that the string you use after the --alias= flag does not match any existing branch names from your site's repository.
Production deployments
To do a production deployment to your main site URL, use the --prod flag (or -p for short):

bohr deploy --prod
Node.js function dependencies

To manually deploy TypeScript or JavaScript functions with bohr.io CLI, you need to first populate the node_modules folders with your dependencies. You can do this by running the following command in any folder containing a package.json file:

npm install
yarn install

Once the node_modules folders have been populated, you can deploy your functions using the bohr.io deploy command. bohr.io CLI will parse each function file to note its dependencies. For each function, the CLI will then pull the required dependencies from the associated node_modules folder and zip them with the function file for deployment.

Here are some additional details about deploying Node.js functions with bohr.io CLI:

The `bohr deploy` command will deploy all of the functions in your project, regardless of whether they are in the functions directory or not.

If you want to deploy a specific function, you can use the --functions flag to specify the function name or path.

You can also use the --exclude-functions flag to exclude specific functions from the deploy.

The `bohr deploy` command will always deploy the latest version of your functions, even if you have not made any changes to them.
Get help

To get usage tips and learn more about the available commands in the bohr CLI, you can run the following command:

bohr help

This will print a list of all of the available commands, along with a brief description of each one. You can also run `bohr help` with the name of a specific command to get more detailed information about that command.

For example, the following command will print detailed information about the deploy command:

bohr help deploy

This will also work for sub-commands. For example, the following command will print detailed information about the sites:create sub-command:

bohr help sites:create

If you have additional questions or ideas for new features, you can start an issue on the bohr.io CLI's open source repository. You can also visit our Discord server to start or join a conversation. The bohr.io team would love to hear from you!
Login
The `bohr login` command allows you to login to your bohr.io account through bohr.io CLI.

bohr.io CLI supports the following login methods:

GitHub OAuth
GitLab OAuth
Bitbucket OAuth
Email confirmation
SAML Single Sign-On through your Team's identity provider

The user will be prompted to choose a login method if no arguments are provided. The available login methods are listed at the prompt.

If you don't want to be prompted to choose a login method, you can simply type your email address or team slug after the vc login command. For example:

vc login my@email.com

This will login to your bohr.io account using your email address. Or, if you are part of a team with SAML Single Sign-On enabled, you can pass your team slug instead:

vc login my-team-slug
Unique Options

These options are only available for the `bohr login` command.

GitHub
The --github option can be used to initiate GitHub OAuth login:

bohr login --github
GitLab
The --gitlab option can be used to initiate GitLab OAuth login:

bohr login --gitlab
Bitbucket
The --bitbucket option can be used to initiate Bitbucket OAuth login:

bohr login --bitbucket

Out-of-band mode
The --oob option can be used to enable out-of-band mode during login. In out-of-band mode, you will be prompted to copy a verification token from your web browser and paste it into the bohr.io CLI to complete the login.

This mode is useful if you are logging in to bohr.io from a remote machine, such as an SSH session or a Docker container, and you do not have a graphical user interface.

Using the `bohr login` command with the --oob option:

bohr login --github --oob

In most situations, you do not need to use the --oob option, as out-of-band mode is automatically enabled when you log in from a remote machine.
Global Options

These options are not specific to the `bohr login` command, but can be used with any bohr.io CLI command.

`--cwd`
`--debug`
`--global-config`
`--help`
`--local-config`
`--no-color`
`--scope`
`--token`
Logout
The `bohr logout` command is used to end your current session with bohr.io. This means that you will no longer be able to use the bohr.io CLI to interact with your bohr.io account until you log back in.

The following global options can be used with the `bohr logout` command:

`--cwd`
`--debug`
`--global-config`
`--help`
`--local-config`
`--no-color`
`--scope`
`--token`

