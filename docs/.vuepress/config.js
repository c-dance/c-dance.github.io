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
         {path : "/git/", title:"Git", children:['/git/깃허브 페이지 만들기[1]','/git/Vuepress & 깃허브 페이지[2]', '/git/gitignore파일'], collapsable:true },
         {path : '/adobe/photoshop/', title:"PHOTOSHOP", children:['','/adobe/photoshop/Ps-선택 툴'], collapsable:true},
         {path : '/adobe/illust/', title : "ILLUST", children:[''], collapsable:true}
        ]
}
}
