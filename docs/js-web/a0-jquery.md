# 제이쿼리



자바스크립트 라이브러리로 

- html, css 제어
- 애니메이션 효과 적용
- Ajax 적용

을 도와준다.

자체적 크로스 브라우징을 하기 때문에 어떤 브라우저에서도 사용 가능하다. 



## 사용법

제이쿼리 라이브러리를 다운 받아 마크다운 문서에서 불러 오면 된다.

1. 제이쿼리를 다운로드한다([다운로드 사이트](https://jquery.com/))

2. 프로젝트 폴더에 저장한다.

3. html문서에서 스크립트로 불러 온다.

   ```html
   <script src="./js/jquery.js"></script>
   ```

4. 자바스크립트 파일에서 jquery 문법을 사용할 수 있다.

5. 다운로드 받지 않는 방식 : CDN(Content Delivery Network) 방식으로 스크립트로 불러 온다. CDN 호스트 주소를 지정하면, 온라인 상으로 데이터를 받게 된다.

   ```html
   <script src = 'http://code.jquery.com/jquery-3.2.1.min.js'></script>
   ```

   



## selector

- $기호는 문서 객체에 접근할 수 있는 선택자이다.



### $(document)

- html 문서 자체를 선택하는 선택자이다.

  ```javascript
  $(document).ready(function()){ 
    //.ready()는 문서가 다 완료된 후, 인자로 받는 함수를 실행하라는 뜻
  	alert("문서 로딩 완료")
  }
  
  $(function(){alert('문서 로딩 완료')}); //이렇게 코드를 줄일 수 있다.
  ```

  

### 요소(태그, 클래스, 아이디) 선택자

- 자바스크립트 : document.getElementsById(), getElementsByClassName(), getElementsByTagName()와 같은 기능을 한다.

- 제이쿼리 : $('#header'), $('.wrap'), $('nav')

  ```
  $(h2).css('color', 'blue');
  $(h1#title).css('color', 'red');
  ```

  



### css 선택자

- 자바스크립트 : getAttribute(), setAttribute()와 같은 기능을 한다.
- 제이쿼리 : $('.container').css('backgroundColor', '#fff');
- css 속성 같은 경우 제이쿼리로 직접 바꾸기 보다는 css파일에 클래스를 생성하고, 제이쿼리에서 붙여주는 방식으로 사용한다.



## 메서드

셀렉터 뒤에 __.method()__ 를 붙여 선택 요소를 제어할 수 있다.



### .each()

배열에 대한 메서드로, 배열 객체를 선택자로 지정하고 메서드로 선택한 배열의 인덱스와 아이템을 받아 특정 함수를 수행한다.

```javascript
var urlArray = {
  {name:'DAUM', url:'http://www.daum.net'},
  {name: 'NAVER', url:'http://www.naver.com'},
  {name : 'GOOGLE', url:'http://www.google.co.kr'}
}

$.each(urlArray, function(index, item){
  var output = '';
  output+= '<a href="'+item.url+'">';
  output+= '<h3>' + item.name + '<h3>';
  output+= '</a>';
  $(div.urlList).innerHTML += output;
})

/*------------------------------------------*/

$(div.section).each(function(index, item){
	$(this).addClass("addColor-"+index);
});
```



### .filter()

필터 함수로 문서 객체를 선별하여 선택할 수 있다.



### .noConflict()

다른 라이브러리에서 달러 기호를 쓸 수 있으므로, 라이브러리간 충돌이 일어날 수 있다. 

이때는 $.noConfilct(); 를 선언하고 달러 기호를 다른 변수명으로 대체할 수 있다.