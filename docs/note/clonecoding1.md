# 클론코딩 수강 노트

강좌 : 바닐라 자바스크립트로 크롬 웹 만들기

[노마드코더 - 바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners/lobby)

### javascript

- 웹을 동작하게 하는 언어
- 모든 브라우저가 사용하는 언어
- more productive
- sum of new tech
- interactive

### variable

1. create
2. initilize
3. use (reference)

### let, const, var

- 첫 사용은 const, 정말로 필요할 때만 let.

### Array

- organizing data
- const daysOfWeek = ["Monday", "Tuesday", ...,"Sunday"];
- 문자열, 숫자, 변수 등 섞어서 넣어도 됨

### Object

- organizing data
- difference : 각 value가 name/식별자를 갖고 있다.

```jsx
const jakeInfo = {
	name : "jake", //name: variable. "jake" : value
	age : 12,
	job : "student",
	married : false,
	hobbys : ["drawing", "sleeping"],
	family : [{who : "mother", age:45}, {who : "grandmother", age : 70}]
	}

console.log(jakeInfo.married);
```

### Function

- code pieces
- argument : is like variable. data of outside

### DOM

- document.
- 자바스크립트 : 객체를 DOM(Document Object Model)형태로 변경할 수 있다.
- console.dir()

### Event

- form : submit
- window : resize

### If-else 예제

```jsx
const name = document.querySelector("#name");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const CURRENT_COLOR = name.style.color;
    if(CURRENT_COLOR===BASE_COLOR) name.style.color=OTHER_COLOR;
    else name.style.color=BASE_COLOR;
}

function init(){
    name.style.color = BASE_COLOR;
    name.addEventListener("click", handleClick);
}

init();
```