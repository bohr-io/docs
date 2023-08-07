---
sidebar_position: 7
---

# Logs

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/giELfU942Dw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

Ao abrir a página de **Logs**, você pode clicar no ícone do Visual Studio Code for Web (canto superior direito) para ver o código de uma API simples com um `console.log`. Sempre que essa API for acessada e a página de Logs estiver aberta, o log vai aparecer na área de logs em tempo real.

Para acessar a API, volte para a página **Overview** do site, abra-a em uma nova aba e acesse `/api`. Isso fará com que a solicitação chegue à API. Depois, você pode voltar para a página de Logs e atualizá-la, se necessário, até que os logs apareçam.

Graças aos **Web Sockets** e aos **Durable Objects da CloudFlare**, o processo é instantâneo.

Estamos trabalhando em funcionalidades para permitir o download dos dados e armazená-los em _Local Storage_.
