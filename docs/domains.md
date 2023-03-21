---
sidebar_position: 10
---

# Domínios

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/yDTs9YMLDFY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

No bohr.io é possível adicionar um domínio para utilizar dentro dos seus sites.
Na primeira vez que você adicioanr um domínio, você irá para a seção **Setting the nameservers**, com orientações sobre como configurar os nameservers no seu gerenciador de domínios.

Uma vez que esse domínio tenha sido validado e adicionado aos nameservers, você poderá editar as chaves de DNS.

Na mesma área você pode configurar serviços como o recebimento de e-mails por esse domínio.
Em **Settings ⇾ General**, selecionando um ambiente (como, por exemplo, a branch `main`), você pode editar a URL e usar o seu domínio.

:::caution Importante
Você não pode usar `.` antes do seu domínio, pois se trata de **Tier 1** de subdomínios. Só é possível usar o caractere `-`.
:::
