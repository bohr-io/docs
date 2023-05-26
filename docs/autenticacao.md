---
sidebar_position: 12
---

# Autenticação

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/MwbRPmeHGaI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

No **bohr.io** você pode configurar uma autenticação, tanto para todos os ambientes do seu projeto quanto para alguma branch, pelo caminho **Settings ⇾ Authentication ⇾ caixa de seleção METHOD**.

A autenticação do bohr.io permite que você inclua vários usuários e senhas.

Além da **_Basic Authentication_**, a bohr.io oferece **integração do OAuth com GitHub**, que permite autenticações com Google, Discord e outros provedores.

Para isso, você precisa: 

1. logar no GitHub;

2. acessar *Settings*;

3. acessar *Developer settings* (última opção da barra de menus no lado esquerdo);

![developer settings](https://images.bohr.io/oauth1.png)

4. acessar *OAuth Apps*; 

![OAuth Apps](https://images.bohr.io/oauth2.png)

5. criar uma **aplicação OAuth** (os trechos grifados representam formatos obrigatórios; após o preenchimento das lacunas mostradas na imagem, clique em *Register application*);

![Aplicação OAuth](https://images.bohr.io/oauth3.png)

6. na próxima tela, você vai copiar as suas chaves `client` e `secret`. Para o `secret` você precisa clicar em *Generate a new client secret* (dica: salve as chaves em um bloco de notas, pois você vai precisar delas em seguida - além do que elas ficarão invisíveis a partir de agora);

![Chaves clients e secret](https://images.bohr.io/oauth4.png)

7. para configurar o `client` e o `secret` dentro da bohr.io, você precisa logar na plataforma e adicionar novo projeto:

![Novo projeto](https://images.bohr.io/oauth5.png)

8. escolha um template (neste exemplo vamos usar o *Portfolio Template*);

9. renomeie o subdomínio e clique em *Publicar* no fim da tela;

![Renomear o subdomínio](https://images.bohr.io/oauth6.png)

10. na tela **Overview**, clique no seguinte ícone:

![Clique no ícone](https://images.bohr.io/oauth7.png)

11. ao aparecer o seu projeto, copie a URL "teste-bohr.bohr.io" (dica: salve em um bloco de notas, pois você vai precisar dessa URL);

12. volte na tela do GitHub onde você obteve as chaves `client` e `secret` e cole a URL "teste-bohr.bohr.io" nos campos *Homepage URL* e *Authorization callback URL* (não esqueça de manter "bohr/signin" ao final da URL em *Authorization callback URL*); em seguida clique em *Update application*;

![Preencher Homepage URL e Authorization callback URL](https://images.bohr.io/oauth8.png)

13. volte para a tela **Overview** na bohr.io e clique em *Configurações*;

![Clique em Configurações](https://images.bohr.io/oauth9.png)

14. Dentro da página de **Configurações**, clique em *Autenticação*; 
- em *Método*, selecione **oauth**;
- em *Provedor*, selecione **GitHub**;
- insira nos respectivos campos o `client` e o `secret` que você salvou no bloco de notas;
- em *Proteger*, selecione **Front-end e Back-end**; 
- clique em *Salvar*. 

![Método, Provedor e inserção de client e server](https://images.bohr.io/oauth10.png)


