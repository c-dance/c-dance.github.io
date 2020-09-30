const path = require('path')

module.exports={
    title : "c-dance 공부하고 만들고",

    resolve: {
      alias: {
        '@img' : "./public/img"
      }
    },


    themeConfig: {
        //logo: 'logo.png',
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
                '/Vue/vue-cli/'
              ]
            },
            {
              title: 'VuePress',
              path  : '/VuePress/',
              children: [ '/VuePress/*'],
              initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
            },
          ]  
      },
}