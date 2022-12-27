---
sidebar_position: 9
---

# Template - Dashboard

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/nxvmC0qXd4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

O Dashboard Template já vem com algumas variáveis de ambiente configuradas para fazer a compilação, mas, principalmente, ele já vem com uma string de conexão com um banco de dados que está hospedado no PlanetScale. Este banco de dados não aceita alteração de estrutura (somente de dados).

Para acessá-lo, basta clicar em Publish. Não é necessário alterar as configurações iniciais. O bohr.io fará a publicação, tanto do front-end quanto da API, a qual já estará conectada ao banco de dados.

Paralelamente, o bohr.io vai criar o repositório no GitHub. Você pode verificar a sua criação clicando no ícone do GitHub (o primeiro dos dois no canto superior direito).

É mais fácil olhar o código por meio do Visual Studio Code for Web (o segundo ícone no canto superior direito). Lá você verá uma pasta API. O bohr.io usa o Prisma, que é uma ORM (object-relational mapping) para lidar com o banco de dados.

No código você verá também uma API simples que lida com o CRUD de usuários.

O Dashboard Template está integrado com reCAPTCHA (você pode trocar a chave depois). Para facilitar o seu acesso, login e senha estão fixos (você pode alterar ambos).

Ao entrar você vai ver o exemplo da API, batendo direto no banco de dados. Nesta tela você pode modificar os dados.

Este template tem uma documentação no formato OpenAPI. Para acessá-la, adicione /doc à URL. 

Por aí você consegue chamar os métodos diretamente para a criação de usuários, por exemplo.