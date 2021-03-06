export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6042c93d4813f7281860fef7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8kjqcq3i',
                  apiId: '0cef00a5-3f73-4211-846f-1893a6d3a908'
                },
                {
                  buildHookId: '6042c93d1d11bb255cada30f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-muctx64w',
                  apiId: '4efff119-0bb3-47dc-b265-1e1a9941a1cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lbucio/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-muctx64w.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
