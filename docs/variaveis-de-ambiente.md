---
sidebar_position: 2
---

# Variáveis de Ambiente

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/CNx7kQZ5-II" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

As **variáveis de ambiente** do [bohr.io](https://bohr.io "borh.io") são úteis para armazenar informações sensíveis, como credenciais de bancos de dados e chaves de APIs, entre outros exemplos.

Atualmente o bohr.io utiliza por padrão algumas variáveis de ambiente, as quais podem ser alteradas no menu **Build & Desenvolvimento** nas configurações de seu projeto.:

- `BUILD_CMD`
- `DEV_CMD`
- `INSTALL_CMD`
- `DEPLOY_PATH`
- `PUBLIC_PATH`

A versão do nodeJS é exemplo de variável de ambiente que pode ser adicionada, já que alguns frameworks exigem versões mais atualizadas como o Next 14 por exemplo: 

```
BOHR_FUNCTION_RUNTIME=nodejs18.x
```