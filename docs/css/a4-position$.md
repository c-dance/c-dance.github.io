# [CSS] 포지션



position은 요소들을 자유자재로 배치해주는 속성이다.

Css 포지셔닝은 웹 문서의 레이아웃을 만드는 것을 가리키고, 박스모델의 배치를 통해 전체 레이아웃을 만든다.

position 속성값으로 static, relative, absolute, fixed, sticky가 있다.



## position : static

기본값.

작성할 때 요소들을 나열한 순서대로 배치한다.

top, right같은 속성을 사용할 수 없고, float을 사용하여 좌우 배치는 가능하다.



## position : relative

요소들이 나열한 순서대로 배치되며, top, right 등의 속성을 사용할 수 있다.

좌표값을 사용하여 위치를 정하며, 기준 좌표는 static 이었을 때 (원래 위치해야 했던)좌표이다.

기준 좌표의 [top, right, bottm, left] 로 부터 양수만큼 떨어져 있는 혹은 음수만큼 들어가 있는 상대적 좌표로 설정 가능하다.

```css
.box{
	position : relative;
	top : 50px;
	left : 10px;
	right : 20px;
}

.box{
	position : relative;
	top : 50px;
	left : -10px;
}
```



## position : absolute

요소의 나열 순서와 상관 없이 위치시키는 속성.

absolute의 기준 좌표는 가장 가까운 부모/조상 요소 중 position : relative 인 요소의 좌표 값이다.

때문에 position : relative 인 부모 요소를 만들어 주고 사용한다.

(만약 부모 박스 모델에 relative 설정을 안 해 주면 최상위 부모 박스 요소(\<html>)가 기준 좌표가 된다. 또한 __부모 모델의 영향을 벗어난다. __부모 모델 또한 해당 모델과의 링크를 잃는다.)

```css
#wrap{
	position : relative;
	width : 300px;
	height : 200px;
	margin : 10px;
	border : 2px;
	padding : 10px;
}

#wrap .box{
	position : absolute;
	width : 100px;
	height : 100px;
}
```



## position : fixed

스크롤링하여도 고정된 위치에서 벗어나지 않는다. __\<html>이 기준 좌표가 되어 부모 요소의 위치에서도 벗어난다.__

absolute와 속성이 비슷하여 부모 요소와의 링크를 잃게 된다.



## position : sticky 

스크롤링하여도 고정된 위치에서 벗어나지 않는다.