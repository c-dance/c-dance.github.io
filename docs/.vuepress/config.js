const path = require('path')
const fs = require('fs')

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

        sidebar : [
          {path : "/git/", title:"Git", children:["/git/","/git/vue-cli"], collapsable: true }
        ]
}
}


function getChildren(folder){
  const extention = [".md",".html"]

  const files = fs   
    .readdirSync(path.join(`${__dirname}/../${folder}`)) // 일치하는 디렉토리의 하위 요소들 불러오기
    .filter(
      (item) => //item : 각개 파일
        item.toLowerCase() != "readme.md" &&
        item.toLowerCase()!='index.md' &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() && //하위 요소이며 파일인 것,
        extention.includes(path.extname(item)) //파일의 확장자가 .md or .html인 것
      )
      
  

  return [[...files]] //... : 열거
  
    
}