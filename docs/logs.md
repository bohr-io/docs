---
sidebar_position: 11
---

# Logs

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/giELfU942Dw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Na tela de **Logs**, se clicar no ícone do Visual Studio Code for Web (canto superior direito), você verá no código uma API simples com um ``console log``, o qual vai aparecer na área de logs sempre que essa API for acessada e que você estiver com essa página aberta (ela só captura em tempo real).

Para acessar essa API, você pode voltar no **Overview** do site, abri-lo em uma nova aba e acessar ``/api``. A requisição vai bater na API. Daí você pode voltar nos logs e, se for preciso, atualizar a página até que eles apareçam. 

O processo é instantâneo, graças aos **websockets** e aos **Durable Objects da Cloudflare**. 

Estamos trabalhando em features para permitir o download dos dados e também para que eles fiquem armazenados no seu *local storage*. 
