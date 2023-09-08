---
sidebar_position: 1
---

# Introdução

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/yKNBdCSvUgk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

A bohr.io é uma plataforma **serverless** feita para quem está começando a programar, ideal para fazer os seus primeiros deploys, seja de um portfólio, trabalho da faculdade, teste para uma entrevista de emprego ou qualquer outro projeto.

Estamos falando de solução unificada para atender todas as necessidades dos iniciantes e totalmente focada na experiência do desenvolvedor. A bohr.io uma ferramenta única no mercado, com usabilidade incrível e sem precedentes.

A plataforma é fortemente integrada ao **GitHub** - especialmente ao **GitHub Actions**, ambiente onde é feito o `build` de cada projeto.

## Começando no Bohr

Antes de tudo, você deve ter uma conta no Bohr.io, depois para criar um projeto na bohr.io, você pode [escolher um template](https://docs.bohr.io/docs/Templates/default-templates) ou [importar um repositório do GitHub](https://docs.bohr.io/docs/importacao) feito usando qualquer framework, além disso,  também é possível criar diretamente um novo projeto pelo terminal e já fazer o deploy no Bohr diretamente!

### Usando um template

Para utilizar um template, navegue até a [página de projetos](https://bohr.io/projects), clique em "Adicionar novo projeto" e selecione o template que deseja utilizar.
![templates do Bohr](https://github.com/bohr-io/docs/assets/69644385/92be8efa-a15a-4cfa-bedb-2b92f4ab6055)

Em seguida, defina o subdomínio desejado, domínio, nome do usuário e repositório no GitHub. Nesta etapa talvez seja necessário adicionar permissões ao Bohr, caso não tenha feito isso anteriormente. Agora é só utilizar as variáveis de build e desenvolvimento e de ambiente já preparadas pelo template e publicar seu projeto!

![dados sobre o projeto](https://github.com/bohr-io/docs/assets/69644385/f3563bcc-4194-48a8-8b65-f6d50561aa43)

Pronto, seu projeto já está no ar pronto para ser acessado, agora você pode editar seu código e aproveitar do CI/CD do Bohr junto com as GitHub Actions para fazer deploys automáticos das suas alterações.

![página do projeto](https://github.com/bohr-io/docs/assets/69644385/2865d293-ae4c-48d9-acbe-4e657c09877a)

### Importando um projeto

Para importar um projeto, navegue até a [página de projetos](https://bohr.io/projects), clique em "Adicionar novo projeto" e em seguida clique em "Importar do Github". Agora selecione o repositório com o projeto que deseja importar, nesta etapa talvez seja necessário adicionar permissões ao Bohr, caso não tenha feito isso anteriormente.
![importar projeto](https://github.com/bohr-io/docs/assets/69644385/d8e7e371-47d8-4b72-9657-5730c8ea94dc)

Em seguida, defina o subdomínio desejado, domínio e variáveis de ambiente desejados.
![dados sobre o projeto](https://github.com/bohr-io/docs/assets/69644385/f55b821b-7bc2-47eb-9799-ec5c14b3498e)

Pronto, agora o bohr será instalado no seu repositório do GitHub e será feito o deploy do seu projeto no Bohr, assim que terminado, seu projeto já estará no ar pronto para ser acessado, agora você pode editar seu código e aproveitar do CI/CD do Bohr junto com as GitHub Actions para fazer deploys automáticos das suas alterações.
![página do projeto](https://github.com/bohr-io/docs/assets/69644385/2865d293-ae4c-48d9-acbe-4e657c09877a)

### Utilizando o Terminal

Também é possível utilizar o terminal para criar projetos e publica-los no Bohr, você pode utilizar o terminal localmente ou o terminal disponível dentro do Bohr.io.
![Terminal do Bohr](https://github.com/bohr-io/docs/assets/69644385/74b1aff7-40bd-4c40-92f1-619d0c661d24)

Neste exemplo, vamos criar um projeto next e chama-lo de "my-next-app", então clique no botão "npx create-next-app" e defina suas preferências. Em seguida, o projeto será inicializado automaticamente.
![preferências next](https://github.com/bohr-io/docs/assets/69644385/03ddf754-8102-4289-9b14-cd9645e74ef4)

Agora, navegue até a pasta do seu novo projeto Next clicando no botão "cd /app/my-next-app"
![navegar até a pasta do projeto](https://github.com/bohr-io/docs/assets/69644385/dbfae19e-b8c7-441d-84f5-94c3fc0b0ec1)

Com seu novo projeto já criado, agora é só publica-lo no Bohr clicando no botão "npx bohr deploy". Agora o bohr irá fazer a instalação e build do projeto e o deploy dentro do Bohr, assim que terminado seu projeto já estará no ar pronto para ser acessado pelo link informado no terminal.
![publicando no Bohr](https://github.com/bohr-io/docs/assets/69644385/28e43577-f4e1-46b9-93a2-2ccd152c9f67)

Agora, você também já pode criar um repositório no GitHub para seu novo projeto, clicando no botão "gh repo create" e definindo suas preferências de repositório.

Então, você pode agora navegar para a página do seu novo projeto e aproveitar do CI/CD do Bohr junto com as GitHub Actions para fazer deploys automáticos das suas alterações.
![página do projeto](https://github.com/bohr-io/docs/assets/69644385/4d4d21a9-9c50-44e0-a73b-4778f5f6c1a7)

## Funcionalidades

Conheça outros recursos da plataforma:

### Fullstack

Você pode publicar projetos com **front-end** e **back-end**. Basta colocar sua API (em Node.js) na pasta API. Você pode obter mais informações no template [Dashboard](https://docs.bohr.io/docs/dashboard-template), por exemplo.

### Logs

Com o bohr.io você pode visualizar os **logs do seu back-end** dentro da plataforma, através do menu [Logs](https://docs.bohr.io/docs/logs).

### Variáveis de Ambiente

Armazene **credenciais de bancos de dados** e **chaves de APIs**, entre outros dados, na feature [Variáveis de Ambiente](https://docs.bohr.io/docs/variaveis-de-ambiente).

### Edição de Conteúdo

A bohr.io dispõe de um recurso básico de **edição de conteúdo** integrado à plataforma, no qual algumas alterações podem ser feitas direto na página, como inserção de links e destaques em textos (negrito, itálico, etc.), entre outras.

Na tela do projeto, você também tem acesso ao link do repositório criado no GitHub.

### Visualização do Projeto

A bohr.io permite que você visualize **simulações realistas e em tempo real** do seu projeto em **dispositivos móveis** (smartphones, tablets) e em **diferentes tipos de monitores** (desktop e notebook).

### Recurso de Colaboração

A partir das tecnologias dos **Durable Objects (Cloudflare)** e da **liveblocks**, a bohr.io permite que os desenvolvedores envolvidos no mesmo projeto possam **visualizar as atividades uns dos outros em tempo real**.

### Visual Studio Code for the Web

Na tela do projeto há um link para o **Visual Studio Code for the Web** para simplificar o trabalho do desenvolvedor na criação e na revisão dos códigos.

### _Dogfooding_

_Dogfooding_ significa o uso dos próprios produtos. Nossa plataforma se enquadra neste conceito, uma vez que **o bohr.io é um projeto dentro do próprio bohr.io**. Ou seja, você pode abrir a bohr.io dentro da bohr.io (algo como o filme _Inception_, do diretor Christopher Nolan). 🤩

## Veja também

No menu lateral ou nos links abaixo você pode acessar a documentação de áreas específicas da bohr.io:

- [Variáveis de Ambiente](https://docs.bohr.io/docs/variaveis-de-ambiente)
- [Importação de repositórios do GitHub](https://docs.bohr.io/docs/importacao)
- [Configurações](https://docs.bohr.io/docs/project-settings)
- [Preview Deploys](https://docs.bohr.io/docs/preview-deploys)
- [Template: Portfólio](https://docs.bohr.io/docs/Templates/portfolio-template)
- [Template: Gatsby](https://docs.bohr.io/docs/Templates/gatsby-template)
- [Template: Dashboard](https://docs.bohr.io/docs/Templates/dashboard-template)
- [Domínios](https://docs.bohr.io/docs/domains)
- [Logs](https://docs.bohr.io/docs/logs)
- [Autenticação](https://docs.bohr.io/docs/autenticacao)
- [Localhost](https://docs.bohr.io/docs/localhost)
