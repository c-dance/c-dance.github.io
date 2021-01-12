# path finder



오브젝트들을 집합의 개념으로 정돈하는 도구

[참고] [일러스트 초보자를 위한 패스파인더 기능 안내](https://ckmakers.com/81/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=2996003&t=board)



## 사용

- 단축키 : cmd + shift + 9
- 풀다운 메뉴 window -> pathfinder



## shape Modes

서로 다른 속성의 도형이라도 최종 결과물은 맨 앞 도형의 속성을 따른다(예외 : minus front)

### combine/unite

- 합집합
- 개체들이 합쳐지며, 맨 위 개체의 속성으로 통합된다. (fill & stroke는 앞의 도형을 따른다)



### minus front

- 차집합 : front(앞)의 도형을 뺀다.
- 맨 아래 개체만 남기고 다른 개체는 사라진다.



### intersect

- 교집합
- 맨 위 개체의 속성으로 통합된다. (fill & stroke는 앞의 도형을 따른다)



### exclude

- 차집합
- 겹친 부분은 삭제된다.
- 맨 위 개체의 속성으로 통합된다. (fill & stroke는 앞의 도형을 따른다)



## pathfinders

여러개로 분리되는 오브젝트들에 대한 작업이며, 결과물이 그룹으로 산출된다. 때문에 개체 단위로 수정하기 위해서는 패스파인더 실행 후 그룹해제 해야 한다. 

### divide

- 개체 나누기

- outline(stroke) 또한 분할된다. 

  

### trim

- 맨 위의 개체만 온전하고 아래의 개체는 모두 잘려진다. 
- stroke도 사라진다. 



### merge

- 합병
- (fill color 색상이 같다는 조건 하에) 위의 개체가 아래의 개체로 병합된다. 
- 병합되는 위의 개체의 stroke는 사라진다.



### crop

- 맨 위의 개체 기준으로 잘려진다. 



### outline

- 교차점 기준으로 path들이 잘린다.(path 분할)



### minus back

- 맨 위의 개체만 남기고 아래에 깔린 개체는 모두 지운다.