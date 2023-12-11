---
sidebar_position: 3
---

# Import Repositories from Github

<div style={{textAlign: 'center'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/0ctGM494f_Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ maxWidth: '100%' }}></iframe></div>

To import projects hosted in GitHub repositories, go to the new [project page](http://bohr.io/projects/new) and select the [**"Import from GitHub"**](https://bohr.io/projects/new/import) option in the upper right corner of the screen.

Only the repositories to which you have granted access permission will be listed. If you haven't been granted access to any repositories yet, you will click ["Check permissions on GitHub"](https://github.com/apps/bohr-io/installations/new/) to integrate bohr.io with your personal or organizational GitHub account.

For example, in a React project repository, bohr.io will identify from the `package.json` that the framework used is **React** and that the folder containing the content is `build`. With this information, bohr.io will generate the publication.

When you click "**Import**", you must wait a few seconds while the **Overview** screen loads the simulation. In the GitHub repository, bohr.io will commit to adding a **GitHub Actions** workflow file used to build the project (you can track this execution in the **Actions** tab on GitHub).

The repository will install the bohr.io CLI and perform the publication, attempting to identify the framework. Depending on the framework you are using, you may need to make some additional configurations within the site's **Settings** (if you encounter any issues, feel free to reach out to us on [Discord](https://discord.com/invite/p3hhfGg2Uy)).

Once installed, it will run the installation and project build commands using Yarn. You can change the commands in the site's settings.

After the compilation and upload are complete, a publication URL is generated.


:::note
Due to a slight delay on the **Overview** screen, your project's preview may initially return a "Site not Found" message. Don't worry; just refresh the screen.
:::

In the **Settings** screen, under **Environment Variables**, you can see the variables being used during execution. They can be modified in case of any issues or if they are not detected (if needed, reach out to us on [Discord](https://discord.com/invite/p3hhfGg2Uy)).
