const path = require('path')

module.exports={
    title : "c-dance 공부 수집",
    resolve: {
      alias: {
        '@img' : "./public/img"
      }
    },
    favicon : "/img/favicon.png",


    themeConfig: {
        logo : "/img/logo.png", //default : public
        head: [
          ['link', { rel: 'icon', href: '/img/logo.png' }]
        ],
        favicon : "/img/favicon.png",
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Profile', link: '/Profile/' },
          { text: 'git', link: 'https://github.com/c-dance', target:'_self' }
        ],
        sidebar: [
            {
              title: 'Vue',   // required
              path: '/Vue/',      // optional, link of the title, which should be an absolute path and must exist
              initialOpenGroupIndex: -1,
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/Vue/vue-cli'
              ]
            },
            {
              title: 'Algorithm',
              path  : '/Algorithm/',
              children: [ '/Algorithm/BruteForce/'],
              //initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
              collapsable: false, // optional, defaults to true
              sidebarDepth: 2,    // optional, defaults to 1
            },
          ]  
      },
}