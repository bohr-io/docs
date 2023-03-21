---
sidebar_position: 4
---

# Importação de repositórios do GitHub

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/0ctGM494f_Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

Para importar projetos hospedados em repositórios do GitHub, acesse a página de [novo projeto](http://bohr.io/projects/new "templates disponíveis") e selecione a opção [**Importar do GitHub**](https://bohr.io/projects/new/import), no canto superior direito da tela.

Apenas os repositórios aos quais você concedeu permissão de acesso serão listados. Caso ainda não tenha concedido acesso a nenhum repositório, será preciso clicar em [Verifique as permissões no GitHub](https://github.com/apps/bohr-io/installations/new/ "Verifique as permissões no GitHub") para integrar o bohr.io com a sua conta pessoal ou de organização no GitHub.

Por exemplo, num repositório de um projeto React, o bohr.io irá identificar a partir do `package.json` que o framework utilizado é o **React** e que a pasta que contém o conteúdo é a `build`. Com essas informações, o bohr.io vai gerar a publicação.

Ao clicar em **Importar**, será preciso aguardar alguns segundos enquanto a tela de **Overview** carrega a simulação. No repositório do GitHub, você pode observar que o bohr.io irá um commit adicionando um arquivo de workflow do **GitHub Actions**, usado para construir o projeto (essa execução pode ser acompanhada na aba de **Actions** no GitHub).

O repositório irá instalar o CLI do bohr.io e realizar a publicação, tentando identificar o framework. Dependendo do framework que você estiver utilizando, será necessário fazer alguma configuração a mais dentro do **Settings** do site (se você encontrar algum problema, é só nos chamar no [Discord](https://discord.com/invite/p3hhfGg2Uy)).

Depois de instalado, ele irá rodar comandos de instalação e build do projeto usando o [**Yarn**](https://yarnpkg.com/ "Yarn Package Manager"). Você pode trocar os comandos nas configurações do site.

Depois de terminar a compilação e o upload, é gerada uma URL de publicação.

:::note
Como há um pequeno delay na tela de **Overview**, pode ser que a visualização do seu projeto retorne _Site not Found_. Não se preocupe, basta atualizar a tela.
:::

Na tela **Settings**, nas **Environment Variables**, você pode ver as variáveis que estão sendo usadas durante a execução. Elas podem ser alteradas, no caso de ocorrer algum problema ou de não serem detectadas (se precisar, chama a gente no [Discord](https://discord.com/invite/p3hhfGg2Uy)).
