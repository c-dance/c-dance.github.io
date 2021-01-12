# 문자



문자의 크기, 사이즈, 글꼴 등을 지정하는 스타일 속성



## font-family

- 글꼴 속성.

-  지정한 글꼴이 설치되어 있지 않으면 브라우저 기본 글꼴로 표현되므로 순위를 지정하여 여러가지를 지정할 수 있다. (쉼표로 나열)

- 한글 글꼴은 따옴표로 감싼다.

  ```css
  p{
  	font-family : "굴림", "돋움";
  }
  /*사용자 시스템에 굴림 글꼴이 설치되지 않았을 경우 돋움 글꼴로 설정된다*/
  ```



## web-font

웹 사이트에 이미 업로드 되어있는 글꼴을 사용할 수 있다.

사용자 시스템에 해당 글꼴이 설치되지 않았더라도 문서를 불러 오면 글꼴을 다운로드 받을 수 있는 웹페이지와 링크되어 글꼴이 자동 설치된다. 

- html 문서 내에서 불러오기(1)

  ```html
  <html>
  	<head>
  		<link href="<https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap>" rel="stylesheet">
  	</head>
  	<style>
  		p {
  			font-family: 'Black Han Sans', sans-serif;
  		}
  	</style>
  </html>
  ```

  

- html 문서 내에서 불러오기(2)

  @import url(...)을 스타일 시트에서 불러오고 스타일 시트를 링크로 연결하는 방법이 일반적이다.

  ```html
  <style>
  @import url('<https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap>');
  
  p {
  	font-family: 'Black Han Sans', sans-serif;
  }
  </style>
  ```

  

- @fontface

  font-family는 속성이며, @font-face는 지시어이다.

  글꼴을 서버에 저장하고 불러 온다.

  ```html
  <style>
  	@font-face{
  		font-family : 'trana'; <!--글꼴 이름 설정-->
  		src : local('trana'), <!--로컬 시스템에 설치된 글꼴-->
  			url('tarna.eot'); <!--로컬 시스템에 저장한 파일 위치-->
  }
  
  	p{
  	font-family : 'trana';
  }
  </style>
  ```

참고 : [webclub.tistory.com | Web Font - @font-face 적용 방법](https://webclub.tistory.com/261)



## @font-face : 다운로드한 폰트 쓰기

1. 상업적으로 문제 소지 없는 폰트 다운로드(eot, ttf, woff 파일)

   [GIT | IBM-Plex-Sans-KR](https://github.com/IBM/plex/tree/v5.0.0/IBM-Plex-Sans-KR/fonts/complete)

2. 프로젝트 폴더에 다운로드한 폰트들을 옮긴다.

3. 스타일 시트에 @font-face 작성

   ```css
   @font-face{
     font-family : 'ibm';
     src : url('./resources/font/ibm.ttf') format('truetype');
   }
   ```

참고 : [일반 폰트를 웹에 적용하기](https://futurecreator.github.io/2018/07/07/hexo-change-font-face-no-cdn/)



## font-size

폰트 사이즈는 

1. 브라우저에서 직접 지정한 크기 : xx-small < x-small < small < medium < large < x-large < xx-large 
2. 상대 크기 : 부모 요소의 font-size 기준 : smaller < larger 
3. 크기 : 브라우저를 상관하지 않고 직접 지정 : px, pt, em, ex
4. 백분율 : 부모 요소의 font-size를 기준 : %

의 방식으로 지정한다.



크기 설정 단위는 아래와 같다.

- Px : 픽셀. 고정 단위. 모니터에 따라 상대적으로 보이게 된다. 모바일 기기에서는 상대적으로 작게 보인다.
- % : 부모 요소의 폰트 사이즈를 100으로 놓은 백분율 단위
- em : 부모 요소의 폰트 사이즈를 1로 놓은 단위
- rem : 루트 요소의 폰트 사이즈를 1로 놓은 단위
- vw : viewport의 width를 100으로 놓은 백분율 단위
- vh : viewport의 height를 100으로 놓은 백분율 단위



> 웹 사이트에서 보기 좋은 텍스트 폰트 사이즈는 __15~25px__, 타이틀 폰트 사이즈는 __32 ~ 90px__이다.



### pixel

- __html에서 기본 16px이 설정된다.__
- 스타일 시트에서 고정으로 사용하는 단위이다.



### vw

- 반응형 웹 제작시 자바스크립트로 제어하지 않으면, 폰트사이즈를 vw로 준다.





## font-weight

- 문자의 굵기 속성

- normal, bold, bolder, lighter, 100~900.

- 폰트 사이즈가 클 때에는 font-weight을 낮추는 것을 권장한다.

  ```css
  h1{
  	font-weight : bolder;
  }
  /*
  normal : 기본값
  bold : 굵게
  bolder : 더 굵게
  lighter : 더 가늘게
  100 ~ 900 : 400=normal, 700=bold, 직접 지정
  */
  ```

  



## font-style

- 문자의 기울기 속성
- normal, itialic



## font-variant

- 영어 글꼴에서 사용하는 속성. 대문자를 소문자 크기에 맞추어 준다.

- normal, small-caps

  ```css
  p{
  	font-varient : small-caps;
  }
  /*
  noraml : 일반 대문자
  ```



## spacing

- Letter-spacing : 자간 (단위는 폰트 단위 사용)
- Word-spacing : 단어 간 간격(단위는 폰트 단위 사용)



## text-decoration

- 문장에 줄 긋는 속성
- none, undeline(문자 아래에 줄), Outline(문자 위에 줄), line-through(문자 가운데 줄)



## text-transform

- 대소문자 설정 속성
- Capitalize(첫 글자만 대문자로), uppercase(전부 대문자), lowercase(전부 소문자)



## text-shadow

- 그림자 속성
- 익스플로러 9는 지원하지 않는다.
- 그림자의 수평, 수직, 퍼지는 모양과  color를 지정한다.

```css
p {color:#fff; text-shadow:1px 2px 3px rgba(0,0,0,.4);}/*그림자가 텍스트에서 수평으로 1px, 수직으로 2px 그려지고 퍼지는 정도는 3px이다.*/

p {color:#fff; text-shadow:1px 3px rgba(0,0,0,.4);}/*그림자가 텍스트에서 수평으로 1px 수직으로 2px 그려지고 퍼지는 정도는 없다.*/
```



## line-height

- 줄간격 속성
- 단위 : px, %, em, vw 등
- 기본 단위는 1em이다.
- 웹 사이트에서 보기 좋은 줄간격은 120~150%이다. 1em은 텍스트를 읽기에 다소 불편할 수 있다.
- 초기화 css 에서 줄간격은 1로 설정한다. 폰트를 정의할 때 줄간격을 함께 지정하여야 잉여 여백이 생기지 않는다.



## text-rendering

