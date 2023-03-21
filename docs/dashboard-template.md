---
sidebar_position: 9
---

# Template - Dashboard

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/nxvmC0qXd4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>

O **Template de Dashboard** vem com algumas variáveis de ambiente configuradas para fazer a compilação, incluindo uma string de conexão com um banco de dados hospedado no **PlanetScale**. Esse banco de dados não aceita alterações de estrutura, somente de dados.

Para acessá-lo, basta clicar em **Publish**. O bohr.io fará a publicação, tanto do front-end quanto da API, a qual já estará conectada ao banco de dados.

Paralelamente, o bohr.io irá criar o repositório no GitHub. Você pode verificar a sua criação clicando no ícone do GitHub no canto superior direito.

Você pdoe olhar o código por meio do **Visual Studio Code for Web**, clicando no canto superior direito. Lá você verá uma pasta API. O bohr.io usa o [**Prisma**](https://www.prisma.io/ "Prisma"), que é uma ORM (_object-relational mapping_) para lidar com o banco de dados.

No código você verá também uma API simples que lida com o CRUD de usuários.

O Template de Dashboard está integrado com **reCAPTCHA** (você pode trocar a chave depois). Para facilitar o seu acesso, login e senha estão fixos, mas você pode alterar ambos.

Ao entrar, você verá o exemplo da API, fazendo requisições diretamente no banco de dados. Nessa tela, você poderá modificar os dados.

Este template possui documentação no formato **OpenAPI**. Para acessá-la, basta adicioanr `/doc` no final da URL, onde você poderá chamar os métodos diretamente para a criação de usuários, por exemplo.
