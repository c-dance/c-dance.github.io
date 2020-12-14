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
         {path : "/gitpage/", title:"Github Page", children:['/gitpage/gitpage1'
         ,'/gitpage/gitpage2', '/gitpage/gitpage3'], collapsable:true },
         {path : "/git/", title:"GIT", children:["/git/gitignore"], collapsable:true},
         {path : "/js-grammar/", title:"JS-grammar", children:[], collapsable:true},
         {path : "/js-web/", title : "JS-web", children:['/js-web/dom'], collapsable:true},
         {path : "/html/", title:"HTML", children:[], collapsable:true},
         {path : "/css/", title:"CSS", children:[], collapsable:true},
         {path : "/photoshop/", title:"PHOTOSHOP", children:['/photoshop/a선택툴'
          ,'/photoshop/b레이어','/photoshop/c레이어스타일','/photoshop/d레이어변형'
          ,'/photoshop/e마스크', '/photoshop/f사진배경', '/photoshop/g페인트'
          ,'/photoshop/h펜툴', '/photoshop/i브러시', '/photoshop/j문자'
          ,'/photoshop/k색보정', '/photoshop/l이미지보정', '/photoshop/m쉐이프툴'
          ,'/photoshop/n기타']
          , collapsable:true},
         {path : "/illust/", title : "ILLUST", children:[], collapsable:true},
         {path : "/note/", title : "NOTE", children:['/note/clonecoding1'], collapsable:true}
        ]
}
}
