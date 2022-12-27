---
sidebar_position: 4
---

# Importação de repositórios do GitHub

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/0ctGM494f_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Para importar projetos já existentes no GitHub, você deve acessar na tela dos [templates disponíveis](http://bohr.io/projects/new "templates disponíveis"), a função [Importar do GitHub](https://bohr.io/projects/new/import "Importar do GitHub"), que fica no canto superior direito.

O bohr.io vai listar todos os repositórios aos quais você deu permissão de acesso. Caso não tenha dado acesso a nenhum ainda, será preciso clicar em [Verifique as permissões no GitHub](https://github.com/apps/bohr-io/installations/new/ "Verifique as permissões no GitHub") para instalar o aplicativo do bohr.io, seja na sua conta pessoal ou na de uma organização.

Em um repositório em React, por exemplo, o bohr.io consegue, a partir do package.json, identificar qual framework está sendo utilizado e qual é a pasta que está o conteúdo, para então gerar a publicação.

Ao clicar em Importar será preciso aguardar alguns segundos enquanto a tela de Overview carrega a simulação. No repositório do GitHub você pode observar que o bohr.io fez um commit adicionando um arquivo de workflow do GitHub Actions, usado para buildar o projeto (essa execução pode ser vista na aba de Actions).

O repositório vai instalar o CLI do bohr.io e fazer a publicação, tentando identificar o framework. Dependendo do framework que você estiver utilizando, será necessário fazer alguma configuração a mais dentro do Settings do site (se você encontrar algum problema, é só nos chamar no Discord).

Depois de instalado o CLI, ele vai escolher o Yarn para rodar. Você pode trocar tanto o comando de install quanto o de build nas configurações.

Depois de terminar a compilação e o upload, é gerada uma URL de publicação.
OBS: como há um pequeno delay na tela de Overview, pode ser que a visualização do seu projeto retorne Site not Found. Não se preocupe, basta atualizar a tela.

Na tela Settings, nas Environment Variables, você pode ver as variáveis que estão sendo executadas. Elas podem ser trocadas, no caso de ocorrer algum problema ou de não serem detectadas (se precisar, chama a gente no Discord).
