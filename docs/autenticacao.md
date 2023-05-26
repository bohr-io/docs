---
sidebar_position: 12
---

# Autenticação

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/MwbRPmeHGaI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

No bohr.io você pode configurar uma autenticação, tanto para todos os ambientes do seu projeto quanto ou para alguma branch, pelo caminho **Settings ⇾ Authentication ⇾ caixa de seleção METHOD**.

A autenticação do bohr.io permite que você inclua vários usuários e senhas.

Além da **_Basic Authentication_**, a bohr.io oferece **integração do OAuth com GitHub**, que permite autenticações com Google, Discord e outros provedores.

Para isso, você precisa: 

1. logar no GitHub;
2. acessar *Settings*;
3. acessar *Developer settings* (última opção da barra de menus no lado esquerdo);

![developer settings](https://images.bohr.io/oauth1.png)

4. acessar *OAuth Apps*; 
5. criar uma **aplicação OAuth** (os trechos grifados representam formatos obrigatórios; após o preenchimento das lacunas mostradas na imagem, clique em *Register application*);
6. na próxima tela, você vai copiar as suas chaves `client` e `secret` - para o `secret` você precisa clicar em *Generate a new client secret* (dica: salve as chaves em um bloco de notas, pois você vai precisar delas em seguida - além do que elas ficarão invisíveis a partir de agora);
7. para configurar o `client` e o `secret` dentro da bohr.io, você precisa logar na plataforma e adicionar novo projeto:
8. escolha um template (neste exemplo vamos usar o *Portfolio Template*);
9. renomeie o subdomínio e clique em *Publicar* no fim da tela;
10. na tela **Overview**, clique no seguinte ícone:
11. ao aparecer o seu projeto, copie a URL "teste-bohr.bohr.io" (dica: salve em um bloco de notas, pois você vai precisar dessa URL);
12. volte na tela do GitHub onde você obteve as chaves `client` e `secret` e cole a URL "teste-bohr.bohr.io" nos campos *Homepage URL* e *Authorization callback URL* (não esqueça de manter "bohr/signin" ao final da URL em *Authorization callback URL*); em seguida clique em *Update application*;
13. volte para a tela **Overview** na bohr.io e clique em *Configurações*;
14. Dentro da página de **Configurações**, clique em *Autenticação*; 
- em *Método*, selecione **oauth**;
- em *Provedor*, selecione **GitHub**;
- insira nos respectivos campos o `client` e o `secret` que você salvou no bloco de notas;
- em *Proteger*, selecione **Front-end e Back-end**; 
- clique em *Salvar*. 


