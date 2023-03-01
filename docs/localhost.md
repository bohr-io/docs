---
sidebar_position: 13
---

# Localhost

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/Rdgah9e_HAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Em [Overview ⇾ projeto ⇾ core] você acessa os ambientes de localhost (os ambientes que estão rodando nas máquinas dos desenvolvedores) e consegue visualizá-los diretamente na tela (graças aos **Durable Objects** da **Cloudflare**).

Para rodar um localhost, basta copiar o seguinte comando:

````
git clone https://github.com/bohr-io/app-template.git
cd app-template
npx -y bohr@latest dev
````

Se as configurações de **variáveis de ambiente** e de **dev CMD** estiverem certas, o comando vai rodar perfeitamente. Caso surja algum problema, pode nos chamar no [Discord](https://discord.com/invite/p3hhfGg2Uy) para receber ajuda.
