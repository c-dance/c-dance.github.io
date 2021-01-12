# CSS 레이아웃





## wrapper

max-width를 정의하고, 컨텐츠를 중앙 정렬하기 위해 사용한다.

```css
#wrapper{
    max-width:1140px;
    margin : 0 auto;
}
```



## container

Entire-width 전체 너비를 정의하고 컨텐츠를 감싸는 역할을 한다.



## 박스 클래스

웹 페이지를 박스로 디자인 하기 위해 세 가지 클래스를 사용한다.

- wrap 
- gap
- container



1. wrap : 전체 영역 지정하는 클래스. 



2. gap : 컨텐츠 영역을 전체 wrap 영역으로부터 띄우는 역할을 하는 클래스(전체 영역에서 container가 어디에 위치할 것인지 설정한다)



3. Container : 컨텐츠 영역을 감싸는 클래스

   



## 블럭 요소를 한 줄로 쓰기

h1태그나 span 태그를 사용하여 네비게이션을 구성할 때는 블럭 요소를 한 줄로 정렬하게 된다. 이 때는 여러가지 방법을 사용할 수 있다.

- 예 : float, inline-block, inline-box, 그리드, 플렉스 등
- 익스플로러 지원 : float(모두 지원), 플렉스(익스플로러 10이상만)

하지만 웹 접근성을 준수하기 위해서 익스플로러가 지원하는 방법을 택해야 한다. 보통은 익스플로러 8까지 지원하도록 하기에 float나 인라인 블록(자동으로 중앙 정렬)을 권장한다. 

플렉스는 보통 웹앱에서 적용하고, 그리드는 익스플로러 지원을 거의 하지 않는다.

만약 인라인 블록을 쓴다면, 인라인 요소는 자기 너비를 가질 수 없고, 컨텐츠 크기만큼 가진다는 점을 고려한다. 



## 여백

whitespace여백은 

- Between elements
- Between groups of elements
- Between website's section

에 사용한다.

각 영역 간 관계를 구분해 주는 데 여백을 사용한다.



