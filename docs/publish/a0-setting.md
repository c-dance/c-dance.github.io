# 프로젝트 셋팅



## 필수 요구 조건

- 웹 접근성 : 크로스 브라우징 이슈 해결
- 웹 표준성 : 유효성 검사 충족



## 준비

1. 크로스브라우징 이슈 해결 라이브러리 : 폴리필, 벤더 프리픽스 등
2. 웹 표준 (유효성) 검사 : 마크업 검사, css 검사
   - [마크업 유효성 검사](http://validator.kldp.org/)
   - [스타일 유효성 검사]([http://css-validator.kldp.org/](http://validator.kldp.org/))

3. 웹 서버
4. 데이터베이스



### 자원 준비

- 웹 폰트

- 이미지 등 미디어 소스 파일

- SVG

- Reset.css (common.css, base.css)

- meta info 정리한 기본 html 프레임워크(정리된 마크업 문서 설정 정보)

  참고 : [Reset.Css Base.Css Common.Css 언제 어떻게 사용하는가?](https://webisfree.com/2017-09-18/reset-css-base-css-common-css-언제-어떻게-사용하는가)

  참고 : [와이어프레임과 프로토타입에 대한 모든 것](https://blogs.adobe.com/creativedialogue/design-ko/everything-you-need-to-know-about-wireframes-and-prototypes/)

  



### meta information

마크업 문서 셋팅 정보는  head > meta 태그에 정의.

```html
<title> 업체명 | 사명 </title>

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=no">
<!-- 폼요소 선택(포커스)시 확대 현상을 제거 : 반응형 웹 사용하기 위해 설정 user-scalable=no -->

<meta name="Keywords" content="BRANDO, 웹표준, 웹접근성, BRANDO RESTORANT, BRANDO 반응형 웹사이트"> <!--검색 키워드에 노출하기 위해 설정-->

<meta name="Robots" content="index,follow"><!--브라우저의 검색 api가 읽을 수 있도록 설정-->
```



## 와이어 프레임

웹 페이지의 레이아웃 설계도 

참고 : [초보자용 와이어프레임 제작 가이드](https://webdesign.tutsplus.com/ko/articles/a-beginners-guide-to-wireframing--webdesign-7399)

참고 : [화면설계셔 작성방법](https://yslab.kr/148)

- 그리드 설계
- Wrapper : 각 섹션, 1행을 wrapping. 보통 가로는 1행을 다 쓴다.
- gap : 컨테이너간 간격 조정위해 설정
- container : 컨텐츠 컨테이너
- 태그 구조 : Head > body > header > main > section > footer 
- main의 경우 div 아닌 main 태그를 사용할 것.



### reset.css

- font :   줄 간격에 대한 설정이 중요하다. 그렇지 않으면 줄 사이에 필요없는 여백이 1~2 px씩 생긴다. 한 줄 작성.



### skip menu

바로가기 메뉴로서, 웹 접근성을 위해 설정한다. 일반 웹사이트 메인페이지에서 tap키보드를 누르면 나온다. 

- 코드 작성시, 이동하고자 하는 아이디를 쓰는 것이 정석이다.

```css
#skip {z-index:2;position:absolute;top:0;left:0;width:100%;}

#skip li {width:100%;}

#skip li a {display:block;line-height:0;font-size:0;text-align:center;background:#333;color:#fff;}

#skip li a:focus {line-height:60px;font-size:20px;}

#wrap {z-index:1;position:relative;width:100%;overflow:hidden;}
```



### favicon

보통 100px, 50px로 설정한다.



### 벤더 프리픽스

브라우저 별로 css 적용 범위가 다르기 때문에, css 속성에 브라우저 접두어를 붙여 주어야 한다. 벤더 프리픽스는 번거로우므로 prefixfree 파일을 다운로드 받고 스크립트로 불러오는 방식을 사용한다.

[GIT | prefixfree](https://github.com/LeaVerou/prefixfree)

```html
    <script src="vendor/library/prefixfree.min.js"></script>
```



### 크로스 브라우징

html5를 지원하지 않는 익스플로러 하위 버전(익스플로러 8이하)을 지원하기 위해 

- 조건부 주석문으로 익스플로러 n버전에서 열렸을 때 정의
- 주석문 내에 실행할 스크립트 파일 명시

를 해야하며 필수이다.

1. 조건부 주석문

   ```html
       <!--for IE--> : IE 조건부 주석문 시작 코드 
       <!--[if lte IE 9]>  : IE9 버전보다 작거나 같다면(less than equal)
           <script src="./js/lib/IE9.js"></script> : 해당 스크립트를 실행한다.
       <![endif]--> : IE 조건부 주석문 완료 코드
   
       <!--[if lte IE 8]> : IE8 버전보다 작거나 같다면
           <script src="./js/lib/html5shiv.min.js"></script>    
           <script src="./js/lib/jqPIE.js"></script>    
           <script src="./js/lib/PIE.js"></script>   
       <![endif]-->
   ```

2. 라이브러리

   - Html5shiv.js

     html5를 익스플로러 5~9 버전에서 작동하록 도와준다. (html5의 시맨틱 태그 인식)

     [GIT | html5shiv](https://github.com/aFarkas/html5shiv#html5shivjs)

   - css3PIE.js

     익스플로러에서 css3가 구동될 수 있도록 도와준다.

     [css3PIE download](http://css3pie.com/download/)

   - IE9.js

     IE9이하의 익스플로러 버전에서 css가 구동될 수 있도록 도와준다.

     [GIT | IE9](https://github.com/mylovecompany/ie9-js)

     

     