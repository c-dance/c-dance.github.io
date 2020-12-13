const path = require('path')
const fs = require('fs')

module.exports={
    title : "c-dance 공부기록",

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
        sidebar :[
         {path : "/gitpage/", title:"Github Page", children:['/gitpage/gitpage1','/gitpage/gitpage2'], collapsable:true },
         {path : "/git/", title:"GIT", children:["/git/gitignore"], collapsable:true},
         {path : "/js-grammar/", title:"JS-grammar", children:[], collapsable:true},
         {path : "/js-web/", title : "JS-web", children:['/js-web/dom'], collapsable:true},
         {path : "/html/", title:"HTML", children:[], collapsable:true},
         {path : "/css/", title:"CSS", children:[], collapsable:true},
         {path : "/photoshop/", title:"PHOTOSHOP", children:['/photoshop/0선택툴'
          ,'/photoshop/1레이어','/photoshop/2레이어스타일','/photoshop/3레이어변형']
          , collapsable:true},
         {path : "/illust/", title : "ILLUST", children:[], collapsable:true},
         {path : "/note/", title : "NOTE", children:['/note/clonecoding1'], collapsable:true}
        ]
}
}
