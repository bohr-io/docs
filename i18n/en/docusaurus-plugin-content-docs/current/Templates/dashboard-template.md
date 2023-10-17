---
sidebar_position: 18
---

# Dashboard

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/nxvmC0qXd4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

The **Dashboard Template** comes with some pre-configured environment variables for compilation, including a connection string to a database hosted on **PlanetScale**. This database doesn't accept structural changes, only data changes.

To access it, click on "**Publish**". bohr.io will publish both the front end and the API, which will already be connected to the database.

Simultaneously, bohr.io will create the repository on GitHub. You can check its creation by clicking on the GitHub icon in the upper right corner.

You can view the code using **Visual Studio Code for Web** by clicking in the upper right corner. There, you will find an API folder. bohr.io uses [**Prisma**](https://www.prisma.io/ "Prisma"), which is an ORM (_object-relational mapping_) for database management.

In the code, you will also see a simple API that handles user CRUD operations.

The Dashboard Template is integrated with **reCAPTCHA** (you can change the key later). For your convenience, an instant login and password are provided, but you can change both.

Upon entering, you will see an example of the API making requests directly to the database. On this screen, you can modify the data.

This template has documentation in **OpenAPI** format. To access it, add `/doc` to the end of the URL, where you can directly call methods for user creation, for example.