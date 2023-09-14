/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introdução',
      id: 'start',
    },      
    {
      type: 'category',
      label: 'Utilizando o Bohr',
      items: [
        {
          type: 'doc',
          id: 'importacao',
        },
        {
          type: 'category',
          label: 'Templates',
          items: [
            {
              type: 'doc',
              id: 'Templates/default-templates',
            },
            {
              type: 'doc',
              id: 'Templates/dashboard-template',
            },
            {
              type: 'doc',
              id: 'Templates/gatsby-template',
            },
            {
              type: 'doc',
              id: 'Templates/portfolio-template',
            },
          ],
        },        
        {
          type: 'category',
          label: 'Frameworks',
          items: [
            {
              type: 'doc',
              id: 'Frameworks/nextjs',
            },
            
          ],
        },        
      ],
    },
    {
      type: 'category',
      label: 'Configurações do Projeto',
      items: [
        {
          type: 'doc',
          id: 'project-settings',
        },
        {
          type: 'doc',
          id: 'variaveis-de-ambiente',
        },
        {
          type: 'doc',
          id: 'versao-node-js',
        },
        {
          type: 'doc',
          id: 'autenticacao',
        },             
        {
          type: 'doc',
          id: 'preview-deploys',
        },
        {
          type: 'doc',
          id: 'localhost',
        },          

        {
          type: 'doc',
          id: 'logs',
        },
      ],
    },
    {
      type: 'category',
      label: 'Domínios',
      items: [
        {
          type: 'doc',
          label: 'Domínios',
          id: 'domains',
        },   
        {
          type: 'doc',
          id: 'dominios-disponiveis',
        },
      ],
    },
    {
      type: 'doc',
      id: 'CLI',
    },           
    {
      type: 'doc',
      id: 'pnpm-support',
    },      
    {
      type: 'doc',
      id: 'fair-use-policy',
    },      
    {
      type: 'doc',
      id: 'privacy-policy',
    },      
    {
      type: 'doc',
      id: 'terms-of-use',
    },      
   
  ],
};

module.exports = sidebars;
