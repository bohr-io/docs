---
sidebar_position: 12
---

# Command-line Interface - CLI

O CLI do Bohr.io é uma ferramenta de linha de comando que permite que você publique seu site em produção com um único comando, sendo uma ótima maneira de economizar tempo e esforço ao publicar seu site. 

Além disso, o CLI do Bohr.io permite que você execute um servidor de desenvolvimento local onde você pode testar seu código e plug-ins localmente antes de publica-los na produção. Este ambiente local pode ser compartilhado com outras pessoas permitindo obter feedback sobre seu trabalho antes de publica-lo na produção.

As seções a seguir explicarão como usar o CLI do Bohr.io para executar tarefas comuns.

## Login

Para utilizar o CLI do Bohr.io, primeiramente é necessário fazer login utilizando o commando ```bohr login```. Este comando abrirá uma aba no seu navegador padrão para que seja feita a autenticação com o GitHub.

## Instalação

Para instalar o CLI do Bohr.io, certifique-se de ter o Node.js versão 16.0.0 ou posterior. Em seguida, execute este comando em qualquer diretório do seu terminal:

```npm install bohr```

Para instalar a CLI do Bohr.io globalmente, você pode executar o seguinte comando:

```npm install bohr -g```

## Deploy

Para publicar um projeto bohr.io a partir do código-fonte, você pode usar o comando ```bohr deploy``` dentro da pasta do seu projeto, este comando publicará o projeto no Bohr.io e criará um URL ativo para você acessá-lo. Apesar de ser recomendado, não é obrigatório existir um repositório no GitHub com o projeto a ser publicado.

![image](https://github.com/bohr-io/docs/assets/69644385/bf076245-f45e-4fb6-b74a-64ac063d768a)

## Ambiente de desenvolvimento local

É possível também usar o CLI do Bohr.io para desenvolver seu site em sua máquina local de uma forma muito semelhante à forma como ele será implantado em produção no Bohr.io, para iniciar o ambiente de desenvolvimento local você pode usar o comando ```bohr dev```. Isto executará seu projeto usando as variáveis de configuração e de ambiente definidas no seu projeto dentro do Bohr.io.

Este ambiente de desenvolvimento local fornece um servidor proxy que inclui lógica de Edge para cabeçalhos e redirecionamentos personalizados, variáveis de ambiente além de também inicializar as funções de back-end, simulando as Lambdas da AWS. Ele também detecta automaticamente ferramentas e estruturas como Gatsby, Hugo, Eleventy, Next.js e muito mais para configurar um servidor de desenvolvimento local que imita o ambiente de produção Bohr.io.

![image](https://github.com/bohr-io/docs/assets/69644385/8d56646a-ae7d-4dc5-8b59-37b7d6824534)

Aqui estão alguns dos benefícios de usar ```bohr dev```:

 - Você pode desenvolver seu site localmente sem se preocupar em configurar um ambiente de desenvolvimento complexo.

 - Você pode testar seu site com cabeçalhos e redirecionamentos personalizados, o que pode ser útil para SEO e segurança.

 - Você pode usar variáveis de ambiente para configurar seu site com diferentes configurações de desenvolvimento, preparação e produção.

 - Você pode testar o Back-end localmente.

 - Você pode obter feedback de outras pessoas sobre seu site, compartilhando seu servidor de desenvolvimento local com elas.

Se você estiver desenvolvendo um site com Bohr.io, é altamente recomendável usar ```bohr dev```. É uma ótima maneira de desenvolver seu site localmente de uma forma muito semelhante à forma como ele será implantado na produção.

## Logout

O comando ```bohr logout``` é usado para encerrar sua sessão atual com Bohr.io. Isso significa que você não poderá mais usar a CLI do Bohr.io para interagir com sua conta do Bohr.io até fazer login novamente.
