# ajax



출처 : [Do it! 웹사이트 따라 만들기](http://www.yes24.com/Product/Goods/83573339)



## 개념

Asynchronous Javascript and XML

자바스크립트와 XML을 통한 비동기 통신 (비동기 : 하나의 일에 동기화되지 않고, 여러가지 일을 동시에 수행할 수 있음)

웹 페이지는 비동기 통신을 사용하기 때문에, 하나의 페이지 상에서 여러가지 작업을 할 때, 작업이 완료될 때마다 페이지 전체를 다시 바꿀 수고가 필요 없다.

 현재 페이지는 계속 띄워주면서(예 : 상품 목록 페이지), 클라이언트의 요청에 의한 다른 작업(예 :특정 상품을 장바구니 담기)을 수행할 수 있다. 



## jQuery로 ajax 사용하기

jQuery로 ajax를 사용하면 jQuery가 브라우저간 호환(크로스 브라우징)을 알아서 해결한다는 이점이 있다. 

```
$ajax({
	url : 'url address',
	type : 'get',
	dataType : 'json',
	success : eventhandler(function)
})
```

