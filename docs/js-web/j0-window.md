# window



## window

윈도우 객체는 브라우저의 윈도우를 다르는 객체이다.

BOM, DOM 모두 윈도우 객체에 포함된다.



### 메서드

```javascript
winodw.open("./alarm.html","_blank","width=400, height=400","true");
window.setTimeOut(closeAlarm, 3000);//실행할 함수명과 밀리초를 인자로 준다.
window.setInterval(checkScroll, 1000);//실행할 함수명과 밀리초를 인자로 준다.
window.clearTimeOut(id);
window.clearInterval(id);
window.close(); //윈도우 닫기
```











## screen

현재 열린 스크린 객체

### 객체

- Width, height : 너비, 높이