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
        sidebar :[
         {path : "/gitpage/", title:"Github Page", children:['/git/gitpage1','/git/gitpage2'], collapsable:true },
         {path : "/git/", title:"GIT", children:["/git/gitignore"], collapsable:true},
         {path : "/js-grammar/", title:"JS-grammar", children:[], collapsable:true},
         {path : "/js-web/", title : "JS-web", children:['/js-web/dom'], collapsable:true},
         {path : "/html/", title:"HTML", children:[], collapsable:true},
         {path : "/css/", title:"CSS", children:[], collapsable:true},
         {path : "/photoshop/", title:"PHOTOSHOP", children:
         ['/photoshop/Ps-레이어','/photoshop/Ps-문자', '/photoshop/Ps-브러시','/photoshop/Ps-사진배경', '/photoshop/Ps-색보정',
         '/photoshop/Ps-선택 툴','/photoshop/Ps-etc'], 
         collapsable:true},
         {path : "/illust/", title : "ILLUST", children:[], collapsable:true},
         {path : "/note/", title : "NOTE", children:['/note/clonecoding1'], collapsable:true}
        ]
}
}
