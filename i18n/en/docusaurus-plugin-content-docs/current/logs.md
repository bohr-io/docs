---
sidebar_position: 7
---

# Logs

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/giELfU942Dw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

When you open the **Logs** page, you can click on the Visual Studio Code for Web icon (top right corner) to view the code of a simple API with a `console.log`. Whenever you access this API and open the Logs page, the log will appear in the real-time logs area.

To access the API, go to the site's **Overview** page, open it in a new tab, and navigate to `/api`. This will trigger a request to the API. Then, you can return to the Logs page and refresh it if necessary until the logs appear.

Thanks to **Web Sockets** and **CloudFlare's Durable Objects**, this is instantaneous.

We are working on features to allow data download and storage in *Local Storage*.

