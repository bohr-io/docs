---
sidebar_position: 8
---

# Authentication

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/MwbRPmeHGaI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

In bohr.io, you can configure authentication for both all environments of your project and specific branches by navigating to **Settings ⇾ Authentication ⇾ METHOD checkbox**.

bohr.io's authentication allows you to include multiple users and passwords.

In addition to ***Basic Authentication***, bohr.io offers **OAuth integration with GitHub**, which allows authentication with Google, Discord, and other providers.

To do this, you need to:

- Log in to GitHub;
- Access *Settings*;
- Go to *Developer Settings* (the last option in the left-side menu);


![developer settings](https://images.bohr.io/oauth1.png)

4. access *OAuth Apps*; 

![OAuth Apps](https://images.bohr.io/oauth2.png)

5. create an **OAuth application** (the highlighted sections represent mandatory formats; after filling in the gaps shown in the image, click on *Register application*);


![Aplicação OAuth](https://images.bohr.io/oauth3.png)

6. on the next screen, you will copy your `client` and `secret` keys. For the `secret`, you need to click on "Generate a new client secret" (tip: save the keys in a notepad because you will need them shortly - and they will become invisible from now on);


![Chaves clients e secret](https://images.bohr.io/oauth4.png)

7. to configure the `client` and `secret` within bohr.io, you need to log in to the platform and add a new project:


![Novo projeto](https://images.bohr.io/oauth5.png)

8. choose a template (in this example, we will use the *Portfolio Template*);

9. rename the subdomain and click on "Publish" at the bottom of the screen.

![Renomear o subdomínio](https://images.bohr.io/oauth6.png)

10. On the “Overview” screen, click on the following icon:

![Clique no ícone](https://images.bohr.io/oauth7.png)

11. when your project appears, copy the URL "teste-bohr.bohr.io" (tip: save it in a notepad because you will need this URL);

12. return to the GitHub screen where you obtained the `client` and `secret` keys, and paste the URL "teste-bohr.bohr.io" into the fields *Homepage URL* and *Authorization callback URL* (don't forget to keep "bohr/signin" at the end of the URL in *Authorization callback URL*); then click on "Update application".


![Preencher Homepage URL e Authorization callback URL](https://images.bohr.io/oauth8.png)

13. get back to the **Overview** screen on bohr.io and click on *Settings*;


![Clique em Configurações](https://images.bohr.io/oauth9.png)

14. Within the **Settings** page, click on *Authentication*;

- in *Method*, select **OAuth**;
- in *Provider*, choose **GitHub**;
- enter the `client` and `secret` you saved in the notepad into their respective fields;
- in *Protect*, select **Front end and Back end**;
- click Save.


![Método, Provedor e inserção de client e server](https://images.bohr.io/oauth10.png)


