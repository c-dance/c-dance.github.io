# 주요 CSS 효과





## before, after

1. html 문서의 정보와 관계 없는 css효과를 주기 위한 속성
2. Position과 __z-index__는 반드시 함께 가야 한다. (Position을 안 주면 z-index가 동작하지 않는다)
3. __{Postion:absolute;}__ 일 때에는 기준 좌표가 되는 __top, left__를 모두 지정해야 한다.
4. before, after는 html 문서의 정보와 무관한, 컨텐츠가 없는 요소이다. css효과를 동작시키기 위해서는 __{content:0;}__ 으로 설정해야 한다.
5. z-index : 레이어 개념으로 이해하면 된다. 값이 높을 수록 상위에 위치하며 아래 레이어를 가린다.



## before, after로 opacity 주기







## width:100%

너비나 높이를 100%로 설정하려면 반드시 부모 요소의 너비나 높이가 정의되어 있어야 한다.

여러 조상 요소들이 앞서 있고, 중간에 한 요소라도 너비 지정이 누락되면, 자식 요소의 100% 설정은 동작하지 않는다. 

노드가 속성을 계속 상속받기에 중간에 누락되면 끊기기 때문에 100%의 기준이 없는 것과 같기 때문이다.



## nav 효과

- Font-weight : 100~900
- 마우스 이벤트시 transition을 주어 부드럽게 처리한다.



## background-repeat

- no-repeat : 백그라운드 이미지가 반복되어 나타나지 않는다. 이미지 원본 크기 그대로 사용할 수 있다.
- Repeat-x : 수평방향으로 이미지가 반복된다.
- Repeat-y : 수직 방향으로 이미지가 반복된다.



## align

- 텍스트 중앙 정렬 : {text-align: center;}
- 태그의 중앙 정렬 : {margin:auto;}





