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
         {path : "/git/", title:"Git", children:['/git/gitpage1','/git/gitpage2', '/git/gitignore'], collapsable:true },
         {path : "/photoshop/", title:"PHOTOSHOP", children:['/photoshop/Ps-문자','/photoshop/Ps-사진배경', '/photoshop/Ps-색보정','/photoshop/Ps-선택 툴'], collapsable:true},
         {path : "/illust/", title : "ILLUST", children:[''], collapsable:true},
         {path : "/note/", title : "NOTE", children:['/note/clonecoding1'], collapsable:true},
         {path : "/js-web/", title : "JS-web", children:['/js-web/dom'], collapsable:true}
        ]
}
}
