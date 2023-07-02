Para utilizar o pnpm, adicione o seguinte no seu arquivo: "/.github/workflows/bohr.yml", logo após a linha "- uses: actions/checkout@v3":

```
      - run: corepack enable

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm
```

Exemplo de arquivo completo (a identação correta é obrigatória):
```
name: bohr.io deploy
on: 
  push:
  repository_dispatch:
    types: [bohr-dispatch]
permissions: write-all
jobs:
  deploy:
    name: Deploy on bohr.io
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - run: corepack enable

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm      
          
      - uses: bohr-io/action@main
```
