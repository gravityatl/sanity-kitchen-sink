export default {
  widgets: [
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
                  buildHookId: '5eee6641e9fafef1eb9062f9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fktga5vt',
                  apiId: '80fc3cbb-bc41-4e17-b24b-2f4d20ccc801'
                },
                {
                  buildHookId: '5eee66427588dedfba84b6e7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1ch65cbg',
                  apiId: '6e9cfc45-6911-45c3-a094-a444bc673cdc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gravityatl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1ch65cbg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
