# [CSS] 박스 모델(1)



웹 문서는 여러 개의 박스 모델이 모여 구성한다. 이 박스 안에는 { 마진, 패딩, 테두리}의 여러 겹의 박스가 겹쳐져 있다. css를 작성할 때에도 컨텐츠(텍스트, 이미지)의 스타일 방법으로 박스 모델을 사용한다.

박스 모델의 쌓는 방식(나열/배치)은 박스가 블록 레벨 요소인지, 인라인 레벨 요소인지에 따라 달라진다.



## 박스 구성

- 컨텐츠는 컨텐츠 영역을 가리킨다. Text, img 등의 영역이다.
- __테두리와 컨텐츠 사이의 여백__인 padding이 있다. 박스 내부에 위치하며, 컨텐츠를 감싸는 영역이다.
- 컨텐츠는 테두리(border)를 갖는다. 패딩과 컨텐츠를 둘러싼다.
- 각 __박스 모델의 간격을 조절하기 위해__ 박스 모델이 외부(다른 박스 모델)에 대해 갖는 여백, margin이 테두리를 감싼다. 
- 각 영역은 top, bottom, right, left를 갖는다.

```````txt
|----------------------------------------------|
|       margin                                 |
|    |-------------------------------------|   |
|    |        border                       |   |
|    |    |----------------------------|   |   |
|    |    |       padding              |   |   |
|    |    |    |------------------|    |   |   |
|    |    |    |     contents     |    |   |   |
|    |    |    |------------------|    |   |   |
|    |    |----------------------------|   |   |
|    |-------------------------------------|   |  
|                                              |
|----------------------------------------------|
```````





## margin

**박스 모델 간의 간격을 설정할 때 사용한다.**

마진은 현재 요소의 주변 여백이다. 마진을 사용하면 해당 요소의 외부 여백 크기, 즉 요소 간의 간격을 조절하고 정렬할 수 있다.

__블록 모델 요소는 처음에 100%의 너비를 갖기 때문에 마진을 주어야 요소 간 정렬할 수 있다.__

```css
.box{
	margin-top : 10px;
	margin-bottom : 10px;
}

.box{
	margin : 10px 5px 10px 5px; /*top-right-bottom-left*/
}

.box p{
	margin : 0.2% 0.1%; /*top,botton : 10px & right,left : 5px*/	
}

p{
	margin : 10px 5px 20px; /*top:10px & right,left:5px & bottom:10px*/ 
}

div{
	margin : auto; 
	/*display 속성에서 지정한 값에 맞게 적절하게 자동 설정*/
}

div{
	margin : 0.1% auto; 
	/*요소의 너비를 뺀 나머지 공간의 좌우마진도 자동으로 맞워준다 -> 중앙정렬*/
}
```





## 마진 겹침

마진 상쇄, Margin collapsing 을 이른다. 요소 간의 마진이 겹쳐서 한 쪽 요소의 마진이 상쇄된다.

1. 서로 다른 박스 모델의 인접한 마진 겹침(상쇄)

   인접한 마진이 있을 때(인접한 두 개의 박스 모델), 두 값이 동일한 경우 상쇄되어 중복값의 마진 하나만 표현된다. 만약 두 값이 다른 경우 더 큰 값의 마진 하나만 표현된다.

   

2. 컨텐츠가 없어 height=0인 태그의 상하 마진 겹침(상쇄)

   어떤 블록 모델의 컨텐츠가 없을 경우(시각적 표현이 없을 경우) 상하 마진은 인접하게 되며, 마진 상쇄가 되어 두 마진의 중복값(상하 마진값이 동일할 때) 혹은 더 큰 값의 마진 하나만 남는다.

   

3. 부모 박스 모델과 자식 박스 모델의 인접한 마진 겹침(상쇄)

   부모 박스 모델의 컨텐츠가 없을 때, 부모 박스 모델의 마진과 자식 박스 모델의 마진이 상쇄된다. 중복값이나 더 큰 값이 마진값이 된다.

   ```css
   #parent{
   	margin-top : 100px;
   }
   #child{
   	margin-top : 50px;
   }
   /*부모 박스 모델의 컨텐츠가 없으면 상쇄되어 남은 마진값은 100px*/
   ```

   참고 : [velog.io/@raram2 | CSS 마진 상쇄(Margin-collapsing) 원리 완벽 이해](https://velog.io/@raram2/CSS-%EB%A7%88%EC%A7%84-%EC%83%81%EC%87%84Margin-collapsing-%EC%9B%90%EB%A6%AC-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4)





## border

컨텐츠의 테두리 속성

- Border-width

  **컨텐츠 테두리 두께를 지정하는 속성**

  테두리 두께가 지정되어야  border-style을 설정했을 때 지정한 두께만큼 테두리가 보인다.

  테두리 두께는 시계방향으로 상-우-하-좌 를 각각 다르게 설정할 수 있다.

  ```css
  .box{
  	border-top-width : 1px;
  	border-right-width : 1px;
  	border-bottom-width : 1px;
  	border-left-width : 1px;
  }
  
  .box {
  	border-width : thin; /* thin < medium < thick */
  }
  
  .box{
   border-width : thin medium; /*top,bottom : thin & left,right : medium*/
  }
  
  .box{
  	border-width : 1px 2px 1px 2px; /*top-right-bottom-left*/
  }
  ```



- Border-style

  테두리 선 스타일을 지정하는 속성

  ```css
  div {
  	border-width : 2px;
  	border-style : double;
  }
  
  
  /*
  none : 테두리 보이지 없음 - 기본값
  hidden : 테두리 보이지 않음(border-collapse : collapse; 이면 다른 테두리도 안 보임)
  solid : 실선
  dashed : 짧은 직선으로 연결된 선
  dotted : 점선
  double : 이중선/ 두 선의 간격은 border-width로 설정
  groove : 테두리를 음각한 것처럼 보이게 함
  insert : 테두리가 박혀있는 것 처럼 보임(boarder-collapse : sepereate;)
  					groove와 같이 보임(boarder-collapse : collapse;)
  ridge : 테두리가 튀어나온 것 처럼 보이게 함
  outset : 테두리가 양각한 것처럼 보임(boarder-collapse : seperate;)
  					ridge와 같이 보임(boarder-collapse : collapse;)
  */
  ```



- Border-color

  테두리 색상을 지정하는 속성

  ```css
  .box{
  	border-top-color : blue;
  	border-right-color : red;
  	border-bottom-color : blue;
  	border-left-color : red;
  }
  
  .box{
  	border-color : blue;
  }
  ```

  

- Border-radius

  테두리 모퉁이를 둥글게 만드는 속성. 

  모퉁이에 원을 붙이다고 생각하고 모퉁이 방향와 원의 반지름을 지정한다.

  ```css
  .box{
  	border-top-left-radius : 30px; /*박스 상단 좌측 모서리 설정*/
  	border-bottom-right-radius : 30px;
  }
  
  .box{
  	border-radius : 10%;
  }
  
  .box{
  	border-radius : 30px; 30px; 10px; 10px; /*상좌-상우-하우-하좌*/
  }
  
  /*모서리를 타원형태로 라운딩하기*/
  .box{
  	border-top-left-radius :  50px 30px; /*수평 반지름 50px, 수직 반지름 30px*/
  }
  ```



- border

  속성(두께, 색상, 스타일)을 하나로 묶어서 지정할 수 있다.

  ```css
  .box{
  	border-top : 2px blue dotted; /*속성 순서는 상관 없다*/
  	border-bottom : 2px black dotted;
  } 
  
  .box{
  	border : 2px blue solid;
  }
  ```





## padding

패딩은 컨텐츠와 테두리border 사이의 여백 공간이다. (마진은 border 바깥, 패딩은 border안 쪽의 여백이다). 

패딩의 속성 사용법은 마진의 속성 사용법과 같다.

```css
div{
	padding-top : 10px;
	padding-right : 15px;
}

div{
	padding : 10px 15px;
}

div{
	padding : 10px 5px 15px;
}

div{
	padding : 10px 20px 10 px 20px;
}

```





## box-sizing

box-sizing 속성은 컨텐츠 너비와 높이로 설정했던 width, height를 컨텐츠에 대한 사이즈로 제한할 것인지 패딩/테두리를 포함한 사이즈로 취급할 것인지 설정하게 해 준다. 

참고 : [MDN | box-sizing](https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)

박스 모델의 width, height 속성은 컨텐츠의 너비와 높이 속성이다. 박스 모델 전체의 너비와 속성은 <컨텐츠> 뿐만 아니라 <패딩>과 <테두리>를 포함해야 한다. (마진은 모델간 간격을 설정하는 속성이다)

때문에 width, height을 정의하고, padding, border 값을 주면 padding, border 는 width, height 값 내에서 조정되는 것이 아니라 플러스된다. 

margin은 박스 간 간격 조정을 위해 있으므로 이를 제외하고, 컨텐츠 영역의 너비와 높이를 설정함에 있어 padding과 border를 포함하기 위해서는 box-sizing속성을 이용하면 된다. 

```css
* {
	box-sizing : border-box; /*처음부터 모든 요소의 사이즈가 border-box로 처리될 수 있도록 처리*/
}

.content-box {
  box-sizing : content-box; /*기본값 : width, height은 컨텐츠 영역만 가리킴*/
}

.box{
	/*크기 = 테두리+패딩+컨텐츠 영역*/
	box-sizing : border-box;
	width : 200px; /*컨텐츠 영역 = width-(border+padding) = 170px*/
	height : 300px; /*컨텐츠 영역 = width-(border+padding) = 270px*/
	margin : 20px;
	padding : 10px;
	border : 5px;
}

.box{
	/*크기 = 컨텐츠 영역 : 기본값*/
	box-sizing : content-box;
	width : 10px;
	height : 20px;
	margin : 20px;
	padding : 10px;
	border : 5px;
}
```





## 박스 사이즈

박스 사이즈는 절대값(px)을 줄 수도 있고, 부모 박스를 기준으로 상대값(%)으로 설정할 수도 있다.

```css
.container {
		width : 960px;
}

.container .title {
	width : 20%;
}
```





## 정렬

박스 모델을 정렬하는 여러가지 방법이 있다. 박스의 외부 여백 속성을 사용 할 수도, css의 정렬 속성을 사용할 수도 있다.



### margin으로 중앙 정렬

박스 모델을 중앙 정렬하기 위해서는 박스 외부 여백을 조정하는 margin 속성을 사용하면 된다. margin값을 auto로 줄 경우 윈도우 크기에 변화가 생겨도 입력값대로 정렬한다.

```css
.container {
	width : 1140px; 
	margin-right : auto;
	margin-left : auto;
  /*margin : 0 auto;*/
}
```



### float으로 좌우정렬

박스모델(블럭 요소)의 Float 속성에 right, left값을 주어 좌우정렬을 할 수 있다. clearfix가 동반되어야 한다.

```css
.side-box {
	float : right;
}

img.left-side{
	float : left; 
	margin-right : 10px; /*우측에 텍스트가 놓이면 오른쪽 여백도 띄워줘야 한다.*/
}
```



### clearfix

__float속성을 clear하는 방법__ 이다.

만약 부모 박스(요소) 하위에 위치한 상태에서 float속성을 사용하면, 이후 부모 박스와 자식 박스 간의 연결은 단절되고 각개의 박스가 된다. float속성을 가진 박스 다음에 오는 박스도 그대로 float속성을 물려 받는다. 

때문에 float의 영향을 해당 박스로 제한하고, 다음에 오는 박스는 여전히 부모 박스의 속성을 이어 받도록 하기 위한 방법으로 clearfix가 제안되었다.

예 1 : clear 속성을 직접 사용

```css
p{
	clear : left; /*이전에 float:left; 으로 설정되면 clear도 동일한 방향으로 해제*/
}

p{
	cleat : both; /*좌우 상관 없이 모두 기본으로 초기화*/
}

.clearfix {*zoom:1;} /*IE8에서 ::after적용 안되는 문제 보완*/
.clearfix::after{
  display:block;
  clear:both;
  content:"";
}
```



참고 :

 [워너비 스페셜 | CSS / float를 clear하는 방법 네가지(clearfix)](https://takeuu.tistory.com/60)

[ofcourse.kr | css](https://ofcourse.kr/css-course/clear-%EC%86%8D%EC%84%B1)

