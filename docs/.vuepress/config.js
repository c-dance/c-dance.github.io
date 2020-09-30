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
              title: 'vue',   // required
              path: '/vue/',      // optional, link of the title, which should be an absolute path and must exist
              initialOpenGroupIndex: -1,
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/vue/vue-cli'
              ]
            },
            {
              title: 'vuepress',
              path  : '/vuepress/',
              children: [ '/vuepress/*' ],
              initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
            },
          ]  
      },
}