# Next.js

A plataforma Bohr.io fornece duas principais opções para implantar projetos que utilizam o framework Next.js. Este guia irá ajudá-lo a entender e escolher a opção que melhor atende às suas necessidades.

## Opção 1: Static Export (Recomendado)

A primeira e recomendada opção é utilizando o **Static Export**, que era conhecido como `next export`. Isso envolve a adição de um atributo `output: 'export'` no seu arquivo `next.config.js`.

Leia mais sobre como configurar a exportação estática na [documentação oficial do Next.js](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports).

### Benefícios

- O front-end é servido diretamente pela camada Edge da Bohr.io, o que resulta na menor latência possível para os usuários.

### Limitações

- O Image Optimization fica desabilitado.
- Outras funcionalidades que dependem de SSR (Server-Side Rendering) não estão disponíveis.

### Como Utilizar

1. Utilize o template `next-blog-starter` para criar um novo projeto com esta configuração:

    [Criar novo repositório com o template](https://bohr.io/createRepository?sampleUrl=https://github.com/bohr-io/next-blog-starter)

2. Certifique-se de que as seguintes variáveis de ambiente estão presentes:

    ```
    BUILD_CMD=npx next build && npx next export
    DEV_CMD=npx next dev --port $PORT
    INSTALL_CMD=npm install
    PUBLIC_PATH=./out
    DEPLOY_PATH=./
    ```
3. Em caso de não utilizar o template `next-blog-starter`, é necessário desabilitar o Image Optimization no arquivo `next.config.js`:
    ```
    images: {
        unoptimized: true
    }
    ```

## Opção 2: Suporte Experimental para SSR

A segunda opção é habilitar o suporte experimental para SSR (Server-Side Rendering) através da criação de variáveis de ambiente.

### Como Utilizar

1. Utilize o template `nextjs-template` para criar um novo projeto com as configurações de SSR habilitadas:

    [Criar novo repositório com o template](https://bohr.io/createRepository?sampleUrl=https://github.com/bohr-io/nextjs-template)

2. Certifique-se de que as seguintes variáveis de ambiente estão presentes:

    ```
    BOHR_WEB_ADAPTER=1
    BOHR_WEB_ADAPTER_TYPE=nextjs
    INSTALL_CMD=npm install
    BUILD_CMD=npm run build
    DEV_CMD=npx next dev --port $PORT
    PUBLIC_PATH=./
    DEPLOY_PATH=./
    ```

    Caso esteja utilizando a versão 14 do Next, adicione também os seguintes valores: 

    ```
    BOHR_FUNCTION_RUNTIME=nodejs18.x
    ```

3. É necessário também adicionar a seguinte configuração ao arquivo `next.config.js`:
    ```
    module.exports = {
        output: 'standalone',
    }
    ```

## Conclusão

Escolha a opção que melhor se adequa às necessidades do seu projeto. O Static Export é geralmente mais rápido e oferece menor latência, mas possui algumas limitações. O suporte experimental para SSR pode ser útil se você precisar de funcionalidades que dependem da renderização no servidor.
