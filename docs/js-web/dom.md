# DOM

## 자바스크립트

DOM과 통신할 수 있는 언어. 

HTML은 구조 레이어, CSS는 프레젠테이션 레이어, 자바스크립트는 인터랙티브 레이어로 작동한다. 인터랙티브 레이어는 사용자와 페이지의 상호작용을 제어한다. 

> DOM의 용도는 두 가지다. 첫째, DOM은 자바스크립트(또는 다른 언어)가 이해할 수 있는 형태로 마크업을 번역함으로써 구조화된 웹 페이지 '지도'를 제공한다. DOM이 없다면 자바스크립트는 문서에 대한 어떤 것도 알 수 없다. 자바스크립트가 DOM을 통해 접근할 수 있는 문서 전체를 '노드node'라고 하며, 문서 안의 개별 요소도 노드라고 한다. 텍스트의 모든 요소, 주석, 내용이 노드다.

> 둘째, DOM은 노드에 접근할 수 있는 메서드나 함수를 자바스크립트에 제공한다.

## window

- 자바스크립트의 모든 변수와 함수는 window라는 객체에 장착된다. 즉 전역 범위는 window이고, 만약 전역에서 변수나 함수를 선언하면 그것은 window의 속성, 메서드가 된다.

## DOM : Document Object Model

- HTM은 문서이고, 자바스크립트는 프로그래밍 언어이다. DOM은 HTML문서를 구조화하여 표현한 것, 객체 모델로 표현한 것이다. 이 모델을 기반으로 자바스크립트가 HTML 문서에 프로그래밍적으로 접근하고 조작할 수 있다.
- 웹 브라우저 API는 HTML 문서를 DOM 모델로 변환한다.
- DOM Tree : 돔은 window.document → body → h1, div, ol ... 과 같은 트리 구조 구성된다. 이를 Parent element - child element 로 나누어 구분할 수 있다.
- 윈도우의 객체. 윈도우는 전역 객체이므로 따로 명시하지 않아도 document.createElement()의 형식으로 전역객체의 DOM을 불러올 수 있다.
- DOM 메서드는 돔 트리를 돌면서 노드(노드의 요소, 텍스트)를 반환한다. (예 : document.getElementsbyClassName() )

> 자바스크립트의 DOM지도는 양방향으로 작동한다.  어떤 마크업이라도 변경되면 document가 갱신되며 document안의 어떤 것이라도 변경되면 마크업이 갱신된다.

## 이벤트

> DOM 이벤트는 브라우저에서 발생하는 사건을 나타내는 API다. 여기에는 사용자 행동, CSS 애니메이션, 이미지 로딩 완료와 같은 브라우저 내부의 이벤트 등이 포함된다.

이벤트는 자바스크립트와 클라이언트가 상호작용 하도록 해 준다. 클라이언트의 입력 혹은 선택으로 어떤 이벤트가 발생하면 그 다음에 수행할 내용을 자바스크립트 코드로 짜면 된다. 

- event.preventDefault() : 이벤트가 발생했을 때 브라우저가 기본적으로 수행하는 동작을 막는다.
- this : 이벤트를 받은 함수에서(이벤트 핸들링 함수) this 는 이벤트를 촉발한 요소를 가리킨다.

## 즉시 실행 함수

- immediately-invoked function expression : IIFE
- 익명함수를 괄호로 감싸 즉각 실행할 수 있도록 처리한 함수
- 페이지가 로딩될 때 즉시 실행되고, 외부의 다른 변수나 함수에서 참조할 수 없다.
- 즉시 실행 함수 내부에서 선언한 변수는 전역 객체(window)에서도 접근할 수 없다.

```jsx
(function(){
	const title = document.createElement("span");
	title.innerText = "webtitle";
})();
```

## js에서 css표기법

- css는 "margin-top" 처럼 하이픈(-)을 사용할 수 있다. 자바스크립트에서는 하이픈대신에 언더바( _ )를 쓰거나 낙타표기법으로 쓴다. 예를 들어 css의 margin-top을 자바스크립트에서는  "marginTop"로 표현한다.
- 하지만 자바스크립트는 행위 계층, css는 표현 계층이므로 자바스크립트에서의 스타일 작업을 지양한다. (HTML은 스트럭쳐 레이어, 자바스크립트는 인터랙티브 레이어, CSS는 프레젠테이션 레이어)
- 그러므로 css 속성을 직접 바꾸지 않고 특정 css를 적용하는 클래스를 추가하는 방식으로 접근한다.

    ```jsx
    const startBTN = document.getElementById("start-btn");
    startBTN.style.display = "none"; //지양한다.
    startBTN.setAttribute("class", "hide-btn");//권장한다.
    ```