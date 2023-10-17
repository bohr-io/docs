To use pnpm, add the following to your file: "/.github/workflows/bohr.yml," right after the line "- uses: actions/checkout@v3":

```
      - run: corepack enable

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm
```

Example of a complete file (correct indentation is mandatory):

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
