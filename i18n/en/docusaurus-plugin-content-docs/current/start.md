---
sidebar_position: 1
---

# Introduction

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/yKNBdCSvUgk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

Bohr.io is a **serverless platform** designed for those who are just starting to program, perfect for making your first deployments, whether it's for a portfolio, college project, job interview test, or any other project.

We're talking about a unified solution to meet all beginner's needs, entirely focused on the developer experience. bohr.io is a unique tool in the market with incredible and unprecedented usability.

The platform is tightly integrated with **GitHub**, especially with **GitHub Actions**, the environment where the `build` for each project is performed.


## Getting started with Bohr.io

First of all, you must have a  bohr.io account. Then, to create a project on bohr.io, you can [choose a template](https://docs.bohr.io/docs/Templates/default-templates) or [import a GitHub repository](https://docs.bohr.io/docs/importacao) created using any framework. You can also create a new project directly from the terminal and deploy it on bohr.io instantly!

### Using a template

To use a template, navigate to the [projects page](https://bohr.io/projects), click "Add a New Project," and select the template.
![templates do Bohr](https://github.com/bohr-io/docs/assets/69644385/92be8efa-a15a-4cfa-bedb-2b92f4ab6055)

Next, set the desired subdomain, domain, username, and GitHub repository. At this stage, you may need to grant permissions to Bohr if you haven't done so earlier. Now, you can simply use the pre-prepared build and development variables and publish your project!

![dados sobre o projeto](https://github.com/bohr-io/docs/assets/69644385/f3563bcc-4194-48a8-8b65-f6d50561aa43)

There you go, your project is already live and ready to be accessed. Now, you can edit your code and take advantage of Bohr's CI/CD along with GitHub Actions for automatic deployments of your changes.

![página do projeto](https://github.com/bohr-io/docs/assets/69644385/2865d293-ae4c-48d9-acbe-4e657c09877a)

### Importing a project

Para importar um projeto, navegue até a [página de projetos](https://bohr.io/projects), clique em "Adicionar novo projeto" e em seguida clique em "Importar do Github". Agora selecione o repositório com o projeto que deseja importar, nesta etapa talvez seja necessário adicionar permissões ao Bohr, caso não tenha feito isso anteriormente.
![importar projeto](https://github.com/bohr-io/docs/assets/69644385/d8e7e371-47d8-4b72-9657-5730c8ea94dc)

Em seguida, defina o subdomínio desejado, domínio e variáveis de ambiente desejados.
![dados sobre o projeto](https://github.com/bohr-io/docs/assets/69644385/f55b821b-7bc2-47eb-9799-ec5c14b3498e)

Pronto, agora o bohr será instalado no seu repositório do GitHub e será feito o deploy do seu projeto no Bohr, assim que terminado, seu projeto já estará no ar pronto para ser acessado, agora você pode editar seu código e aproveitar do CI/CD do Bohr junto com as GitHub Actions para fazer deploys automáticos das suas alterações.
![página do projeto](https://github.com/bohr-io/docs/assets/69644385/2865d293-ae4c-48d9-acbe-4e657c09877a)

### Using the Terminal

You can use the terminal to create and publish projects on the platform. You can also use the terminal locally or the terminal available within bohr.io.
![Terminal do Bohr](https://github.com/bohr-io/docs/assets/69644385/74b1aff7-40bd-4c40-92f1-619d0c661d24)

In this example, we'll create a Next.js project and name it "my-next-app," then click on the "npx create-next-app" button and set your preferences. The project will then be initialized automatically.
![preferências next](https://github.com/bohr-io/docs/assets/69644385/03ddf754-8102-4289-9b14-cd9645e74ef4)

Now, navigate to your new Next.js project folder by clicking the "cd /app/my-next-app" button.
![navegar até a pasta do projeto](https://github.com/bohr-io/docs/assets/69644385/dbfae19e-b8c7-441d-84f5-94c3fc0b0ec1)

With your new project already created, you have to publish it on bohr.io by clicking the "npx bohr deploy" button. bohr.io will then install, build, and deploy the project within the platform. Once it's finished, your project will be live and ready to be accessed via the link provided in the terminal.
![publicando no Bohr](https://github.com/bohr-io/docs/assets/69644385/28e43577-f4e1-46b9-93a2-2ccd152c9f67)

Now, you can also create a GitHub repository for your new project by clicking the "gh repo create" button and setting your repository preferences.

Then, you can navigate to your project's page and take advantage of bohr.io's CI/CD along with GitHub Actions to perform automatic deployments of your changes.
![página do projeto](https://github.com/bohr-io/docs/assets/69644385/4d4d21a9-9c50-44e0-a73b-4778f5f6c1a7)

## Features

Discover other platform capabilities:

### Fullstack

You can publish projects with both **front-end** and **back-end**. Just place your API (in Node.js) in the API folder. You can find more information in the [Dashboard Template](https://docs.bohr.io/docs/dashboard-template), for example.

### Logs

With bohr.io, you can view the your **back-end logs** within the platform through the [Logs menu](https://docs.bohr.io/docs/logs).

### Environment Variables

Store **database credentials**, **API keys**, and other data in the [Environment Variables](https://docs.bohr.io/docs/variaveis-de-ambiente) feature.

### Content Editing

Bohr.io offers an essential **content editing** feature integrated into the platform, where some changes can be made directly on the page, such as adding links and formatting text (bold, italic, etc.), among other options.

On the project screen, you also access the link to the repository created on GitHub.


### Project Preview

bohr.io allows you to preview **realistic, real-time simulations** of your project on **mobile devices** (smartphones, tablets) and **different types of displays** (desktop and laptop).

### Collaboration Feature

Using **Durable Objects (Cloudflare)** and **liveblocks** technologies, bohr.io allows developers working on the same project to **view each other's activities in real time**.

### Visual Studio Code for the Web

On the project screen, there's a link to **Visual Studio Code for the Web** to simplify the developer's work in creating and reviewing code.

### _Dogfooding_

_Dogfooding_ means using your own products. Our platform fits into this concept since **bohr.io is a project within bohr.io itself**. In other words, you can open bohr.io within bohr.io (something like the movie Inception by director Christopher Nolan). 🤩

## See Also

In the side menu or the links below, you can access documentation for specific areas of bohr.io:

- [Environment Variables](https://docs.bohr.io/docs/variaveis-de-ambiente)
- [Importing Github Repositories](https://docs.bohr.io/docs/importacao)
- [Settings](https://docs.bohr.io/docs/project-settings)
- [Preview Deploys](https://docs.bohr.io/docs/preview-deploys)
- [Template: Portfólio](https://docs.bohr.io/docs/Templates/portfolio-template)
- [Template: Gatsby](https://docs.bohr.io/docs/Templates/gatsby-template)
- [Template: Dashboard](https://docs.bohr.io/docs/Templates/dashboard-template)
- [Domains](https://docs.bohr.io/docs/domains)
- [Logs](https://docs.bohr.io/docs/logs)
- [Authentication](https://docs.bohr.io/docs/autenticacao)
- [Localhost](https://docs.bohr.io/docs/localhost)
