const path = require('path')

module.exports={
    title : "c-dance 공부 수집",

    themeConfig: {
        logo : "/img/logo2.png", //default : public
        searchPlaceholder:"search...",
        lastUpdated: 'Last Updated',
        repo:'c-dance', // address -> github로 이동,
        smoothScroll:true,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/About/' },
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
              initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
              collapsable: true, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
            },
          ]   
      },
}