# 깃허브 페이지 만들기 [1]

참고 블로그 : 

[쉽고 빠르게 수준 급의 GitHub 블로그 만들기 - jekyll remote theme으로](https://dreamgonfly.github.io/blog/jekyll-remote-theme/)

[하우투: 같이 따라하기 시리즈](https://devinlife.com/howto/)

## 깃허브 페이지 설정

깃허브 페이지는 깃허브의 저장소를 갖고 만든다. 블로그 주소가 될 이름을 가진 저장소를 만들면, 저장소의 파일이 페이지가 되어 뜬다. 

1. 깃허브 블로그가 될 저장소를 만든다.

    저장소의 이름은 [username].github.io로 지어야 한다. 저장소의 이름이 블로그의 주소가 되기 때문이다.

    ![img](/git/깃허브 페이지 만들기[1]/_2020-09-26__1.28.27.png)

2.  repository setting 으로 이동 하면 opetions 목록이 뜬다. 밑으로 스크롤하면 , github pages 파트가 있다. 

    <img src="assets/img/git/깃허브 페이지 만들기[1]/_2020-09-26__1.29.02.png" alt="img">

    아직 활성화가 안 되었다고 뜬다. 어떤 파일도 없기 때문이다. readme.md파일을 올려 주고 다시 온다. 

    ![img](/assets/img/git/깃허브 페이지 만들기[1]/_2020-09-26__1.30.52.png)

    파일을 올리면 깃허브 페이지가 활성화된다. 

    ![img](/git/깃허브 페이지 만들기[1]/_2020-09-26__1.39.15.png)

    3. 주소창에 repository 이름을 치면 페이지가 로드된다.

    페이지는 [readme.md](http://readme.md) 파일 내용이 그대로 올라가 있다.  메인 페이지를 만들고 싶으면 index.html파일을 작성하면 된다.  

    https://c-dance.github.io

    ![img](/git/깃허브 페이지 만들기[1]/_2020-09-26__1.41.17.png)

---

## 깃허브 페이지 테마  
    
옵션에 테마 선택하기가 있다. 들어가서 테마를 고르면 된다. 혹은 지킬 테마 프로젝트들이 올라가 있는 사이트에 들어가서 선택한 후 해당 프로젝트 소스를 다운 받으면 된다. 

[Jekyll Themes](http://jekyllthemes.org/)

Hompage를 누르면 깃허브로, Demo를 누르면 시연 페이지가 나온다. 

깃허브에 들어가서 폴더 구조를 보면 프로젝트가 어떻게 구성되어 있는지 알 수 있다. 

마음에 든 테마들 : 

[vincentchan/mickey](https://github.com/vincentchan/mickey)

[Wiredcraft/carte](https://github.com/Wiredcraft/carte)

[kamikat/jekyll-theme-kagami](https://github.com/kamikat/jekyll-theme-kagami)

[old-jekyll-templates/Read-Only-Jekyll-Theme](https://github.com/old-jekyll-templates/Read-Only-Jekyll-Theme)

[ngzhio/jekyll-theme-hamilton](https://github.com/ngzhio/jekyll-theme-hamilton)

[Ed.](http://elotroalex.github.io/ed/)

폴더 구조에 대한 설명이 잘 되어있는 블로그 : 

[kssim/ap](https://github.com/kssim/ap)