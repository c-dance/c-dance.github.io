const path = require('path')
const fs = require('fs')

module.exports={
    title : "c-dance 공부 블로그",

    themeConfig: {
        logo : "/img/logo2.png", //default : public
        searchPlaceholder:"search...", //search bar
        lastUpdated: 'Last Updated',
        repo:'c-dance', // address 
        smoothScroll:true,
        nav: [ //navigation bar
          { text: 'Home', link: '/' },
          { text: 'About', link: '/About/' },
        ],

        sidebar : [ 
          {path : "../git", title:"Git", children:["/"], collapsable: true },
          {path : "../adobe", title : "ADOBE", childern : ["/"], collapsable:true}
        ]
}
};

